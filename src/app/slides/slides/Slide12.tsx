'use client';

import { motion } from "framer-motion";
import ResponsiveVideo from "../../components/ResponsiveVideo";

export default function Slide12({ nextIndex }: { nextIndex?: number }) {
  return (
    <main className="gradient-bg-with-grid relative min-h-[calc(100vh)] w-full px-4 py-6 sm:px-6 ">
      <section className="text-white w-full min-h-screen flex flex-col justify-center ml-[70px] container-padding-horizontal">
        <h2 className=" text-[clamp(2rem,6vw+1rem,5rem)] tracking-tight leading-none">
          <span className="font-bold">Q&A</span> with
          <br/>the team
        </h2>
        <span className="font-mono mt-10">Conversation Starters</span>
        <p className="p-max text-2rem">How do you feel about <span className="font-bold">using AI</span> in your work?
        <br />How do we <span className="font-bold">co-design</span> with our clients and team?</p>
        <p className="font-mono mt-10">Share your thoughts or questions at <a href="mailto:doodletodemo@goinvo.com">doodletodemo@goinvo.com</a></p>
      </section>
    </main>
  );
}

