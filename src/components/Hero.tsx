import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animationData from './astronaout.json';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: containerRef.current!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
    animation.setSpeed(0.5);

    // Cleanup animation on unmount
    return () => animation.destroy();
  }, []);

  return (
    <section className="my-16 px-5 md:my-32 flex flex-col flex-wrap space-y-16 md:space-y-0 patterns">
      <div className="ml-auto w-72 md:w-96 lg:w-2/5">
        <div className="animation-container" ref={containerRef}></div>
      </div>
      <div className="max-w-lg mb-auto space-y-5">
        <h1 className="text-5xl font-bold md:text-7xl">
          Hello. I’m Zubair Sheikh
        </h1>
        <p className="tracking-wide leading-relaxed">
          I am a highly competent and proficient professional with a
          relentless drive for excellence across various domains. With
          a deep-rooted passion for continuous learning, I possess
          up-to-date knowledge and expertise in a wide range of
          fields. As a talented team player, I bring exceptional
          engineering abilities and a collaborative mindset to every
          project. I am recognised for my unwavering dedication,
          outstanding analytical skills, and a knack for solving
          complex problems with ease.
          <br />
          <br />
          Specialties: Solution Architecture, Software Architecture &
          Design, Program / Project Management, Security Specialist,
          MDM Specialist BI Analyst, ERP Software Architect, EAI, EDI,
          Enterprise Integration, Large Scale Implementations/Rollouts
        </p>
      </div>
    </section>
  );
};

export default Hero;
