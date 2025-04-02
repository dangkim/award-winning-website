import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Nexus = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      ".item",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.5,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=2000",
          scrub: true,
          pin: true,
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-[#f7f700] text-black">
      <div className="h-screen flex flex-col justify-center items-start pl-10">
        <div className="item mb-8">
          <h2 className="text-4xl font-bold mb-4">The Universe Powered by Zent</h2>
        </div>

        <div className="item mb-8">
          <h2 className="text-xl font-bold">01 Shaping Zentry Collectively</h2>
          <p className="text-base">
            Participate in governance, influence key decisions in the ever-growing Zentry Universe that is limited only by people's imaginations.
          </p>
        </div>

        <div className="item mb-8">
          <h2 className="text-xl font-bold">02 Unlocking Economic Opportunity</h2>
          <p className="text-base">
            Zentry opens doors to economic potential by establishing vast partnerships, investments, and activities within the ecosystem.
          </p>
        </div>

        <div className="item mb-8">
          <h2 className="text-xl font-bold">03 Sharing Value Accrued</h2>
          <p className="text-base">
            ZENT holders thrive as Zentry grows, benefiting from the expansive partnerships, treasury investments, and economic activities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nexus;
