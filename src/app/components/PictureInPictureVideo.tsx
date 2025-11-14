'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import { useVideoSync } from '../contexts/VideoSyncContext';

// Configuration for video timeframes per slide
// Format: [startTime in seconds, endTime in seconds]
// For multiple clips on one slide, use an array of timeframes: [[start1, end1], [start2, end2]]
// Set to null to disable video for that slide
export const slideVideoTimeframes: (number[] | number[][] | null)[] = [
  [[1389, 1428], [1484, 1499]],  // Slide 0: Introductions
  [1503, 1533.5],     // Slide 1 - prompts and old methods
  [1534, 1558],    // Slide 2 - roles
  [1560, 1611],   // Slide 3 - f1
  [[1612, 1628], [1635, 2081]],   // Slide 4
  [2082, 2409],   // Slide 5
  [2410, 2644],   // Slide 6
  [2646, 3130],   // Slide 7
  [3134, 3159],   // Slide 8
  [3159, 3194],   // Slide 9
  [3195, 3242],   // Slide 10
  [3242, 3273],   // Slide 11
  [3273, 3285],   // Slide 12
];

type PictureInPictureVideoProps = {
  currentSlideIndex: number;
  videoSrc?: string;
};

export default function PictureInPictureVideo({ 
  currentSlideIndex, 
  videoSrc = 'https://dd17w042cevyt.cloudfront.net/videos/features/doodle-to-demo/recording_640x360_compressed1.mp4' 
}: PictureInPictureVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prevSlideIndexRef = useRef<number>(currentSlideIndex);
  const hasUserInteractedRef = useRef<boolean>(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentClipIndex, setCurrentClipIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const videoSync = useVideoSync();
  const videoId = 'picture-in-picture';

  const timeframe = slideVideoTimeframes[currentSlideIndex];
  
  // Normalize timeframe to always be an array of clips
  const clips: number[][] = useMemo(() => {
    if (timeframe === null) return [];
    if (Array.isArray(timeframe[0])) {
      return timeframe as number[][];  // Already multiple clips
    }
    return [timeframe as number[]];  // Single clip, wrap in array
  }, [timeframe]);

  // Reset clip index when slide changes
  useEffect(() => {
    if (prevSlideIndexRef.current !== currentSlideIndex) {
      prevSlideIndexRef.current = currentSlideIndex;
      // Defer state update to avoid synchronous setState in effect
      setTimeout(() => setCurrentClipIndex(0), 0);
    }
  }, [currentSlideIndex]);

  // Reset video to slide's start time when reopened after being dismissed
  useEffect(() => {
    if (!isVisible || clips.length === 0) {
      return;
    }

    const video = videoRef.current;
    if (!video) {
      return;
    }

    // Reset to first clip of current slide
    const firstClip = clips[0];
    const [startTime, endTime] = firstClip;
    
    // Reset clip index (defer to avoid synchronous setState)
    // This will trigger the existing timeupdate handler to be set up for the correct clip
    setTimeout(() => setCurrentClipIndex(0), 0);
    
    // Set video time and handle playback
    const resetVideo = () => {
      // Ensure we're within the valid time range - if past end time, reset to start
      if (video.currentTime < startTime || video.currentTime > endTime) {
        video.currentTime = startTime;
      }
      
      // If video is already at or past end time, pause it immediately
      if (video.currentTime >= endTime) {
        video.pause();
        video.currentTime = endTime;
        setIsPlaying(false);
        return;
      }
      
      // Add a temporary check to ensure video stops at end time
      // This will be replaced by the main timeupdate handler once currentClipIndex is reset
      const tempCheckEndTime = () => {
        if (video.currentTime >= endTime) {
          video.pause();
          video.currentTime = endTime;
          setIsPlaying(false);
        }
      };
      
      const tempTimeUpdate = () => tempCheckEndTime();
      const tempCheckWhilePlaying = () => {
        if (!video.paused) {
          tempCheckEndTime();
          requestAnimationFrame(tempCheckWhilePlaying);
        }
      };
      
      video.addEventListener('timeupdate', tempTimeUpdate);
      if (!video.paused) {
        requestAnimationFrame(tempCheckWhilePlaying);
      }
      
      // Try to autoplay if user has interacted before
      if (hasUserInteractedRef.current && video.currentTime < endTime) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              requestAnimationFrame(tempCheckWhilePlaying);
            })
            .catch(() => {
              // Autoplay failed, user will need to click play
              video.pause();
              setIsPlaying(false);
            });
        }
      } else {
        video.pause();
        setIsPlaying(false);
      }
      
      // Cleanup temporary handler after a short delay (once main handler is set up)
      setTimeout(() => {
        video.removeEventListener('timeupdate', tempTimeUpdate);
      }, 100);
    };

    // Ensure video metadata is loaded before setting time
    let metadataHandler: (() => void) | null = null;
    if (video.readyState >= 2) {
      resetVideo();
    } else {
      metadataHandler = resetVideo;
      video.addEventListener('loadedmetadata', metadataHandler, { once: true });
    }

    // Cleanup
    return () => {
      if (metadataHandler) {
        video.removeEventListener('loadedmetadata', metadataHandler);
      }
    };
  }, [isVisible, clips]);

  // Set video to correct start time when slide or clip changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video || clips.length === 0) {
      return;
    }

    const currentClip = clips[currentClipIndex] || clips[0];
    const [startTime] = currentClip;

    // Set video to start time
    video.currentTime = startTime;
    
    // Always try to autoplay when entering a slide or transitioning between clips
    // Browser will block if user interaction is required, but we attempt it anyway
    let timeoutId: NodeJS.Timeout | null = null;
    let metadataHandler: (() => void) | null = null;
    
    // Use a small delay to ensure video.currentTime is set and video is ready
    const playVideo = () => {
      // Ensure currentTime is set (sometimes it needs a moment)
      if (Math.abs(video.currentTime - startTime) > 0.5) {
        video.currentTime = startTime;
      }
      
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            // Mark that playback started (user interaction may have been required)
            hasUserInteractedRef.current = true;
          })
          .catch(() => {
            // Autoplay failed, user will need to click play
            console.log('Autoplay prevented, user interaction required');
            video.pause();
          });
      }
    };
    
    // Small delay to ensure currentTime is set and video metadata is loaded
    if (video.readyState >= 2) {
      // Video metadata is loaded, can play immediately
      timeoutId = setTimeout(playVideo, 10);
    } else {
      // Wait for video to load metadata
      metadataHandler = playVideo;
      video.addEventListener('loadedmetadata', metadataHandler, { once: true });
    }
    
    // Cleanup
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (metadataHandler) {
        video.removeEventListener('loadedmetadata', metadataHandler);
      }
    };
  }, [currentSlideIndex, clips, currentClipIndex]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || clips.length === 0 || currentClipIndex >= clips.length) {
      return;
    }

    const currentClip = clips[currentClipIndex];
    const [, endTime] = currentClip;

    // Handle when video reaches end time - use both timeupdate and a more frequent check
    const checkEndTime = () => {
      if (video.currentTime >= endTime) {
        // If there's another clip, move to it and autoplay
        if (currentClipIndex < clips.length - 1) {
          const nextClip = clips[currentClipIndex + 1];
          const [nextStartTime] = nextClip;
          video.currentTime = nextStartTime;
          setCurrentClipIndex(currentClipIndex + 1);
          // Automatically play the next clip
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                setIsPlaying(true);
              })
              .catch(() => {
                console.log('Autoplay prevented for next clip');
                video.pause();
                setIsPlaying(false);
              });
          }
        } else {
          // Last clip, just pause
          video.pause();
          video.currentTime = endTime; // Stay at end time
          setIsPlaying(false);
        }
        return true; // Indicates we handled the end time
      }
      return false;
    };

    const handleTimeUpdate = () => {
      checkEndTime();
    };

    // Use requestAnimationFrame for more frequent checks when playing
    let animationFrameId: number | null = null;
    const checkWhilePlaying = () => {
      if (!video.paused && !checkEndTime()) {
        animationFrameId = requestAnimationFrame(checkWhilePlaying);
      }
    };

    // Start the frequent check when video starts playing
    const handlePlay = () => {
      setIsPlaying(true);
      hasUserInteractedRef.current = true;
      if (animationFrameId === null) {
        animationFrameId = requestAnimationFrame(checkWhilePlaying);
      }
      // Sync with other videos
      videoSync.syncPlayPause(videoId, true);
    };

    const handlePause = () => {
      setIsPlaying(false);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
      // Sync with other videos
      videoSync.syncPlayPause(videoId, false);
    };

    // Also check on seeking to catch manual time changes
    const handleSeeking = () => {
      checkEndTime();
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('seeking', handleSeeking);

    // Initial check in case video is already past end time
    if (!video.paused) {
      animationFrameId = requestAnimationFrame(checkWhilePlaying);
    }
    checkEndTime();

    // Cleanup
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('seeking', handleSeeking);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [currentSlideIndex, clips, currentClipIndex, videoSync, videoId]);

  // Register video for syncing
  useEffect(() => {
    if (videoRef.current) {
      videoSync.registerVideo(videoId, videoRef);
    }
    return () => {
      videoSync.unregisterVideo(videoId);
    };
  }, [videoSync, videoId]);

  if (clips.length === 0) {
    return null;
  }

  // If video is closed, show a reopen button
  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 z-40 bg-black/80 hover:bg-black rounded-lg p-3 shadow-2xl transition-colors"
        aria-label="Reopen video"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 bg-black rounded-lg overflow-hidden shadow-2xl">
      <div className="relative group">
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-[224px] h-[126px] sm:w-[280px] sm:h-[158px] md:w-[336px] md:h-[189px]"
          muted={isMuted}
          playsInline
        />
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 z-50 bg-black/60 hover:bg-black/80 rounded-full p-1.5 transition-colors"
          aria-label="Close video"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* Controls overlay - always show play button when paused */}
        <div className={`absolute inset-0 ${!isPlaying ? 'bg-black/30' : 'bg-black/0 hover:bg-black/20'} transition-colors flex items-center justify-center gap-2`}>
          <button
            onClick={async () => {
              const video = videoRef.current;
              if (video && clips.length > 0) {
                try {
                  if (video.paused) {
                    // Check if video has reached the end - if so, restart from beginning
                    const currentClip = clips[currentClipIndex] || clips[0];
                    const [startTime, endTime] = currentClip;
                    
                    // If video is at or past the end time, restart from start
                    if (video.currentTime >= endTime || Math.abs(video.currentTime - endTime) < 0.5) {
                      video.currentTime = startTime;
                      setCurrentClipIndex(0); // Reset to first clip if multiple clips
                    }
                    
                    await video.play();
                    // Mark that user has interacted
                    hasUserInteractedRef.current = true;
                  } else {
                    video.pause();
                  }
                } catch (error) {
                  console.error('Error playing video:', error);
                }
              }
            }}
            className={`${!isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity bg-white/20 hover:bg-white/30 rounded-full p-2`}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            )}
          </button>
          {isPlaying && (
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 hover:bg-white/30 rounded-full p-2"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

