import React from 'react';
import Image from 'next/image';

const skills = [
  {
    label: 'React JS',
    src: '/images/skills/react.svg',
    width: 64,
    height: 64,
  },
  {
    label: 'Node JS',
    src: '/images/skills/nodejs.svg',
    width: 64,
    height: 64,
  },
  {
    label: 'Next.js',
    src: '/images/skills/next.svg',
    width: 64,
    height: 64,
  },
  {
    label: 'JavaScript',
    src: '/images/skills/javascript.svg',
    width: 64,
    height: 64,
  },
  {
    label: 'TypeScript',
    src: '/images/skills/typescript.svg',
    width: 64,
    height: 64,
  },
  {
    label: 'MongoDB',
    src: '/images/skills/mongodb.svg',
    width: 64,
    height: 64,
  },
];

const Skill = () => {
  return (
    <section className="my-28 px-5">
      <header className="text-2xl font-bold pt-10">
        <h2>Skills & Tools</h2>
      </header>
      <div className="my-7 grid gap-5 grid-cols-3 md:grid-cols-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
            tabIndex={0}
            role="img"
            aria-label={skill.label}
          >
            <Image
              src={skill.src}
              alt={skill.label}
              loading="lazy"
              width={skill.width}
              height={skill.height}
              className="w-16 mb-1"
            />
            {skill.label}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
