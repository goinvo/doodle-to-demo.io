'use client';

import ResponsiveVideo from "../../components/ResponsiveVideo";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Slide5() {
  const handleArrowClick = () => {
    const viewportHeight = window.innerHeight;
    window.scrollBy({
      top: viewportHeight * 0.8,
      behavior: 'smooth'
    });
  };

  return (
    <main className="relative min-h-[calc(100vh)] w-full overflow-auto slide-6 case-study">
      
      
      <section className="text-primary-color w-full min-h-screen flex flex-col justify-center container-padding container-padding-vertical-quad slide6-hero">
        <h2 className="text-[clamp(2rem,6vw+1rem,5rem)] tracking-tight">
          <span className="font-thin opacity-90">/ Case Study 02</span>
          <br/> <span className="font-bold">Bringing Mental Health Stories to Life</span>
        </h2>
        <p className="p-max text-2rem">How can we best communicate <span className="font-bold all-caps">COMPLEX</span> mental health care challenges for both patients and providers?</p>

        <motion.div
          className="bounce_arrow absolute left-1/2 top-200 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer z-10"
          animate={{ y: [0, 14, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 1.2,
            ease: "easeInOut",
            delay: 0.3,
          }}
          onClick={handleArrowClick}
        >
          <ChevronDown size={56} strokeWidth={1.8} className="text-primary-color drop-shadow-lg" />
        </motion.div>
      </section>

      <section className="synthesize-section w-full flex flex-col justify-center items-center">
        <div className="relative">
          <img
            src="/image/case_studies/02/A_synthesize.png"
            alt="scattered items, picturing a zoom window, a notebook, the Microsoft Teams logo, the Zoom logo, a PDF, and a clock."
            className="w-full h-full object-cover"
          />
          <div className="absolute synthesize-text">
            <h3 className="h3-all-caps text-primary-color text-center font-bold">/ Synthesizing data</h3>
            <p className="text-primary-color text-center text-2rem text-box">Collected huge amounts of information and nuances in conversations with patients and providers.</p>
          </div>
        </div>
      </section>

      <section className="word-blob-section w-full flex flex-col justify-center items-center container-padding-vertical-quad">
        <div className="container-padding relative word-cloud-container">
          <div className="word-cloud">
            <span className="word-bubble">religion</span>
            <span className="word-bubble">education</span>
            <span className="word-bubble">family structure</span>
            <span className="word-bubble">tech saviness</span>
            <span className="word-bubble">housing</span>
            <span className="word-bubble">culture</span>
            <span className="word-bubble">conditions</span>
            <span className="word-bubble">geography</span>
            <span className="word-bubble">age</span>
            <span className="word-bubble">insurance</span>
            <span className="word-bubble">gender</span>
            <span className="word-bubble">childcare</span>
            <span className="word-bubble">income level</span>
            <span className="word-bubble">language</span>
            <span className="word-bubble">urban or rural</span>
          </div>
          <div className="word-cloud-center">
            <p className="text-white text-center text-3rem text-box font-bold">Many factors impact mental healthcare experiences.</p>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col justify-center items-center">
        <div className="container-padding relative grid grid-cols-4 responsive-grid">
          <div className="col-span-3 relative">
            <img
              src="/image/case_studies/02/C_group_sketch_2.png"
              alt="A group sketch of patients and providers"
              className="w-full h-full object-contain"
            />
            <span className="container-padding caption text-sm font-mono ">/ First concept sketch</span>
          </div>
          <div className="col-span-1 relative">
            <div className="text-primary-color text-1-5rem cs2-section-5 feedback-box">
              <h5>Stakeholder Feedback</h5>
              <div className="quote-box"><span className="quote-text text-1rem">&ldquo;It feels cluttered and overwhelming. I get lost in all the graphics and labels.&rdquo;</span> 
                <br/><span className=" text-sm italic quotee">State Employee for Health Department</span>
              </div> 
              <div className="quote-box"><span className="quote-text text-1rem">&ldquo;The labels don&apos;t resonate. Not sure what we&apos;re trying to represent here.&rdquo;</span>
                <br/><span className=" text-sm italic quotee">Senior Mental Health Patient </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full min-h-screen flex flex-col justify-center items-center container-padding">
        <div className="grid grid-cols-3 responsive-grid meet-maria-container">
          <div className="col-span-2">
            <div className="relative">
              <img
                src="/image/case_studies/02/Maria_Sketch_Pencil.png"
                alt="A sketch of Maria"
                className="w-full h-full object-cover maria-sketch"
              />
              <div className="text-primary-color text-1-5rem meet-maria">
                <p>We envisioned a <span className="font-bold">virtual, interactive space</span> where users could chat with characters based on real interview data. </p>
                <p>Meet <span className="font-bold">Maria,</span> 
                <br />a 68 year old retiree living in New Mexico.</p> 
                <p>Ask her about her experiences getting mental health care in a rural town.</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 ">
              <img
                src="/image/case_studies/02/D_chat.png"
                alt="A wireframe of an AI chat interface"
                className="w-full h-full object-contain chat-interface"
              />
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col justify-center items-center">
        <div className="w-full grid grid-cols-2 responsive-grid">
          <div className="col-span-1 gradient-bg-2 text-white">
            <div className="masked-video-offset-profile-building">
              <div className="video-masked-profile-building">
                <ResponsiveVideo src="/video/case_studies/02/Profile_Building.mp4" title="video of profile building with AI prompts" />
              </div>
            </div>
            <p className="container-padding caption text-sm font-mono ">/ Transcriptions and notes formed the foundation for AI-generated dialogue.</p>
          </div>
          <div className="col-span-1">
            <ResponsiveVideo src="/video/case_studies/02/Maria_Sketch_Animation_final.mp4" title="timelapse of sketch" />
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col justify-center items-center">
        <div className="w-full">
          <div className="image-grid image-grid-tall grid grid-cols-2 mb-8 responsive-grid">
            <div className="col-span-2">
              <div className="masked-video-offset-voice">
                <div className="video-masked-voice">
                  <ResponsiveVideo src="/video/case_studies/02/11labs.mp4" title="video of profile building with AI prompts" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col justify-center items-center tan-bg">
        <div className="w-full">
          <div className="image-grid image-grid-tall grid grid-cols-3 mb-8 responsive-grid">
            <div className="col-span-2 maria-col">
              <div className="relative">
                <p className="padding-md caption text-sm font-mono text-primary-color cursor-note"><span className="font-bold">Cursor</span> allowed us to build an interactive digital environment for exploring these conversations.</p>
                <img
                  src="/image/case_studies/02/Maria_Sketch_Coloured.png"
                  alt="Case Study Small"
                  className="h-full w-full object-contain maria-color"
                />                
                <h3 className="absolute h3-all-caps text-3rem text-white text-center design-solution">/ The design solution</h3>
              </div>
              
            </div>
            <div className="col-span-1 chat-col w-full">
              <div className="masked-video-offset-chat">
                <div className="video-masked-chat">
                  <ResponsiveVideo src="/video/case_studies/02/Chat.mp4" title="video of profile building with AI prompts" />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col justify-center items-center primary-bg">
        <div className="w-full container-padding-quad">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 responsive-grid">
                <h4 className="col-span-1 text-3rem font-bold text-white">
                    <span className="font-thin opacity-90">/</span>
                    <span className="font-bold"> Our New Workflow</span>
                </h4>
                <div className="col-span-2 container-padding">
                  <dl className="text-white workflow-list">
                    <dt className="font-bold numbered">01</dt>
                    <dd className="font-thin">Develop the character&apos;s background and profile</dd>
                    <dt className="font-bold numbered">02</dt>
                    <dd className="font-thin">Create a visual respresentation</dd>
                    <dt className="font-bold numbered">03</dt>
                    <dd className="font-thin">Develop dialogue and pair with generated voice</dd>
                    <dt className="font-bold numbered">04</dt>
                    <dd className="font-thin">Integrate everything into live site</dd>
                  </dl>
                </div>
            </div>
        </div>
      </section>

      <section className="w-full min-h-screen flex flex-col container-padding learnings-section">
        <h3 className="h3-all-caps text-primary-color">
          <span className="font-thin opacity-90">/</span>
          <span className="font-bold"> Learnings</span>
        </h3>
        <div className="image-grid image-grid-tall grid grid-cols-2 mb-8 responsive-grid text-center dots-bg justify-center">
            <div className="col-span-1">
                <p className="framed-p-box text-2rem">Crafting qualitative research with AI generation enables more first hand storytelling.</p>
            </div>
            <div className="col-span-1">
            <p className="framed-p-box text-2rem">The experience allows decision-makers to connect with research insights and drive better policy.</p>
            </div>
            
          </div>
      </section>

      <section className="case-study-nav-section w-full min-h-[200px] flex items-end">
        {/* Navigation arrows will be inserted here by SlideViewer */}
      </section>
      
    </main>
  );
}

