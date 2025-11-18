'use client';

import { useRef, useState, useEffect } from "react";
import { useVideoSync } from "../../contexts/VideoSyncContext";

export default function Slide7() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const videoSync = useVideoSync();
  const videoId = 'slide7-video';

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
        // Sync with other videos
        videoSync.syncPlayPause(videoId, true);
      } else {
        video.pause();
        setIsPlaying(false);
        // Sync with other videos
        videoSync.syncPlayPause(videoId, false);
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      setIsPlaying(true);
      // Sync with other videos
      videoSync.syncPlayPause(videoId, true);
    };
    const handlePause = () => {
      setIsPlaying(false);
      // Sync with other videos
      videoSync.syncPlayPause(videoId, false);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, [videoSync, videoId]);

  // Register video for syncing
  useEffect(() => {
    if (videoRef.current) {
      videoSync.registerVideo(videoId, videoRef);
    }
    return () => {
      videoSync.unregisterVideo(videoId);
    };
  }, [videoSync, videoId]);

  return (
    <main className="relative min-h-[calc(100vh)] w-full overflow-auto slide-6 case-study white-bg flex flex-col">
      
      
      <div 
        ref={videoContainerRef}
        className="relative flex-1 w-full flex flex-col"
      >
        {/* Video wrapper to position button relative to video */}
        <div 
          className="flex-1 flex items-start pt-14 sm:pt-16 w-full z-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Background video */}
          <video
            ref={videoRef}
            src="https://dd17w042cevyt.cloudfront.net/videos/features/doodle-to-demo/ScreenRecording_demo_1920x1080.mp4"
            className="w-full h-auto cursor-pointer"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster=""
            onClick={togglePlayPause}
            controls
          />
          {/* Play/Pause button - centered over video, visible on hover */}
          <button
            onClick={togglePlayPause}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 rounded-full p-3 transition-all duration-200 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
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
        </div>
      </div>

      <section className="case-study-nav-section w-full min-h-[200px] flex items-end">
        {/* Navigation arrows will be inserted here by SlideViewer */}
      </section>
      
    </main>
  );
}

