'use client';

import { createContext, useContext, useRef, ReactNode } from 'react';

type VideoSyncContextType = {
  registerVideo: (id: string, videoRef: React.RefObject<HTMLVideoElement | null>) => void;
  unregisterVideo: (id: string) => void;
  syncPlayPause: (sourceId: string, shouldPlay: boolean) => void;
};

const VideoSyncContext = createContext<VideoSyncContextType | null>(null);

export function VideoSyncProvider({ children }: { children: ReactNode }) {
  const videosRef = useRef<Map<string, React.RefObject<HTMLVideoElement | null>>>(new Map());

  const registerVideo = (id: string, videoRef: React.RefObject<HTMLVideoElement | null>) => {
    videosRef.current.set(id, videoRef);
  };

  const unregisterVideo = (id: string) => {
    videosRef.current.delete(id);
  };

  const syncPlayPause = (sourceId: string, shouldPlay: boolean) => {
    videosRef.current.forEach((videoRef, id) => {
      if (id !== sourceId && videoRef.current) {
        const video = videoRef.current;
        // Only sync if the video is not already in the desired state
        if (shouldPlay && video.paused) {
          video.play().catch(() => {
            // Ignore autoplay errors
          });
        } else if (!shouldPlay && !video.paused) {
          video.pause();
        }
      }
    });
  };

  return (
    <VideoSyncContext.Provider value={{ registerVideo, unregisterVideo, syncPlayPause }}>
      {children}
    </VideoSyncContext.Provider>
  );
}

export function useVideoSync() {
  const context = useContext(VideoSyncContext);
  if (!context) {
    throw new Error('useVideoSync must be used within VideoSyncProvider');
  }
  return context;
}

