import { redirect } from "next/navigation";
import type { Metadata } from "next";
import SlideViewer from "../SlideViewer";

const totalSlides = 6; // keep in sync with SlideViewer

// Properly await params Promise as required by latest Next.js spec
export async function generateMetadata(
  props: { params: Promise<{ index: string }> }
): Promise<Metadata> {
  const { index } = await props.params;
  const n = Number(index);
  const title = Number.isFinite(n) && n >= 0 && n < totalSlides
    ? `Slide ${n + 1} • Doodle to Demo`
    : "Doodle to Demo";
  return { title };
}

export default async function SlidePage(props: { params: Promise<{ index: string }> }) {
  const { index } = await props.params;
  const n = Number(index);
  if (!Number.isFinite(n) || n < 0 || n >= totalSlides) {
    redirect("/slides/0");
  }
  return <SlideViewer currentIndex={n} />;
}


