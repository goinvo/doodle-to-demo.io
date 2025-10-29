export default function BackgroundVideo() {
  return (
    <video
      className="fixed inset-0 -z-10 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      src="/video/GenAI%20Robot.mp4"
    />
  );
}


