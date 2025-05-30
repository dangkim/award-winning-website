import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(
        containerRef.current.querySelectorAll(".animated-word"),
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          ease: "power2.inOut",
          stagger: 0.02,
        },
        0
      );
    }, containerRef);

    return () => ctx.revert(); // Clean up on unmount
  }, [title]); // Re-run the effect when the title changes

  const decodeHTML = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  const lines = decodeHTML(title).split("<br />").map((line) => line.trim());

  return (
    <div ref={containerRef} className={clsx("animated-title", containerClass)}>
      {lines.map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-7"
        >
          {line.split(/(<b>.*?<\/b>)/).map((segment, idx) => {
            if (segment.startsWith("<b>")) {
              // Handle bold text
              return (
                <span
                  key={idx}
                  className="animated-word inline-block"
                  dangerouslySetInnerHTML={{ __html: segment }}
                />
              );
            }
            // Handle regular text - split by spaces while preserving whole words
            return segment
              .trim()
              .split(/\s+/)
              .filter(Boolean)
              .map((word, wordIdx) => (
                <span key={`${idx}-${wordIdx}`} className="animated-word inline-block">
                  {word}
                </span>
              ));
          })}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
