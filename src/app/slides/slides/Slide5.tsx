'use client';

import ResponsiveVideo from "../../components/ResponsiveVideo";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Slide5() {
  const handleArrowClick = () => {
    const viewportHeight = window.innerHeight;
    window.scrollBy({
      top: viewportHeight * 1,
      behavior: 'smooth'
    });
  };

  return (
    <main className="relative min-h-[calc(100vh)] w-full overflow-auto slide-5 case-study">
      
      
      <section className="gradient-bg w-full min-h-screen flex flex-col justify-center container-padding container-padding-vertical-quad">
        <h2 className="text-white text-[clamp(2rem,6vw+1rem,5rem)] tracking-tight">
          <span className="font-thin opacity-90">/ Case Study 01</span>
          <br/> <span className="font-bold">Animating Complex Care Journeys</span>
        </h2>

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
          <ChevronDown size={56} strokeWidth={1.8} className="text-white/80 drop-shadow-lg" />
        </motion.div>
      </section>

      <section className="w-full flex flex-col justify-center items-center">
        <div className="container-padding">
          <img
            src="/image/case_studies/01/0_Extra/Final_R1E.png"
            alt="Case Study 01"
            className="w-full h-full object-contain"
          />
          <span className="caption text-sm font-mono ">/ Past static storytelling methods started to feel limited.</span>
        </div>
      </section>

      <section className="w-full flex flex-col">
        <div className="text-block-lg text-primary-color">
          <span className="font-bold">Our task — </span>
          <span>visualize the challenges <em className="italic">patients & providers</em> face during their care journeys to ultimately help <span className="text-underline">drive policy change</span>.</span>
        </div>
      </section>

      <section className="w-full flex flex-col justify-center items-center">
        
        <div className="w-full">
          <div className="image-grid image-grid-tall grid grid-cols-3 gap-4 mb-8">
            <img
              src="/image/case_studies/01/B_Character-Sketches/Provider_model_sheet.png"
              alt="Case Study Small"
              className="col-span-1 h-full w-full object-contain "
            />
            <img
              src="/image/case_studies/01/B_Character-Sketches/Patient_model_sheet.png"
              alt="Case Study Large"
              className="col-span-2 h-full w-full object-contain"
            />
          </div>

          <div className="image-grid image-grid-short grid grid-cols-4 gap-4">
            <img
              src="/image/case_studies/01/B_Character-Sketches/storyboard_sketch_1.png"
              alt="Grid 1"
              className="h-full w-full object-cover"
            />
            <img
              src="/image/case_studies/01/B_Character-Sketches/storyboard_sketch_2.png"
              alt="Grid 2"
              className="h-full w-full object-cover"
            />
            <img
              src="/image/case_studies/01/B_Character-Sketches/storyboard_sketch_3.png"
              alt="Grid 3"
              className="h-full w-full object-cover"
            />
            <img
              src="/image/case_studies/01/B_Character-Sketches/storyboard_sketch_4.png"
              alt="Grid 4"
              className="h-full w-full object-cover"
            />
          </div>
          
          <span className="container-padding caption text-sm font-mono ">/ Patient & Provider model sheets and early storyboard sketches.</span>
        </div>
      </section>

      <section className="w-full flex flex-col container-padding container-padding-vertical-quad margin-top">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <h3 className="h3-all-caps text-primary-color">
            <span className="font-thin opacity-90">/</span>
            <span className="font-bold"> HOW ABOUT 3D?</span>
          </h3>
          <div className="text-3rem text-primary-color">
            <span>What if we built models of hospitals and clinics to capture our backgrounds faster?</span>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col justify-center items-center">
        
        <div className="w-full image-grid image-grid-tall grid grid-cols-3 gap-4 mb-8">
          <div className="col-span-2 h-full w-full object-contain ">
            <img
              src="/image/case_studies/01/C_How_About_3D/r4-B.png"
              alt="Case Study Small"
              className="h-full w-full object-contain "
            />
            <span className="container-padding caption text-sm font-mono ">/ Hospital bed, hallway scene</span>
          </div>
          <div className="col-span-1 h-full w-full object-contain">
            <img
              src="/image/case_studies/01/C_How_About_3D/r1-A.png"
              alt="Case Study Large"
              className="h-full w-full object-contain"
            />
          <span className="container-padding caption text-sm font-mono ">/ Emergency room bay</span>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col container-padding">
        <ResponsiveVideo src="/video/case_studies/01/C_How_About_3D/3D_Model_Animation.mov" title="Video of emergency room 3D model" />
        <span className="container-padding caption text-sm font-mono font-bold ">/ Emergency room 3D model animation <span className="font-thin opacity-50">(Rhinoceros 3D)</span></span>
      </section>

      <section className="w-full min-h-screen flex flex-col container-padding">
        <h3 className="h3-all-caps text-primary-color">
          <span className="font-thin opacity-90">/</span>
          <span className="font-bold"> Midjourney testing</span>
        </h3>

        <div className="w-full image-grid grid grid-cols-2 gap-4 mb-8">
          <div className="col-span-1 h-full w-full object-contain ">
            <div className="container-padding">
              <div className="relative">
                <img
                  src="/image/case_studies/01/D_Midjourney_Testing/Midjourney_Export_1.png"
                  alt="Case Study Small"
                  className="h-full w-full object-contain "
                />
                <div className="caption-overlay">
                  <p className="text-xs italic">&ldquo;A minimalistic, surreal illustration of a hospital emergency room, clean thin linework, soft pastel color palette, flat texture, fine detail, elegant negative space, inspired by the visual style of <span className="font-bold">Harriet Lee-Merrion</span>.&rdquo;</p>
                </div>
              </div>
            </div>
            <span className="container-padding caption text-sm font-mono font-bold ">/ Midjourney V7 <span className="font-thin">Style Test 01</span></span>
          </div>

          <div className="col-span-1 h-full w-full object-contain">
            <div className="container-padding">
              <div className="relative">
                <img
                  src="/image/case_studies/01/D_Midjourney_Testing/Midjourney_Export_2.png"
                  alt="Case Study Large"
                  className="h-full w-full object-contain"
                />
                <div className="caption-overlay">
                  <p className="text-xs italic">&ldquo;Hospital trauma room, cinematic lighting, hard-edged blocky brush strokes, rich color gradients with purples, oranges, and greens, high contrast, simplified forms with painterly texture, a moody yet vibrant atmosphere, inspired by the visual style of <span className="font-bold">Joseph Iovescu</span>.&rdquo;</p>
                </div>
              </div>
              <span className="container-padding caption text-sm font-mono font-bold ">/ Midjourney V7 <span className="font-thin">Style Test 02</span></span>
            </div>

            <div className="container-padding">
              <div className="relative">
                <img
                  src="/image/case_studies/01/D_Midjourney_Testing/Midjourney_Export_3.png"
                  alt="Case Study Large"
                  className="h-full w-full object-contain"
                />
                <div className="caption-overlay">
                  <p className="text-xs italic">&ldquo;A friendly and colour hospital waiting room, watercolor textures, playful and minimal detail, inspired by the visual style of <span className="font-bold">Oliver Jeffers</span>.&rdquo;</p>
                </div>
              </div>            
              <span className="container-padding caption text-sm font-mono font-bold ">/ Midjourney V7 <span className="font-thin">Style Test 03</span></span>
            </div>
            
          </div>
        </div>

        <div className="w-full image-grid grid grid-cols-2 gap-4 mb-8">
          <div className="col-span-1 h-full w-full object-contain ">
            <div className="container-padding">
              <div className="relative">
                {/* wrong image, to be replaced */}
                <img
                  src="/image/case_studies/01/D_Midjourney_Testing/Midjourney_Export_1.png"
                  alt="Case Study Small"
                  className="h-full w-full object-contain "
                />
              </div>
            </div>
          </div>
          
          <div className="col-span-1 h-full w-full object-contain">
            <div className="container-padding">
              <div className="relative">
                <img
                  src="/image/case_studies/01/D_Midjourney_Testing/Midjourney_Export_4.png"
                  alt="Case Study Large"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="container-padding caption text-sm font-mono font-bold ">/ Midjourney V7 <span className="font-thin">/ Midjourney V7 Style Test 04 with GoInvo reference</span></span>
            </div>
            
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col justify-center items-center primary-bg">
        
        <div className="w-full container-padding-quad">
          {/* Row 1: Rhino 3D */}
          <div className="image-grid image-grid-short grid grid-cols-4 gap-4 padding-top">
            <div>
                <img
                src="/image/case_studies/01/E_New-Workflow/r1-A.png"
                alt="Grid 1"
                className="h-full w-full object-cover"
                />
                <div className="flex justify-between items-center">
                  <span className="caption text-sm font-mono font-bold text-white">Rhino 3D</span>
                  <span className="caption text-sm font-mono font-bold text-white"><span className="font-thin">Shot:</span> SH101</span>
                </div>
            </div>
            <div>
                <img
                src="/image/case_studies/01/E_New-Workflow/r1-B.png"
                alt="Grid 1"
                className="h-full w-full object-cover"
                />
                <div className="text-right">
                  <span className="caption text-sm font-mono font-bold text-white"><span className="font-thin">Shot:</span> SH102</span>
                </div>
            </div>
            <div>
                <img
                src="/image/case_studies/01/E_New-Workflow/r1-C.png"
                alt="Grid 1"
                className="h-full w-full object-cover"
                />
                <div className="text-right">
                  <span className="caption text-sm font-mono font-bold text-white"><span className="font-thin">Shot:</span> SH103</span>
                </div>
            </div>
            <div>
                <img
                src="/image/case_studies/01/E_New-Workflow/r1-D.png"
                alt="Grid 1"
                className="h-full w-full object-cover"
                />
                <div className="text-right">
                  <span className="caption text-sm font-mono font-bold text-white"><span className="font-thin">Shot:</span> SH104</span>
                </div>
            </div>
          </div>

          {/* Row 2: Midjourney Retexture */} 
          <div className="image-grid image-grid-short grid grid-cols-4 gap-4 padding-top">
            <div>
                <img
                src="/image/case_studies/01/E_New-Workflow/r2-A.png"
                alt="Grid 1"
                className="h-full w-full object-cover"
                />
                <div className="flex justify-between items-center">
                  <span className="caption text-sm font-mono font-bold text-white">Midjourney Retexture</span>
                  <span className="caption text-sm font-mono font-bold text-white"><span className="font-thin">Shot:</span> SH101</span>
                </div>
            </div>
            <div>
                <img
                src="/image/case_studies/01/E_New-Workflow/r2-B.png"
                alt="Grid 1"
                className="h-full w-full object-cover"
                />
                <div className="text-right">
                  <span className="caption text-sm font-mono font-bold text-white"><span className="font-thin">Shot:</span> SH102</span>
                </div>
            </div>
            <div>
                <img
                src="/image/case_studies/01/E_New-Workflow/r2-C.png"
                alt="Grid 1"
                className="h-full w-full object-cover"
                />
                <div className="text-right">
                  <span className="caption text-sm font-mono font-bold text-white"><span className="font-thin">Shot:</span> SH103</span>
                </div>
            </div>
            <div>
                <img
                src="/image/case_studies/01/E_New-Workflow/r2-D.png"
                alt="Grid 1"
                className="h-full w-full object-cover"
                />
                <div className="text-right">
                  <span className="caption text-sm font-mono font-bold text-white"><span className="font-thin">Shot:</span> SH104</span>
                </div>
            </div>
          </div>

    
        {/* Row 3: Photoshop & Procreate */}
          <div className="image-grid image-grid-short grid grid-cols-4 gap-4 padding-top">
            <div>
                <img
                src="/image/case_studies/01/E_New-Workflow/r3-A.png"
                alt="Grid 1"
                className="h-full w-full object-cover"
                />
                <div className="flex justify-between items-center">
                  <span className="caption text-sm font-mono font-bold text-white">Photoshop & Procreate</span>
                  <span className="caption text-sm font-mono font-bold text-white"><span className="font-thin">Shot:</span> SH101</span>
                </div>
            </div>
            <div>
                <img
                src="/image/case_studies/01/E_New-Workflow/r3-B.png"
                alt="Grid 1"
                className="h-full w-full object-cover"
                />
                <div className="text-right">
                  <span className="caption text-sm font-mono font-bold text-white"><span className="font-thin">Shot:</span> SH102</span>
                </div>
            </div>
            <div>
                <img
                src="/image/case_studies/01/E_New-Workflow/r3-C.png"
                alt="Grid 1"
                className="h-full w-full object-cover"
                />
                <div className="text-right">
                  <span className="caption text-sm font-mono font-bold text-white"><span className="font-thin">Shot:</span> SH103</span>
                </div>
            </div>
            <div>
                <img
                src="/image/case_studies/01/E_New-Workflow/r3-D.png"
                alt="Grid 1"
                className="h-full w-full object-cover"
                />
                <div className="text-right">
                  <span className="caption text-sm font-mono font-bold text-white"><span className="font-thin">Shot:</span> SH104</span>
                </div>
            </div>
          </div>

          {/* Row 4: animations */}
          <div className="image-grid image-grid-short grid grid-cols-4 gap-4 padding-top">
            <div>
            <ResponsiveVideo src="/video/case_studies/01/E_New-Workflow/Video_R4-A.mp4" title="Video of emergency room 3D model" />
                <div className="flex justify-between items-center">
                  <span className="caption text-sm font-mono font-bold text-white">Midjourney Animate</span>
                  <span className="caption text-sm font-mono font-bold text-white"><span className="font-thin">Shot:</span> SH101</span>
                </div>
            </div>
            <div>
            <ResponsiveVideo src="/video/case_studies/01/E_New-Workflow/Video_R4-B.mp4" title="Video of emergency room 3D model" />
                <div className="text-right">
                  <span className="caption text-sm font-mono font-bold text-white"><span className="font-thin">Shot:</span> SH102</span>
                </div>
            </div>
            <div>
                <ResponsiveVideo src="/video/case_studies/01/E_New-Workflow/Video_R4-C.mp4" title="Video of emergency room 3D model" />
                <div className="text-right">
                  <span className="caption text-sm font-mono font-bold text-white"><span className="font-thin">Shot:</span> SH103</span>
                </div>
            </div>
            <div>
            <ResponsiveVideo src="/video/case_studies/01/E_New-Workflow/Video_R4-D.mp4" title="Video of emergency room 3D model" />
                <div className="text-right">
                  <span className="caption text-sm font-mono font-bold text-white"><span className="font-thin">Shot:</span> SH104</span>
                </div>
            </div>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <h4 className="col-span-1 text-lger font-bold text-white">
                    <span className="font-thin opacity-90">/</span>
                    <span className="font-bold"> Our New Workflow</span>
                </h4>
                <div className="col-span-2 container-padding">
                    <p className="text-white"><span className="font-bold numbered">01</span><span className="font-thin">Frame the shot in 3D</span></p>
                    <p className="text-white"><span className="font-bold numbered">02</span><span className="font-thin">Style in Midjourney (using our own illustrations as reference)</span></p>
                    <p className="text-white"><span className="font-bold numbered">03</span><span className="font-thin">Post-processing in Photoshop & add Procreate drawn characters</span></p>
                    <p className="text-white"><span className="font-bold numbered">04</span><span className="font-thin">Back to Midjourney to animate</span></p>
                </div>
            </div>
        </div>
      </section>

      <section className="w-full min-h-screen flex flex-col container-padding">
        <h3 className="h3-all-caps text-primary-color">
          <span className="font-thin opacity-90">/</span>
          <span className="font-bold"> A Snippet</span>
        </h3>
        <div className="container-padding">
          <div className="relative">
            <img
              src="/image/case_studies/01/E_New-Workflow/r3-A.png"
              alt="Grid 1"
              className="h-full w-full object-cover"
              />
            </div>
          <span className="caption text-sm font-mono ">/ Care Journey Snippet</span>
        </div>
      </section>

      <section className="w-full flex flex-col container-padding-vertical-quad">
        <div className="text-block-lg text-primary-color">
          <span>The result of this workflow was <span className="font-bold">4 animations</span> telling the stories of our patients and providers, accomplished in a third of the time — from <span className="font-bold">600</span> hours to <em className="italic font-bold">200 </em> hours.</span>
        </div>
      </section>
      
    </main>
  );
}

