type ResponsiveVideoProps = {
  src?: string;
  title?: string;
};

export default function ResponsiveVideo({ src, title }: ResponsiveVideoProps) {
  if (!src) {
    return (
      <div className="aspect-video w-full rounded-lg border border-white/40 bg-white/5 text-white/80 backdrop-blur-sm">
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-sm">Video placeholder</span>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg">
      <video
        className="h-full w-full object-cover"
        src={src}
        title={title}
        autoPlay
        muted
        loop
        playsInline
        controls
      />
    </div>
  );
}


