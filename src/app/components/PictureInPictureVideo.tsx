'use client';

import { useEffect, useRef, useState, useMemo } from 'react';

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

    // Handle when video reaches end time
    const handleTimeUpdate = () => {
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
      }
    };

    // Handle play/pause state changes
    const handlePlay = () => {
      setIsPlaying(true);
      // Mark that user has interacted with the video
      hasUserInteractedRef.current = true;
    };
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    // Cleanup
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, [currentSlideIndex, clips, currentClipIndex]);

  if (clips.length === 0) {
    return null;
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

