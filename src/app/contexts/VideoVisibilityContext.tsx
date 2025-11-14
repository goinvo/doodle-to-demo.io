'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type VideoVisibilityContextType = {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
};

const VideoVisibilityContext = createContext<VideoVisibilityContextType | null>(null);

export function VideoVisibilityProvider({ children }: { children: ReactNode }) {
  // Initialize from localStorage if available, default to true
  const [isVisible, setIsVisibleState] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('pip-video-visible');
      return saved !== null ? saved === 'true' : true;
    }
    return true;
  });

  // Update localStorage whenever visibility changes
  const setIsVisible = (visible: boolean) => {
    setIsVisibleState(visible);
    if (typeof window !== 'undefined') {
      localStorage.setItem('pip-video-visible', visible.toString());
    }
  };

  return (
    <VideoVisibilityContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </VideoVisibilityContext.Provider>
  );
}

export function useVideoVisibility() {
  const context = useContext(VideoVisibilityContext);
  if (!context) {
    throw new Error('useVideoVisibility must be used within VideoVisibilityProvider');
  }
  return context;
}

