import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID || '',
          process.env.NEXT_PUBLIC_TEMPLATE_ID || '',
          form.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then(
          (result) => {
            form.current?.reset();
          },
          (error) => {
            console.log(error);
          }
        );
    }
  };

  return (
    <div className="bg-gray px-5 py-10 md:py-8 sm:p-8 my-2 md:rounded-lg shadow-lg justify-between w-full md:w-6/12">
      <form
        className="flex flex-col space-y-3 m-auto w-full"
        name="contact"
        ref={form}
        onSubmit={sendEmail}
      >
        <input type="hidden" name="form-name" value="contact" />

        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="user_name"
          id="name"
          className="gradient"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="user_email"
          id="email"
          className="gradient"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          cols={25}
          rows={5}
          className="gradient"
          required
        ></textarea>

        <button
          type="submit"
          value="Send"
          className="border border-gray-500 p-2 rounded-lg w-auto mr-auto shadow-md"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
