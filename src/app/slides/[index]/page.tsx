import { redirect } from "next/navigation";
import type { Metadata } from "next";
import SlideViewer from "../SlideViewer";
import { slides } from "../slides";

type PageProps = {
  params: Promise<{ index: string }>;
};

export async function generateMetadata(
  props: PageProps
): Promise<Metadata> {
  const { index } = await props.params;
  const n = Number(index);
  const title = Number.isFinite(n) && slides[n]
    ? `${slides[n].title} • Doodle to Demo`
    : "Doodle to Demo";
  return { title };
}

export default async function SlidePage(props: PageProps) {
  const { index } = await props.params;
  const n = Number(index);
  if (!Number.isFinite(n) || n < 0 || n >= slides.length) {
    redirect("/slides/0");
  }
  return <SlideViewer currentIndex={n} />;
}


