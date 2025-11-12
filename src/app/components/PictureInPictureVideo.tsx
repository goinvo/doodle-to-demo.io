'use client';

import { useEffect, useRef, useState, useMemo } from 'react';

// Configuration for video timeframes per slide
// Format: [startTime in seconds, endTime in seconds]
// For multiple clips on one slide, use an array of timeframes: [[start1, end1], [start2, end2]]
// Set to null to disable video for that slide
export const slideVideoTimeframes: (number[] | number[][] | null)[] = [
  [[1389, 1428], [1484, 1499]],  // Slide 0: First clip then second clip
  [30, 60],     // Slide 1: 30-60 seconds
  [60, 90],     // Slide 2: 60-90 seconds
  [90, 120],    // Slide 3: 90-120 seconds
  [120, 150],   // Slide 4: 120-150 seconds
  [150, 180],   // Slide 5: 150-180 seconds
  [180, 210],   // Slide 6: 180-210 seconds
  [210, 240],   // Slide 7: 210-240 seconds
  [240, 270],   // Slide 8: 240-270 seconds
  [270, 300],   // Slide 9: 270-300 seconds
  [300, 330],   // Slide 10: 300-330 seconds
  [330, 360],   // Slide 11: 330-360 seconds
  [360, 390],   // Slide 12: 360-390 seconds
  [390, 420],   // Slide 13: 390-420 seconds
];

type PictureInPictureVideoProps = {
  currentSlideIndex: number;
  videoSrc?: string;
};

export default function PictureInPictureVideo({ 
  currentSlideIndex, 
  videoSrc = '/video/presentation_recordings/recording_640x360.mp4' 
}: PictureInPictureVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prevSlideIndexRef = useRef<number>(currentSlideIndex);
  const [isVisible, setIsVisible] = useState(true);
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

    // Set video to start time (but don't autoplay due to browser restrictions)
    video.currentTime = startTime;
    
    // Pause the video initially (user must click play)
    video.pause();
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
        // If there's another clip, move to it
        if (currentClipIndex < clips.length - 1) {
          const nextClip = clips[currentClipIndex + 1];
          const [nextStartTime] = nextClip;
          video.currentTime = nextStartTime;
          setCurrentClipIndex(currentClipIndex + 1);
          // Continue playing if it was playing
          if (!video.paused) {
            video.play();
          }
        } else {
          // Last clip, just pause
          video.pause();
          video.currentTime = endTime; // Stay at end time
        }
      }
    };

    // Handle play/pause state changes
    const handlePlay = () => setIsPlaying(true);
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
          className="w-[320px] h-[180px] sm:w-[400px] sm:h-[225px] md:w-[480px] md:h-[270px]"
          muted={isMuted}
          playsInline
        />
        {/* Controls overlay - always show play button when paused */}
        <div className={`absolute inset-0 ${!isPlaying ? 'bg-black/30' : 'bg-black/0 hover:bg-black/20'} transition-colors flex items-center justify-center gap-2`}>
          <button
            onClick={async () => {
              const video = videoRef.current;
              if (video) {
                try {
                  if (video.paused) {
                    await video.play();
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
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 hover:bg-black/70 rounded-full p-1"
          aria-label="Close video"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      {/* Show button to reopen if closed */}
      {!isVisible && (
        <button
          onClick={() => setIsVisible(true)}
          className="fixed bottom-4 right-4 z-40 bg-primary-color hover:bg-primary-color/80 text-white rounded-full p-3 shadow-lg"
          aria-label="Show video"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106a1 1 0 00-1.106 0l-3 1.5a1 1 0 00-.447.894v3a1 1 0 00.447.894l3 1.5a1 1 0 001.106 0l3-1.5A1 1 0 0018 12v-3a1 1 0 00-.447-.894l-3-1.5z" />
          </svg>
        </button>
      )}
    </div>
  );
}

