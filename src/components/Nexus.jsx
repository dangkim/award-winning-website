import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Nexus = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const items = gsap.utils.toArray(".item");

    // Main ScrollTrigger that pins the entire section
    const mainScrollTrigger = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "+=1200", // Approximately enough space for all 3 items with 3 scrolls each
      pin: true,
      pinSpacing: true,
    });

    // Initial setup - only show first item expanded, others collapsed
    gsap.set(items[0], { opacity: 1 });
    gsap.set(items[0].querySelector(".item-content"), { opacity: 1, height: "auto", display: "block" });

    // Hide other items completely
    items.slice(1).forEach(item => {
      gsap.set(item, { opacity: 0 });
      gsap.set(item.querySelector(".item-content"), { opacity: 0, height: 0, display: "none" });
    });

    // Create a timeline for the entire sequence
    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=1200", // Match the main pin duration
        scrub: true,
      },
    });

    // Calculate the segment length for each item's progress
    const segmentLength = 1 / items.length;

    // Add animations for each item to the timeline
    items.forEach((item, index) => {
      const progressBar = item.querySelector(".progress-bar");
      const startProgress = index * segmentLength;
      const endProgress = (index + 1) * segmentLength;

      // Progress bar fill animation
      mainTimeline.fromTo(
        progressBar,
        { height: "0%" },
        {
          height: "100%",
          duration: segmentLength,
          ease: "linear",
        },
        startProgress
      );

      // Show current item (if not the first one)
      if (index > 0) {
        mainTimeline.to(
          item,
          {
            opacity: 1,
            duration: 0.1,
          },
          startProgress
        );

        mainTimeline.to(
          item.querySelector(".item-content"),
          {
            opacity: 1,
            height: "auto",
            display: "block",
            duration: 0.2,
          },
          startProgress
        );
      }

      // Collapse previous item when moving to this item
      if (index > 0) {
        mainTimeline.to(
          items[index - 1].querySelector(".item-content"),
          {
            opacity: 0,
            height: 0,
            display: "none",
            duration: 0.2,
          },
          startProgress
        );

        mainTimeline.to(
          items[index - 1],
          {
            opacity: 0.5,
            duration: 0.1,
          },
          startProgress
        );
      }
    });

    // Handle resize events to ensure responsive behavior
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      // Clean up all ScrollTriggers and event listeners
      ScrollTrigger.getAll().forEach(st => st.kill());
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="nexus-about" className="min-h-screen bg-[#EDFF66] text-black" ref={containerRef}>
      <div className="h-auto flex flex-col justify-start items-start px-4 sm:px-6 md:px-10 py-8 md:py-16 max-w-6xl mx-auto">
        <div className="main-title mb-12 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight">
            The Universe<br />Powered by Words
          </h2>
        </div>

        <div className="flex flex-col gap-6 md:gap-8 w-full">
          <div className="item relative">
            <div className="flex">
              <div className="mr-3 md:mr-4 relative">
                <div className="item-number text-xs md:text-sm font-medium opacity-60">01</div>
                <div className="progress-bar absolute left-0 top-6 md:top-8 w-px h-0 bg-black" style={{ height: '0%' }}></div>
              </div>
              <div className="flex flex-col">
                <h3 className="item-title text-lg sm:text-xl font-bold">Shape the Future of English Learning</h3>
                <div className="item-content mt-2 md:mt-4 max-w-lg">
                  <p className="text-sm sm:text-base">
                    This is not a class — it's a living, growing world built by every smile, every word, and every brave attempt to speak out loud.
                    Together, we make it ours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="item relative opacity-0">
            <div className="flex">
              <div className="mr-3 md:mr-4 relative">
                <div className="item-number text-xs md:text-sm font-medium opacity-60">02</div>
                <div className="progress-bar absolute left-0 top-6 md:top-8 w-px h-0 bg-black" style={{ height: '0%' }}></div>
              </div>
              <div className="flex flex-col">
                <h3 className="item-title text-lg sm:text-xl font-bold">Unlocking Life's Opportunities Through English</h3>
                <div className="item-content mt-2 md:mt-4 max-w-lg opacity-0 h-0 hidden">
                  <p className="text-sm sm:text-base">
                    Every word you learn is a key.
                    A key to friendships, adventures, careers, and dreams you've never imagined yet.
                    Let's open those doors together.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="item relative opacity-0">
            <div className="flex">
              <div className="mr-3 md:mr-4 relative">
                <div className="item-number text-xs md:text-sm font-medium opacity-60">03</div>
                <div className="progress-bar absolute left-0 top-6 md:top-8 w-px h-0 bg-black" style={{ height: '0%' }}></div>
              </div>
              <div className="flex flex-col">
                <h3 className="item-title text-lg sm:text-xl font-bold">Grow Your Skills, Share the Journey</h3>
                <div className="item-content mt-2 md:mt-4 max-w-lg opacity-0 h-0 hidden">
                  <p className="text-sm sm:text-base">
                    Every student's courage, every parent's support, every lesson learned makes our English world richer for everyone. Together, we win.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nexus;