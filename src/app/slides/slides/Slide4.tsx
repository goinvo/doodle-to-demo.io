'use client';

import ResponsiveVideo from "../../components/ResponsiveVideo";
import OptimizedImage from "../../components/OptimizedImage";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Slide4() {
  const handleArrowClick = () => {
    const viewportHeight = window.innerHeight;
    window.scrollBy({
      top: viewportHeight * 1,
      behavior: 'smooth'
    });
  };

  return (
    <main className="relative min-h-[calc(100vh)] w-full overflow-auto slide-5 case-study">
      
      
      <section className="gradient-bg-with-grid-2 w-full min-h-screen flex flex-col justify-center container-padding container-padding-vertical-quad">
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
        <div className="container-padding w-full max-w-none">
          <div className="relative w-full" style={{ aspectRatio: '16 / 9', width: '100%', maxWidth: '100%' }}>
            <img
              src="/image/case_studies/01/0_Extra/Final_R1E.png"
              alt="Case Study 01"
              className="w-full h-full object-contain no-mobile"
            />
            <OptimizedImage
              src="/image/case_studies/01/0_Extra/Final_R1E.png"
              alt="Case Study 01"
              className="w-full h-full object-contain mobile-only"
            />
          </div>
          <span className="caption text-sm font-mono ">/ Past static storytelling methods started to feel limited.</span>
        </div>
      </section>

      <section className="w-full flex flex-col">
        <div className="text-block-lg text-primary-color">
          <span className="font-bold">Our task — </span>
          <span>visualize the challenges <em className="italic">patients & providers</em> face during their care journeys to ultimately help <span className="custom-underline">drive policy change</span>.</span>
        </div>
      </section>

      <section className="w-full flex flex-col justify-center items-center">
        
        <div className="w-full">
          <div className="image-grid image-grid-tall grid grid-cols-3 gap-4 mb-8 items-stretch">
            <div className="col-span-1 flex items-center justify-center mobile-only" style={{ aspectRatio: '1/2' }}>
              <OptimizedImage
                src="/image/case_studies/01/B_Character-Sketches/Provider_model_sheet.png"
                alt="Case Study Small"
                className="h-full w-full object-contain mobile-only"
              />
            </div>
            <div className="col-span-2 flex items-center justify-center mobile-only" style={{ aspectRatio: '16/9' }}>
              <OptimizedImage
                src="/image/case_studies/01/B_Character-Sketches/Patient_model_sheet.png"
                alt="Case Study Large"
                className="h-full w-full object-contain "
              />
            </div>
              
            <div className="col-span-1 flex items-center justify-center no-mobile" >
              <img
                src="/image/case_studies/01/B_Character-Sketches/Provider_model_sheet.png"
                alt="Case Study Small"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="col-span-2 flex items-center justify-center no-mobile" >
              <img
                src="/image/case_studies/01/B_Character-Sketches/Patient_model_sheet.png"
                alt="Case Study Large"
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <div className="image-grid image-grid-short grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <OptimizedImage
                src="/image/case_studies/01/B_Character-Sketches/storyboard_sketch_1.png"
                alt="Grid 1"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <OptimizedImage
                src="/image/case_studies/01/B_Character-Sketches/storyboard_sketch_2.png"
                alt="Grid 2"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <OptimizedImage
                src="/image/case_studies/01/B_Character-Sketches/storyboard_sketch_3.png"
                alt="Grid 3"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <OptimizedImage
                src="/image/case_studies/01/B_Character-Sketches/storyboard_sketch_4.png"
                alt="Grid 4"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          
          <p className="container-padding caption text-sm font-mono ">/ Patient & Provider model sheets and early storyboard sketches.</p>
        </div>
      </section>

      <section className="w-full flex flex-col container-padding container-padding-vertical-quad margin-top">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <h3 className="h3-all-caps text-primary-color">
            <span className="font-thin opacity-90">/</span>
            <span className="font-bold"> HOW ABOUT 3D?</span>
          </h3>
          <div className="text-3rem text-primary-color">
            <p>What if we built models of hospitals and clinics to capture our backgrounds faster?</p>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col justify-center items-center">
        
        <div className="w-full image-grid image-grid-tall grid grid-cols-3 gap-4 mb-8 items-stretch">
          <div className="col-span-2 flex flex-col">
            <div className="flex-1 flex items-center justify-center " style={{ aspectRatio: '16/9' }}>
              <OptimizedImage
                src="/image/case_studies/01/C_How_About_3D/r4-B.png"
                alt="Case Study Small"
                className="h-full w-full object-contain"
              />
            </div>
            <p className="container-padding caption text-sm font-mono ">/ Hospital bed, hallway scene</p>
          </div>
          <div className="col-span-1 flex flex-col">
            <div className="flex-1 flex items-center justify-center">
              <OptimizedImage
                src="/image/case_studies/01/C_How_About_3D/r1-A.png"
                alt="Case Study Large"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="container-padding caption text-sm font-mono ">/ Emergency room bay</p>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col container-padding">
        <div className="w-full">
          <ResponsiveVideo src="/video/case_studies/01/C_How_About_3D/3D_Model_Animation_cropped.mp4" title="Video of emergency room 3D model" preload="auto" />
        </div>
        <p className="container-padding caption text-sm font-mono font-bold ">/ Emergency room 3D model animation <span className="font-thin opacity-50">(Rhinoceros 3D)</span>
          Explore the model for yourself at <a href="https://goinvo.com/vision/visual-storytelling-with-genai/" target="_blank" rel="noopener noreferrer">Goinvo.com</a>
        </p>
      </section>

      <section className="w-full min-h-screen flex flex-col container-padding">
        <h3 className="h3-all-caps text-primary-color">
          <span className="font-thin opacity-90">/</span>
          <span className="font-bold"> Midjourney testing</span>
        </h3>

        <div className="w-full image-grid grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="col-span-1 w-full object-contain ">
              <div className="relative">
                <img
                  src="/image/case_studies/01/D_Midjourney_Testing/Midjourney_Export_1.png"
                  alt="Case Study Small"
                  className="w-full object-contain "
                />
                <div className="caption-overlay">
                  <p className="text-xs italic">&ldquo;A minimalistic, surreal illustration of a hospital emergency room, clean thin linework, soft pastel color palette, flat texture, fine detail, elegant negative space, inspired by the visual style of <span className="font-bold">Harriet Lee-Merrion</span>.&rdquo;</p>
                </div>
              </div>
            <p className="container-padding caption text-sm font-mono font-bold ">/ Midjourney V7 <span className="font-thin">Style Test 01</span></p>
          </div>

          <div className="col-span-1 w-full object-contain">            
              <div className="relative">
                <img
                  src="/image/case_studies/01/D_Midjourney_Testing/Midjourney_Export_2.png"
                  alt="Case Study Large"
                  className="w-full object-contain"
                />
                <div className="caption-overlay">
                  <p className="text-xs italic">&ldquo;Hospital trauma room, cinematic lighting, hard-edged blocky brush strokes, rich color gradients with purples, oranges, and greens, high contrast, simplified forms with painterly texture, a moody yet vibrant atmosphere, inspired by the visual style of <span className="font-bold">Joseph Iovescu</span>.&rdquo;</p>
                </div>
              </div>
              <p className="container-padding caption text-sm font-mono font-bold ">/ Midjourney V7 <span className="font-thin">Style Test 02</span></p>
            
              <div className="relative">
                <img
                  src="/image/case_studies/01/D_Midjourney_Testing/Midjourney_Export_3.png"
                  alt="Case Study Large"
                  className="w-full object-contain"
                />
                <div className="caption-overlay">
                  <p className="text-xs italic">&ldquo;A friendly and colour hospital waiting room, watercolor textures, playful and minimal detail, inspired by the visual style of <span className="font-bold">Oliver Jeffers</span>.&rdquo;</p>
                </div>
              </div>            
              <p className="container-padding caption text-sm font-mono font-bold ">/ Midjourney V7 <span className="font-thin">Style Test 03</span></p>
            
          </div>
        </div>

        <div className="w-full image-grid grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="col-span-1 w-full object-contain ">
            <div className="w-full">
              <ResponsiveVideo src="/video/case_studies/01/D_Midjourney_Testing/GoInvo_Style_Midjourney_Capture_animation_final.mp4" title="Video of emergency room 3D model" preload="auto" />
            </div>
          </div>
          
          <div className="col-span-1 w-full object-contain">
            <div className="relative">
              <img
                src="/image/case_studies/01/D_Midjourney_Testing/Midjourney_Export_4.png"
                alt="Case Study Large"
                className="w-full object-contain"
              />
            </div>
            <span className="container-padding caption text-sm font-mono font-bold ">/ Midjourney V7 <span className="font-thin">/ Midjourney V7 Style Test 04 with GoInvo reference</span></span>
            
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col justify-center items-center primary-bg">
        
        <div className="w-full container-padding-quad">
          {/* Row 1: Rhino 3D */}
          <div className="image-grid image-grid-short grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-4 padding-top">
            <div className="mb-4 md:mb-0">
                <div className="flex justify-between items-center mobile-only">
                  <span className="caption text-sm font-mono font-bold text-white">Rhino 3D</span>
                </div>
                <img
                src="/image/case_studies/01/E_New-Workflow/r1-A.png"
                alt="Grid 1"
                className="h-full w-full object-cover"
                />
                <div className="flex justify-between items-center">
                  <span className="caption text-sm font-mono font-bold text-white no-mobile">Rhino 3D</span>
                  <span className="caption text-sm font-mono font-bold text-white ml-auto"><span className="font-thin">Shot:</span> SH101</span>
                </div>
            </div>
            <div className="mb-4 md:mb-0">
                <img
                src="/image/case_studies/01/E_New-Workflow/r1-B.png"
                alt="Grid 1"
                className="h-full w-full object-cover"
                />
                <div className="text-right">
                  <span className="caption text-sm font-mono font-bold text-white"><span className="font-thin">Shot:</span> SH102</span>
                </div>
            </div>
            <div className="mb-4 md:mb-0">
                <img
                src="/image/case_studies/01/E_New-Workflow/r1-C.png"
                alt="Grid 1"
                className="h-full w-full object-cover"
                />
                <div className="text-right">
                  <span className="caption text-sm font-mono font-bold text-white"><span className="font-thin">Shot:</span> SH103</span>
                </div>
            </div>
            <div className="mb-4 md:mb-0">
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
          <div className="image-grid image-grid-short grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-4 padding-top mt-6 md:mt-8">
            <div className="mb-4 md:mb-0">
                <div className="flex justify-between items-center mobile-only">
                  <span className="caption text-sm font-mono font-bold text-white">Midjourney Retexture</span>
                </div>
                <img
                src="/image/case_studies/01/E_New-Workflow/r2-A.png"
                alt="Grid 1"
                className="h-full w-full object-cover"
                />
                <div className="flex justify-between items-center">
                  <span className="caption text-sm font-mono font-bold text-white no-mobile">Midjourney Retexture</span>
                  <span className="caption text-sm font-mono font-bold text-white ml-auto"><span className="font-thin">Shot:</span> SH101</span>
                </div>
            </div>
            <div className="mb-4 md:mb-0">
                <img
                src="/image/case_studies/01/E_New-Workflow/r2-B.png"
                alt="Grid 1"
                className="h-full w-full object-cover"
                />
                <div className="text-right">
                  <span className="caption text-sm font-mono font-bold text-white"><span className="font-thin">Shot:</span> SH102</span>
                </div>
            </div>
            <div className="mb-4 md:mb-0">
                <img
                src="/image/case_studies/01/E_New-Workflow/r2-C.png"
                alt="Grid 1"
                className="h-full w-full object-cover"
                />
                <div className="text-right">
                  <span className="caption text-sm font-mono font-bold text-white"><span className="font-thin">Shot:</span> SH103</span>
                </div>
            </div>
            <div className="mb-4 md:mb-0">
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
          <div className="image-grid image-grid-short grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-4 padding-top mt-6 md:mt-8">
            <div className="mb-4 md:mb-0">
                <div className="flex justify-between items-center mobile-only">
                  <span className="caption text-sm font-mono font-bold text-white">Photoshop & Procreate</span>
                </div>
                <img
                src="/image/case_studies/01/E_New-Workflow/r3-A.png"
                alt="Grid 1"
                className="h-full w-full object-cover"
                />
                <div className="flex justify-between items-center">
                  <span className="caption text-sm font-mono font-bold text-white no-mobile">Photoshop & Procreate</span>
                  <span className="caption text-sm font-mono font-bold text-white ml-auto"><span className="font-thin">Shot:</span> SH101</span>
                </div>
            </div>
            <div className="mb-4 md:mb-0">
                <img
                src="/image/case_studies/01/E_New-Workflow/r3-B.png"
                alt="Grid 1"
                className="h-full w-full object-cover"
                />
                <div className="text-right">
                  <span className="caption text-sm font-mono font-bold text-white"><span className="font-thin">Shot:</span> SH102</span>
                </div>
            </div>
            <div className="mb-4 md:mb-0">
                <img
                src="/image/case_studies/01/E_New-Workflow/r3-C.png"
                alt="Grid 1"
                className="h-full w-full object-cover"
                />
                <div className="text-right">
                  <span className="caption text-sm font-mono font-bold text-white"><span className="font-thin">Shot:</span> SH103</span>
                </div>
            </div>
            <div className="mb-4 md:mb-0">
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
          <div className="image-grid image-grid-short grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-4 padding-top mt-6 md:mt-8">
            <div className="mb-4 md:mb-0">
                <div className="flex justify-between items-center mobile-only">
                  <span className="caption text-sm font-mono font-bold text-white">Midjourney Animate</span>
                </div>
              <ResponsiveVideo src="/video/case_studies/01/E_New-Workflow/Video_R4-A.mp4" title="Video of emergency room 3D model" preload="auto" />
                <div className="flex justify-between items-center">
                  <span className="caption text-sm font-mono font-bold text-white no-mobile">Midjourney Animate</span>
                  <span className="caption text-sm font-mono font-bold text-white ml-auto"><span className="font-thin">Shot:</span> SH101</span>
                </div>
            </div>
            <div className="mb-4 md:mb-0">
              <ResponsiveVideo src="/video/case_studies/01/E_New-Workflow/Video_R4-B.mp4" title="Video of emergency room 3D model" preload="auto" />
                <div className="text-right">
                  <span className="caption text-sm font-mono font-bold text-white"><span className="font-thin">Shot:</span> SH102</span>
                </div>
            </div>
            <div className="mb-4 md:mb-0">
                <ResponsiveVideo src="/video/case_studies/01/E_New-Workflow/Video_R4-C.mp4" title="Video of emergency room 3D model" preload="auto" />
                <div className="text-right">
                  <span className="caption text-sm font-mono font-bold text-white"><span className="font-thin">Shot:</span> SH103</span>
                </div>
            </div>
            <div className="mb-4 md:mb-0">
            <ResponsiveVideo src="/video/case_studies/01/E_New-Workflow/Video_R4-D.mp4" title="Video of emergency room 3D model" preload="auto" />
                <div className="text-right">
                  <span className="caption text-sm font-mono font-bold text-white"><span className="font-thin">Shot:</span> SH104</span>
                </div>
            </div>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <h4 className="col-span-1 text-3rem font-bold text-white">
                    <span className="font-thin opacity-90">/</span>
                    <span className="font-bold"> Our New Workflow</span>
                </h4>
                <div className="col-span-2 container-padding">
                <dl className="text-white text-1rem workflow-list">
                    <dt className="font-black numbered">01</dt>
                    <dd className="">Frame the shot in 3D</dd>
                    <dt className="font-black numbered">02</dt>
                    <dd className="">Style in Midjourney (using our own illustrations as reference)</dd>
                    <dt className="font-black numbered">03</dt>
                    <dd className="">Post-processing in Photoshop & add Procreate drawn characters</dd>
                    <dt className="font-black numbered">04</dt>
                    <dd className="">Back to Midjourney to animate</dd>
                  </dl>
                </div>
            </div>
        </div>
      </section>

      <section className="w-full flex flex-col container-padding">
        <h3 className="h3-all-caps text-primary-color">
          <span className="font-thin opacity-90">/</span>
          <span className="font-bold"> A Snippet</span>
        </h3>
        <div className="relative">
          <img
            src="/image/case_studies/01/E_New-Workflow/r3-A.png"
            alt="Grid 1"
            className="h-full w-full object-cover"
            />
        </div>
        <span className="caption text-sm font-mono ">/ Care Journey Snippet</span>
        
      </section>

      <section className="w-full flex flex-col container-padding-vertical-quad">
        <div className="text-block-lg text-primary-color">
          <span>The result of this workflow was <span className="font-bold">4 animations</span> telling the stories of our patients and providers, accomplished in a third of the time — from <span className="font-bold">600</span> hours to <em className="italic font-bold">200 </em> hours.</span>
        </div>
      </section>

      <section className="case-study-nav-section w-full min-h-[200px] flex items-end">
        {/* Navigation arrows will be inserted here by SlideViewer */}
      </section>
      
    </main>
  );
}

