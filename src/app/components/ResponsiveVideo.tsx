type ResponsiveVideoProps = {
  src?: string;
  title?: string;
  rounded?: boolean;
  roundedSize?: string | number;
  priority?: boolean; // For above-the-fold videos
  preload?: 'none' | 'metadata' | 'auto';
};

export default function ResponsiveVideo({ 
  src, 
  title, 
  rounded = false, 
  roundedSize = '1rem',
  priority = false,
  preload = 'none'
}: ResponsiveVideoProps) {
  const roundedStyle = rounded 
    ? { borderRadius: typeof roundedSize === 'number' ? `${roundedSize}px` : roundedSize }
    : {};

  if (!src) {
    return (
      <div 
        className="aspect-video w-full border border-white/40 bg-white/5 text-white/80 backdrop-blur-sm overflow-hidden"
        style={roundedStyle}
      >
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-sm">Video placeholder</span>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="aspect-video w-full overflow-hidden"
      style={roundedStyle}
    >
      <video
        className="h-full w-full object-cover"
        src={src}
        title={title}
        autoPlay={priority}
        muted
        loop
        playsInline
        preload={preload}
      />
    </div>
  );
}


