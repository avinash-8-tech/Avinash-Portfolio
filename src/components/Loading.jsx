import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Loading = ({ onComplete }) => {
  const overlayRef = useRef(null);
  const lettersRef = useRef([]);
  const loopTl = useRef(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  const name = "Avinash".split("");

  const addToRefs = (el) => {
    if (el && !lettersRef.current.includes(el)) {
      lettersRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.set(lettersRef.current, {
      opacity: 0,
      y: () => gsap.utils.random(60, 100),
      x: () => gsap.utils.random(-30, 30),
      rotate: () => gsap.utils.random(-15, 15),
      scale: 0.8,
    });

    loopTl.current = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    loopTl.current
      .to(lettersRef.current, {
        opacity: 1,
        y: 0,
        x: 0,
        rotate: 0,
        scale: 1,
        duration: 1.2,
        stagger: {
          amount: 0.6,
          from: "random",
          grid: "auto",
        },
        ease: "elastic.out(1, 0.5)",
      })
      .to(
        lettersRef.current,
        {
          y: -80,
          opacity: 0,
          rotate: () => gsap.utils.random(-10, 10),
          scale: 0.9,
          duration: 0.8,
          stagger: 0.05,
          ease: "power3.in",
        },
        "+=0.3"
      );

    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
      loopTl.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (animationComplete) {
      loopTl.current?.pause();

      const exitTl = gsap.timeline({
        onComplete: () => {
          gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            onComplete: onComplete,
          });
        },
      });

      exitTl
        .to(lettersRef.current, {
          y: -100,
          opacity: 0,
          rotate: () => gsap.utils.random(-20, 20),
          scale: 0,
          duration: 1,
          stagger: {
            amount: 0.8,
            from: "center",
          },
          ease: "back.in(1.2)",
        })
        .to(
          overlayRef.current,
          {
            backgroundColor: "#ffffff",
            duration: 0.8,
          },
          "-=0.5"
        );
    }
  }, [animationComplete, onComplete]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#fafafa]"
    >
      <div className="flex">
        {name.map((letter, index) => (
          <span
            key={index}
            ref={addToRefs}
            className="inline-block text-6xl font-bold tracking-tighter md:text-7xl lg:text-8xl"
            style={{
              height: "1.2em",
              lineHeight: "1.2em",
              textShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loading;