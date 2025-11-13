'use client';

import { useState } from 'react';
import { slideVideoTimeframes } from './PictureInPictureVideo';

/**
 * Video Timeframe Editor Component
 * 
 * This component provides a UI to adjust the start and end times for each slide.
 * To use this editor:
 * 1. Import this component in a page where you want to edit timeframes
 * 2. The changes will be reflected in the slideVideoTimeframes array
 * 
 * Note: In a production environment, you might want to save these to a database
 * or configuration file instead of modifying the code directly.
 */

export default function VideoTimeframeEditor() {
  const [timeframes, setTimeframes] = useState(slideVideoTimeframes);
  const [isOpen, setIsOpen] = useState(false);

  const handleTimeframeChange = (slideIndex: number, field: 'start' | 'end', value: number) => {
    const newTimeframes = [...timeframes];
    const currentTimeframe = newTimeframes[slideIndex];
    
    if (currentTimeframe === null) {
      newTimeframes[slideIndex] = [0, 0];
    } else if (Array.isArray(currentTimeframe[0])) {
      // Multiple clips - only edit the first clip for simplicity
      const clips = currentTimeframe as number[][];
      const firstClip = [...clips[0]];
      if (field === 'start') {
        firstClip[0] = Math.max(0, value);
      } else {
        firstClip[1] = Math.max(firstClip[0], value);
      }
      clips[0] = firstClip;
      newTimeframes[slideIndex] = clips;
    } else {
      // Single clip
      const [start, end] = currentTimeframe as number[];
      if (field === 'start') {
        newTimeframes[slideIndex] = [Math.max(0, value), end];
      } else {
        newTimeframes[slideIndex] = [start, Math.max(start, value)];
      }
    }
    setTimeframes(newTimeframes);
  };

  const toggleSlide = (slideIndex: number) => {
    const newTimeframes = [...timeframes];
    newTimeframes[slideIndex] = newTimeframes[slideIndex] === null ? [0, 30] : null;
    setTimeframes(newTimeframes);
  };

  const copyToClipboard = () => {
    const code = `export const slideVideoTimeframes: (number[] | number[][] | null)[] = ${JSON.stringify(timeframes, null, 2)
      .replace(/"/g, '')
      .replace(/\[/g, '[')
      .replace(/\]/g, ']')
      .replace(/null/g, 'null')};`;
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard! Paste it into PictureInPictureVideo.tsx');
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-20 right-4 z-50 bg-primary-color hover:bg-primary-color/80 text-white rounded-full p-3 shadow-lg"
        aria-label="Open video timeframe editor"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed top-20 right-4 z-50 bg-white rounded-lg shadow-2xl p-6 max-w-2xl max-h-[80vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Video Timeframe Editor</h2>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Close editor"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="space-y-4 mb-4">
        {timeframes.map((timeframe, index) => (
          <div key={index} className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <label className="font-semibold text-gray-700">Slide {index}</label>
              <button
                onClick={() => toggleSlide(index)}
                className={`px-3 py-1 rounded text-sm ${
                  timeframe === null
                    ? 'bg-gray-200 text-gray-600'
                    : 'bg-green-200 text-green-800'
                }`}
              >
                {timeframe === null ? 'Disabled' : 'Enabled'}
              </button>
            </div>
            {timeframe !== null && (
              <div>
                {Array.isArray(timeframe[0]) ? (
                  // Multiple clips - show info
                  <div className="text-sm text-gray-600">
                    <p>Multiple clips configured:</p>
                    <ul className="list-disc list-inside mt-2">
                      {(timeframe as number[][]).map((clip, clipIdx) => (
                        <li key={clipIdx}>Clip {clipIdx + 1}: {clip[0]}s - {clip[1]}s</li>
                      ))}
                    </ul>
                    <p className="mt-2 text-xs text-gray-500">Edit multiple clips directly in PictureInPictureVideo.tsx</p>
                  </div>
                ) : (
                  // Single clip - show editable inputs
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Start (seconds)</label>
                      <input
                        type="number"
                        value={(timeframe as number[])[0]}
                        onChange={(e) => handleTimeframeChange(index, 'start', parseFloat(e.target.value) || 0)}
                        className="w-full px-3 py-2 border rounded"
                        min="0"
                        step="0.1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">End (seconds)</label>
                      <input
                        type="number"
                        value={(timeframe as number[])[1]}
                        onChange={(e) => handleTimeframeChange(index, 'end', parseFloat(e.target.value) || 0)}
                        className="w-full px-3 py-2 border rounded"
                        min={(timeframe as number[])[0]}
                        step="0.1"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <button
          onClick={copyToClipboard}
          className="flex-1 bg-primary-color hover:bg-primary-color/80 text-white px-4 py-2 rounded"
        >
          Copy Code to Clipboard
        </button>
        <button
          onClick={() => setIsOpen(false)}
          className="px-4 py-2 border rounded hover:bg-gray-50"
        >
          Close
        </button>
      </div>
    </div>
  );
}

