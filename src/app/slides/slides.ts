export type Slide = {
  title: string;
  body?: string;
  bullets?: string[];
};

export const slides: Slide[] = [
  {
    title: "Goals",
    bullets: [
      "Keep the codebase beginner-friendly",
      "Make slides easy to edit and extend",
      "Offer keyboard navigation and good defaults",
    ],
  },
  {
    title: "Tech Stack",
    bullets: [
      "Next.js App Router",
      "TypeScript for safety and clarity",
      "Tailwind CSS for rapid styling",
    ],
  },
  {
    title: "How to Edit Slides",
    bullets: [
      "Open src/app/slides/slides.ts",
      "Add, remove, or reorder slide objects",
      "Each slide has a title, optional body, and bullets",
    ],
  },
  {
    title: "Thanks",
    body: "Have fun presenting! Use ← and → to navigate, Home/End to jump.",
  },
];


