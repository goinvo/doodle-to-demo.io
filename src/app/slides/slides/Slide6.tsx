'use client';

import ResponsiveVideo from "../../components/ResponsiveVideo";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Slide6() {
  return (
    <main className="relative min-h-[calc(100vh)] w-full overflow-auto">
      
      
      <section className="text-primary-color w-full min-h-screen flex flex-col container-padding container-padding-vertical-quad">
        <span className="text-3rem font-thin opacity-90">/ Case Study 02</span>
        <h2 className="p-max font-bold text-[clamp(2rem,6vw+1rem,5rem)] tracking-tight">
          Bringing Mental Health Stories to Life
        </h2>

        <p className="p-max text-2rem">How can we best communicate <span className="font-bold">COMPLEX</span> mental health care challenges for both patients and providers?</p>

        <motion.div
          className="absolute left-1/2 top-200 -translate-x-1/2 flex flex-col items-center gap-1"
          animate={{ y: [0, 14, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 1.2,
            ease: "easeInOut",
            delay: 0.3,
          }}
          style={{ pointerEvents: 'none' }}
        >
          <ChevronDown size={56} strokeWidth={1.8} className="text-white/80 drop-shadow-lg" />
        </motion.div>
      </section>

      <section className="w-full min-h-screen flex flex-col justify-center items-center">
        <div className="container-padding relative">
          {/* Background image needed */}
          {/* <img
            src="/image/case_studies/01/0_Extra/Final_R1E.png"
            alt="Case Study 01"
            className="w-full h-full object-cover"
          /> */}
          <div className="absolute">
            <h3 className="h3-all-caps text-primary-color text-center">/ Synthesizing data</h3>
            <p className="text-primary-color text-center text-2rem text-box">Collected huge amounts of information and nuances in conversations with patients and providers.</p>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col">
        <div className="container-padding ">
          {/* word cloud thing here */}
          <div className="relative">
            {/* Background image needed */}
            {/* <img
              src="/image/case_studies/01/0_Extra/Final_R1E.png"
              alt="Case Study 01"
              className="w-full h-full object-cover"
            /> */}
            <div className="absolute">
              <p className="text-primary-color text-center text-2rem text-box">Many factors impact mental healthcare experiences.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full min-h-screen flex flex-col justify-center items-center">
        <div className="container-padding relative">
          <img
            src="/image/case_studies/02/Maria_Sketch_Pencil.png"
            alt="A sketch of Maria"
            className="w-full h-full object-cover"
          />
          <div className="absolute text-primary-color text-2rem cs2-section-5">
            <p>We envisioned a <span className="font-bold">virtual, interactive space</span> where users could chat with characters based on real interview data. </p>
            <p>Meet <span className="font-bold">Maria,</span> 
            <br />a 68 year old retiree living in New Mexico.</p> 
            <p>Ask her about her experiences getting mental health care in a rural town.</p>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col justify-center items-center">
        <div className="w-full">
          <div className="image-grid image-grid-tall grid grid-cols-2 mb-8">
            {/* image needed, to be replaced */}
            <img
              src="/image/case_studies/02/Maria_Sketch_Pencil.png"
              alt="Case Study Small"
              className="col-span-1 h-full w-full object-contain "
            />
            <img
              src="/image/case_studies/02/Maria_Sketch_Coloured.png"
              alt="Maria in a coloured drawing"
              className="col-span-1 h-full w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col justify-center items-center">
        <div className="w-full">
          <div className="image-grid image-grid-tall grid grid-cols-2 mb-8">
            <div className="col-span-1">
              {/* sound thing here */}
            </div>
            <div className="col-span-1">
              {/* image needed */}
              {/* <img
                src="/image/case_studies/02/Maria_Sketch_Coloured.png"
                alt="Maria in a coloured drawing"
                className="col-span-1 h-full w-full object-contain"
              /> */}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col justify-center items-center">
        <div className="w-full">
          <div className="image-grid image-grid-tall grid grid-cols-2 mb-8">
            <div className="col-span-1">
              <div className="relative">
                <img
                  src="/image/case_studies/02/Maria_Sketch_Coloured.png"
                  alt="Case Study Small"
                  className="h-full w-full object-contain "
                />
                <p className=" absolute caption text-sm font-mono font-bold text-white"><span className="font-bold">Cursor</span> allowed us to build an interactive digital environment for exploring these conversations.</p>
                <h3 className="absolute h3-all-caps text-primary-color text-center">/ The design solution</h3>
              </div>
              
            </div>
            <div className="col-span-1">
              
            </div>
            
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col justify-center items-center primary-bg">
        <div className="w-full container-padding-quad">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <h4 className="col-span-1 text-lger font-bold text-white">
                    <span className="font-thin opacity-90">/</span>
                    <span className="font-bold"> Our New Workflow</span>
                </h4>
                <div className="col-span-2 container-padding">
                    <p className="text-white"><span className="font-bold numbered">01</span><span className="font-thin">Develop the character's background and profile</span></p>
                    <p className="text-white"><span className="font-bold numbered">02</span><span className="font-thin">Create a visual respresentation</span></p>
                    <p className="text-white"><span className="font-bold numbered">03</span><span className="font-thin">Develop dialogue and pair with generated voice</span></p>
                    <p className="text-white"><span className="font-bold numbered">04</span><span className="font-thin">Integrate everything into live site</span></p>
                </div>
            </div>
        </div>
      </section>

      <section className="w-full min-h-screen flex flex-col container-padding">
        <h3 className="h3-all-caps text-primary-color">
          <span className="font-thin opacity-90">/</span>
          <span className="font-bold"> Learnings</span>
        </h3>
        <div className="image-grid image-grid-tall grid grid-cols-2 mb-8">
            <div className="col-span-1">
                <p className="framed-p-box">Crafting qualitative research with AI generation enables more first hand storytelling.</p>
            </div>
            <div className="col-span-1">
            <p className="framed-p-box">The experience allows decision-makers to connect with research insights and drive better policy.</p>
            </div>
            
          </div>
      </section>
      
    </main>
  );
}

