'use client';

import Image from 'next/image';
import { ComponentProps } from 'react';

type OptimizedImageProps = Omit<ComponentProps<typeof Image>, 'src' | 'alt'> & {
  src: string;
  alt: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  fill?: boolean; // Use fill for responsive images without fixed dimensions
  width?: number;
  height?: number;
};

/**
 * OptimizedImage component that wraps Next.js Image with performance optimizations
 * - Automatic image optimization and format conversion (WebP, AVIF)
 * - Lazy loading by default
 * - Responsive images with srcset
 * - Supports both fixed dimensions and fill mode
 * - Works without requiring wrapper divs when no dimensions are provided
 */
export default function OptimizedImage({
  src,
  alt,
  priority = false,
  loading = 'lazy',
  className = '',
  fill = false,
  width,
  height,
  ...props
}: OptimizedImageProps) {
  // For external images or images that need special handling
  const isExternal = src.startsWith('http://') || src.startsWith('https://');
  
  // Use unoptimized for external images if needed, or configure domains in next.config
  const imageProps = isExternal
    ? { unoptimized: true, ...props }
    : { ...props };

  // For fixed dimensions, use width/height
  if (width && height && !fill) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        loading={loading}
        className={className}
        quality={100}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...imageProps}
      />
    );
  }

  // If fill is explicitly requested, use fill mode
  if (fill) {
    const objectFitClass = className.includes('object-contain') 
      ? 'object-contain' 
      : className.includes('object-cover')
      ? 'object-cover'
      : 'object-contain';
    
    const otherClasses = className
      .replace('object-contain', '')
      .replace('object-cover', '')
      .trim();

    return (
      <div className={`relative ${otherClasses}`} style={{ width: '100%', height: '100%', maxWidth: '100%', boxSizing: 'border-box' }}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          loading={loading}
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={objectFitClass}
          {...imageProps}
        />
      </div>
    );
  }

  // Default: Use unoptimized mode with intrinsic sizing
  // This allows the image to work like a regular img tag without requiring wrapper divs
  // The image will maintain its natural aspect ratio and work with standard CSS
  return (
    <Image
      src={src}
      alt={alt}
      width={1920}
      height={1080}
      unoptimized
      priority={priority}
      loading={loading}
      className={className}
      style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
      {...imageProps}
    />
  );
}

