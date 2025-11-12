'use client';

import ResponsiveVideo from "../../components/ResponsiveVideo";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Slide7() {
  const handleArrowClick = () => {
    const viewportHeight = window.innerHeight;
    window.scrollBy({
      top: viewportHeight * 0.8,
      behavior: 'smooth'
    });
  };

  return (
    <main className="relative min-h-[calc(100vh)] w-full overflow-auto slide-6 case-study">
      <section className="w-full min-h-screen flex flex-col justify-center relative max-h-screen">
        
        <img
            src="/image/case_studies/03/Slide7_Hero.gif"
            alt="the back of a person sitting in front of several computer screens in a pixellated style"
            className="w-full h-full object-cover absolute inset-0 max-h-screen slide7-hero bg-black/30"
          />
          <div className="absolute inset-0 bg-black/50 w-full" />
        <div className="container-padding container-padding-vertical-quad absolute text-white">
          <h2 className="text-[clamp(2rem,6vw+1rem,5rem)] tracking-tight leading-none">
            <span className="font-thin opacity-90">/ Case Study 03</span>
            <br/> <span className="font-bold ">Moving Away from Static Design</span>
          </h2>
          <p className="p-max text-2rem leading-snug mt-10">How can we create <span className="font-bold all-caps">quick</span> prototypes that make ideas easy to understand and explore?</p>

          <motion.div
            className="absolute left-1/2 top-120 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer z-10"
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
            <ChevronDown size={56} strokeWidth={1.8} className="text-white drop-shadow-lg" />
          </motion.div>
        </div>
        
      </section>

      <section className="w-full flex flex-col">
        {/* Light grid background */}
        <div className="text-block-lg text-primary-color">
          <h3 className="h3-all-caps text-primary-color">
            <span className="font-thin opacity-90">/</span>
            <span className="font-bold"> Request for Proposal</span>
          </h3>
          <p>RFPs usually only ask for examples of past work. For the CHIA RFP, we also ran a short design sprint to quickly <span className="text-underline"><span className="font-bold">explore</span> and <span className="font-bold">prototype</span></span> new concepts.</p>
        </div>
      </section>

      <section className="w-full flex flex-col container-padding container-padding-vertical-quad">
        {/* Logo grid - horizontal on desktop, stacks on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center max-w-6xl mx-auto">
          <img
            src="/image/case_studies/03/logos/logo_cursor.png"
            alt="Cursor logo"
            className="w-full max-w-[200px] h-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
          <img
            src="/image/case_studies/03/logos/logo_figma.png"
            alt="Figma logo"
            className="w-full max-w-[200px] h-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
          <img
            src="/image/case_studies/03/logos/logo_framer.png"
            alt="Framer logo"
            className="w-full max-w-[200px] h-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
          <img
            src="/image/case_studies/03/logos/logo_lovabe.png"
            alt="Lovabe logo"
            className="w-full max-w-[200px] h-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="text-box text-primary-color mb-12 text-2rem">
          <p>There are so many tools out there to help designers build interactive prototypes.
          <br /> Depending on your goals, different tools might come in handy for different project outcomes.</p>
        </div>
      </section>

      <section className="w-full flex flex-col justify-center items-center">
        <div className="w-full grid grid-cols-2 responsive-grid">
          <div className="col-span-1 text-white">
            <div className="masked-video-offset-design">
              <div className="video-masked-design">
                <ResponsiveVideo src="/video/case_studies/03/design.mp4" title="video of a design artboard in Figma" />
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <ResponsiveVideo src="/video/case_studies/03/cursor.mp4" title="video of coding and prompting in Cursor" />
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col dark-grey-bg">
        {/* grid bg */}
        <div className="container-padding-vertical-quad">
          <h3 className="h3-all-caps text-white container-padding">
            <span className="font-thin opacity-90">/</span>
            <span className="font-bold"> Developing Cursor Prompts</span>
          </h3>
          <div className="container-padding">
            <div className="hidden md:block">
              <div className="grid grid-cols-[1fr_60px_1fr] gap-8 items-center justify-items-center">
                {/* Prompt 1 */}
                  <div className="w-full">
                    <img
                      src="/image/case_studies/03/cursor_prompts/E_1.png"
                      alt="Prompt 1 - Base Setup"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  {/* Arrow --> to be flipped on mobile */}
                  <div className="flex items-center justify-center">
                    <img
                      src="/image/case_studies/03/cursor_prompts/arrow_short.svg"
                      alt=""
                      className="w-auto h-8 object-contain"
                    />
                  </div>
                  {/*  Prompt 2 */}
                  <div className="w-full">
                    <img
                      src="/image/case_studies/03/cursor_prompts/E_2.png"
                      alt="Prompt 2 - Navbar"
                      className="w-full h-auto object-contain"
                    />
                    <img
                      src="/image/case_studies/03/cursor_prompts/E_3.png"
                      alt="Prompt 3 - Hero Section"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                
                
                {/* Arrow from Prompt 2 to Prompt 3 (spans full width, vertical) */}
                <div className="col-span-3 flex items-center justify-center w-full px-4">
                  <img
                    src="/image/case_studies/03/cursor_prompts/horiz_arrow_long.svg"
                    alt=""
                    className="h-auto object-contain horiz_arrow_long"
                  />
                </div>

                  {/* Prompt 3 */}
                  <div className="w-full self-start">
                    <img
                      src="/image/case_studies/03/cursor_prompts/E_4.png"
                      alt="Prompt 3 - Hero Section"
                      className="w-full h-auto object-contain"
                    />
                    <img
                      src="/image/case_studies/03/cursor_prompts/E_5.png"
                      alt="Design reference for hero section"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  {/* Arrow --> to be flipped on mobile */}
                  <div className="flex items-center justify-center">
                    <img
                      src="/image/case_studies/03/cursor_prompts/arrow_short.svg"
                      alt=""
                      className="w-auto h-8 object-contain"
                    />
                  </div>
                  {/*  Prompt 4 */}
                  <div className="w-full self-start">
                    <p className="text-white">Prompt 4 &mdash; Data Cards</p>
                    <img
                      src="/image/case_studies/03/cursor_prompts/E_6.png"
                      alt="Prompt 4 - Data cards"
                      className="w-full h-auto object-contain"
                    />
                    <img
                      src="/image/case_studies/03/cursor_prompts/E_7.png"
                      alt="Design reference for data cards"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                
                
               
              </div>
            </div>
            
            {/* Mobile: Stacked with rotated arrows */}
            <div className="flex flex-col md:hidden gap-6 items-center">
              {/* Prompt 1 */}
              <img
                src="/image/case_studies/03/cursor_prompts/E_1.png"
                alt="Prompt 1 - Base Setup"
                className="w-full h-auto object-contain"
              />
              
              {/* Arrow down to Prompt 2 */}
              <img
                src="/image/case_studies/03/cursor_prompts/arrow_short.svg"
                alt=""
                className="w-auto max-h-[14px] object-contain rotate-90 m-[10px]"
              />
              
              {/* Prompt 2 */}
              <img
                src="/image/case_studies/03/cursor_prompts/E_2.png"
                alt="Prompt 2 - Navbar"
                className="w-full h-auto object-contain"
              />
              <img
                src="/image/case_studies/03/cursor_prompts/E_3.png"
                alt="Design reference for navbar"
                className="w-full h-auto object-contain"
              />
              
              {/* Arrow down to Prompt 3 */}
              <img
                src="/image/case_studies/03/cursor_prompts/arrow_short.svg"
                alt=""
                className="w-auto max-h-[14px] object-contain rotate-90 m-[10px]"
              />
              
              {/* Prompt 3 */}
              <img
                src="/image/case_studies/03/cursor_prompts/E_4.png"
                alt="Prompt 3 - Hero Section"
                className="w-full h-auto object-contain"
              />
              <img
                src="/image/case_studies/03/cursor_prompts/E_5.png"
                alt="Design reference for hero section"
                className="w-full h-auto object-contain"
              />
              
              {/* Arrow down to Prompt 4 */}
              <img
                src="/image/case_studies/03/cursor_prompts/arrow_short.svg"
                alt=""
                className="w-auto max-h-[14px] object-contain rotate-90 m-[10px]"
              />
              
              {/* Prompt 4 */}
              <p className="text-white text-left mb-0 mt-5 w-full">Prompt 4 &mdash; Data Cards</p>
              <img
                src="/image/case_studies/03/cursor_prompts/E_6.png"
                alt="Prompt 4 - Data Cards"
                className="w-full h-auto object-contain"
              />
              <img
                src="/image/case_studies/03/cursor_prompts/E_7.png"
                alt="Design reference for data cards"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col light-grey-bg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
                src="/image/case_studies/03/F_1.png"
                alt="Design reference for data cards"
                className="w-full h-auto object-contain"
              />
          </div>
          <div>
            <div className="container-padding-vertical-quad">
              <div className="text-box white-bg little-padding mb-10"><p>Dashboards. I want to compare 30-day readmission rates and patient experience scores for 2017 and 2019 across Beth Israel Deaconess Medical Center and its affiliates.</p></div>
              <div className="relative">
                {/* Vertical line behind checkmarks */}
                <div 
                  className="absolute left-[10px] top-[12px] bottom-[12px] w-[2px] bg-[#E6E6E6]"
                ></div>
                <ol className="list-none space-y-2 relative">
                  <li className="flex items-start gap-2">
                    <img 
                      src="/image/case_studies/03/Checkmark.svg" 
                      alt="" 
                      className="w-5 h-5 mt-0.5 flex-shrink-0 relative z-10"
                    />
                    <span>1. Display Quality & Patient Safety dashboard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <img 
                      src="/image/case_studies/03/Checkmark.svg" 
                      alt="" 
                      className="w-5 h-5 mt-0.5 flex-shrink-0 relative z-10"
                    />
                    <span>2. Filtered for hospitals within Beth Israel Lahey Health
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Beth Israel Deaconess Medical Center (Boston)</li>
                        <li>BID - Needham</li>
                        <li>BID - Milton</li>
                        <li>Mount Auburn Hospital</li>
                        <li>Anna Jaques Hospital</li>
                      </ul>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <img 
                      src="/image/case_studies/03/Checkmark.svg" 
                      alt="" 
                      className="w-5 h-5 mt-0.5 flex-shrink-0 relative z-10"
                    />
                    <span>3. Filtered data from 2017-2019</span>
                  </li>
                </ol>
              </div>
            </div>
            <img
                src="/image/case_studies/03/F_2.png"
                alt="Design reference for data cards"
                className="w-full h-auto object-contain"
              />
          </div>
        </div>
      </section>
      
    </main>
  );
}

