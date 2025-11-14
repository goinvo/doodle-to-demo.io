'use client';

import { useEffect, useRef, useState } from 'react';

export type TranscriptEntry = {
  startTime: number;
  endTime: number;
  text: string;
  speaker?: string;
};

type VideoTranscriptProps = {
  transcript: TranscriptEntry[];
  currentTime: number;
  isOpen: boolean;
  onClose: () => void;
  videoId?: string;
};

export default function VideoTranscript({
  transcript,
  currentTime,
  isOpen,
  onClose,
  videoId = 'video-transcript'
}: VideoTranscriptProps) {
  const transcriptRef = useRef<HTMLDivElement>(null);
  const activeEntryRef = useRef<HTMLDivElement>(null);

  // Find the current transcript entry based on video time
  const currentEntry = transcript.find(
    (entry) => currentTime >= entry.startTime && currentTime <= entry.endTime
  );

  // Scroll active entry into view
  useEffect(() => {
    if (activeEntryRef.current && isOpen) {
      activeEntryRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [currentEntry, isOpen]);

  // Keyboard shortcut: 'T' to toggle transcript
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 't' || e.key === 'T') {
        if (!e.ctrlKey && !e.metaKey && !e.altKey) {
          e.preventDefault();
          if (isOpen) {
            onClose();
          } else {
            // This will be handled by parent component
            const event = new CustomEvent('toggleTranscript');
            window.dispatchEvent(event);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {/* Desktop: Side panel */}
      <div
        ref={transcriptRef}
        className="hidden md:flex fixed left-4 top-20 bottom-4 w-80 z-30 flex-col bg-white rounded-2xl shadow-2xl overflow-hidden"
        role="region"
        aria-label="Video transcript"
        aria-live="polite"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-primary-color">
          <h3 className="text-white font-bold text-lg">Transcript</h3>
          <button
            onClick={onClose}
            className="text-white hover:text-white/80 transition-colors p-1"
            aria-label="Close transcript"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Transcript content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {transcript.length === 0 ? (
            <p className="text-gray-500 text-sm">Transcript will be available here.</p>
          ) : (
            transcript.map((entry, index) => {
              const isActive = currentEntry === entry;
              return (
                <div
                  key={index}
                  ref={isActive ? activeEntryRef : null}
                  className={`p-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-primary-color/10 border-2 border-primary-color'
                      : 'bg-gray-50 border-2 border-transparent'
                  }`}
                >
                  {entry.speaker && (
                    <div className="text-xs font-semibold text-primary-color mb-1 uppercase">
                      {entry.speaker}
                    </div>
                  )}
                  <p className={`text-sm leading-relaxed ${isActive ? 'font-medium' : 'text-gray-700'}`}>
                    {entry.text}
                  </p>
                  <div className="text-xs text-gray-400 mt-1">
                    {formatTime(entry.startTime)} - {formatTime(entry.endTime)}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Mobile: Bottom panel */}
      <div
        className="md:hidden fixed left-0 right-0 bottom-0 z-30 bg-white rounded-t-3xl shadow-2xl overflow-hidden border-t border-gray-200"
        style={{ maxHeight: '60vh' }}
        role="region"
        aria-label="Video transcript"
        aria-live="polite"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-primary-color">
          <h3 className="text-white font-bold text-lg">Transcript</h3>
          <button
            onClick={onClose}
            className="text-white hover:text-white/80 transition-colors p-1"
            aria-label="Close transcript"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Transcript content */}
        <div className="overflow-y-auto p-4 space-y-3" style={{ maxHeight: 'calc(60vh - 60px)' }}>
          {transcript.length === 0 ? (
            <p className="text-gray-500 text-sm">Transcript will be available here.</p>
          ) : (
            transcript.map((entry, index) => {
              const isActive = currentEntry === entry;
              return (
                <div
                  key={index}
                  ref={isActive ? activeEntryRef : null}
                  className={`p-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-primary-color/10 border-2 border-primary-color'
                      : 'bg-gray-50 border-2 border-transparent'
                  }`}
                >
                  {entry.speaker && (
                    <div className="text-xs font-semibold text-primary-color mb-1 uppercase">
                      {entry.speaker}
                    </div>
                  )}
                  <p className={`text-sm leading-relaxed ${isActive ? 'font-medium' : 'text-gray-700'}`}>
                    {entry.text}
                  </p>
                  <div className="text-xs text-gray-400 mt-1">
                    {formatTime(entry.startTime)} - {formatTime(entry.endTime)}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

