import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-6 p-8">
        <h1 className="text-center text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Doodle to Demo
        </h1>
        <p className="max-w-xl text-center text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          A minimal presentation platform built with Next.js, TypeScript, and Tailwind CSS.
        </p>
        <div className="mt-4 flex gap-3">
          <Link
            className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-background text-sm transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            href="/slides/0"
          >
            Start Presentation →
          </Link>
          <a
            className="flex h-12 items-center justify-center rounded-full border border-black/10 px-6 text-sm text-zinc-800 transition-colors hover:bg-black/5 dark:border-white/15 dark:text-zinc-200 dark:hover:bg-white/10"
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
