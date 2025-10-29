import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center font-sans">
      <main className="flex w-full max-w-3xl flex-col items-center justify-center gap-6 p-8 text-white">
        <h1 className="text-center text-4xl font-semibold tracking-tight">Doodle to Demo</h1>
        <p className="max-w-xl text-center text-lg leading-8 text-white/80">
          A minimal presentation platform built with Next.js, TypeScript, and Tailwind CSS.
        </p>
        <div className="mt-4 flex gap-3">
          <Link
            className="flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm text-black transition-colors hover:bg-zinc-200"
            href="/slides/0"
          >
            Start Presentation →
          </Link>
          <a
            className="flex h-12 items-center justify-center rounded-full border border-white/70 px-6 text-sm text-white transition-colors hover:bg-white/10"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js Docs
          </a>
        </div>
      </main>
    </div>
  );
}
