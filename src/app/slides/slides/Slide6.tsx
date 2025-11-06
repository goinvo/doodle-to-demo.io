'use client';

import ResponsiveVideo from "../../components/ResponsiveVideo";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Slide6() {
  const handleArrowClick = () => {
    const viewportHeight = window.innerHeight;
    window.scrollBy({
      top: viewportHeight * 0.8,
      behavior: 'smooth'
    });
  };

  return (
    <main className="relative min-h-[calc(100vh)] w-full overflow-auto">
      
      
      <section className="text-primary-color w-full min-h-screen flex flex-col justify-center container-padding container-padding-vertical-quad">
        <h2 className="text-[clamp(2rem,6vw+1rem,5rem)] tracking-tight">
          <span className="font-thin opacity-90">/ Case Study 02</span>
          <br/> <span className="font-bold">Bringing Mental Health Stories to Life</span>
        </h2>
        <p className="p-max text-2rem">How can we best communicate <span className="font-bold all-caps">COMPLEX</span> mental health care challenges for both patients and providers?</p>

        <motion.div
          className="absolute left-1/2 top-200 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer z-10"
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

      <section className="w-full min-h-screen flex flex-col justify-center items-center">
        <div className="container-padding relative grid grid-cols-4">
          <div className="col-span-3 relative">
            <img
              src="/image/case_studies/02/C_group_sketch_2.png"
              alt="A group sketch of patients and providers"
              className="w-full h-full object-cover"
            />
            <span className="container-padding caption text-sm font-mono ">/ First concept sketch</span>
            {/* <div className="absolute concept-box">
              <div className="concept-item yellow-box left">
                <span className="category">Societal & cultural</span> 
                <span className="title">Fragmented Care (Provider)</span>
                <p>Poor coordination among mental health, substance abuse, and primary care services lead to significant gaps in treatment and worse health outcomes. Integrating these services requires sufficient infrastructure and funding. Inconsistency in coverage across insurance impacts access to essential mental health support and worsens inequities in care.</p>
                <p>Allow marriage and family therapists and mental health counselors to bill for services, supporting integration in primary care. Standardize quality measures to improve care coordination and identify gaps. </p>
              </div>
              <div className="concept-item blue-box left">
              <span className="category">Systemic</span> 
                <span className="title">Administrative Burden (Provider)</span>
                <p>High severity of patient conditions, overwhelming workloads, complex credentialing and administrative requirements, lengthy billing processes, and low compensation all contribute to burnout and high provider turnover in mental health care. Due to lower reimbursement rates, slow payments, and restrictions on billable services, providers often choose not to accept insurance and prioritize private pay. </p>
                <p>Allow insurance reimbursement for interprofessional consultations, expanding behavioral health integration and provider enrollment. Increase behavioral health access by adding mental health facilities and recognizing new provider specialties in plans.</p>
              </div>
              <div className="absolute-text">
                <span>Administrative Burdens</span>               
              </div>
              <div className="concept-item red-box">
               
              </div>

            </div> */}
          </div>
          <div className="col-span-1 relative">
            <div className="absolute text-primary-color text-2rem cs2-section-5">
              <h5>Stakeholder Feedback</h5>
              <p className="quote-box">&ldquo;It feels cluttered and overwhelming. I get lost in all the graphics and labels.&rdquo; 
                <br/><span className=" text-sm italic quotee">State Employee for Health Department</span></p> 
              <p className="quote-box">&ldquo;The labels don&apos;t resonate. Not sure what we&apos;re trying to represent here.&rdquo;
                <br/><span className=" text-sm italic quotee">Senior Mental Health Patient </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full min-h-screen flex flex-col justify-center items-center">
        <div className="container-padding relative grid grid-cols-3">
          <div className="col-span-2">
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
          </div>
          <div className="col-span-1">
            <img
                src="/image/case_studies/02/D_chat.png"
                alt="A wireframe of an AI chat interface"
                className="w-full h-full object-cover"
              />
          </div>
        </div>
      </section>

      <section className="w-full min-h-screen flex flex-col justify-center items-center">
        <div className="grid grid-cols-2">
          <div className="col-span-1 gradient-bg-2 text-white">
            {/* Video goes here */}
            
            <span className="container-padding caption text-sm font-mono ">Transcriptions and notes formed the foundation for AI-generated dialogue.</span>
          </div>
          <div className="col-span-1">
          <ResponsiveVideo src="/video/case_studies/02/Maria_Sketch_Animation_final.mp4" title="timelapse of sketch" />
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
                <h4 className="col-span-1 text-3rem font-bold text-white">
                    <span className="font-thin opacity-90">/</span>
                    <span className="font-bold"> Our New Workflow</span>
                </h4>
                <div className="col-span-2 container-padding">
                    <p className="text-white"><span className="font-bold numbered">01</span><span className="font-thin">Develop the character&apos;s background and profile</span></p>
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

