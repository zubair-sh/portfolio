import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section className="my-28" id="contact">
      <header className="px-5 text-2xl font-bold pt-10">
        <h2>Contact Me</h2>
        <p className="text-base font-thin">
          I’d love to hear your thoughts!
        </p>
      </header>
      <div className="md:mx-6 flex flex-col flex-wrap md:flex-row justify-between">
        <div className="md:w-6/12 md:px-0 p-5 my-5">
          <div>
            <p className="font-bold">Zubair Sheikh</p>
            <p className="font-thin">Lahore, Pakistan</p>
            <a
              href="mailto: zubair.sh18@gmail.com"
              className="border-b-2 mt-3 inline-block border-gray-500"
            >
              zubair.sh18@gmail.com
            </a>
          </div>
          <a
            className="border-b-2 mt-3 inline-block border-gray-500"
            href="./Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <div className="flex flex-row flex-wrap mt-7">
            <div className="mr-4">
              <a
                href="https://www.linkedin.com/in/zubair-sh"
                target="_blank"
                rel="noreferrer"
              >
                <span className="mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm">
                  <img
                    src="./images/icons/linkedin.svg"
                    alt=""
                    width="24px"
                    height="24px"
                    className="mr-1"
                  />
                  LinkedIn
                </span>
              </a>
            </div>

            <div className="mr-4">
              <a
                href="https://github.com/zubair-sh"
                target="_blank"
                rel="noreferrer"
              >
                <span className="mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm">
                  <img
                    src="./images/icons/github.svg"
                    alt=""
                    width="24px"
                    height="24px"
                    className="mr-1"
                  />
                  GitHub
                </span>
              </a>
            </div>

            {/* <a
              href="https://codepen.io/Theelipan"
              target="_blank"
              rel="noreferrer"
            >
              <span className="mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm">
                <img
                  src="./images/icons/codepen.svg"
                  alt=""
                  width="24px"
                  height="24px"
                  className="mr-1"
                />
                CodePen
              </span>
            </a> */}
          </div>
        </div>

        <ContactForm />
      </div>
      <div
        className="relative md:bottom-56 mr-auto ml-auto md:mr-auto md:ml-0 max-w-xs md:max-w-sm"
        onClick={() => window.scroll(0, 0)}
      >
        <picture>
          <source
            srcSet="./images/rocket-320.webp 320w, ./images/rocket.webp 768w"
            type="image/webp"
          />
          <source
            srcSet="./images/rocket.png"
            sizes="(min-width: 768px) 50vw, 100vw"
            type="image/png"
          />
          <img
            width="500px"
            height="500px"
            loading="lazy"
            alt="red rocket flying"
          />
        </picture>
      </div>
    </section>
  );
};

export default Contact;
