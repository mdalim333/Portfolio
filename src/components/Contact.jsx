import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:ususmanakhtar@gmail.com?subject=New message from ${encodeURIComponent(
      form.name
    )}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-indigo-900 via-gray-800 to-gray-700 text-white">
      <h2 className="text-4xl font-semibold text-center mb-10 text-teal-400">Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-6 bg-gray-800 shadow-lg p-8 rounded-xl"
      >
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full bg-gray-700 text-white border border-gray-600 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            onChange={handleChange}
            value={form.name}
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full bg-gray-700 text-white border border-gray-600 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            onChange={handleChange}
            value={form.email}
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full bg-gray-700 text-white border border-gray-600 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            onChange={handleChange}
            value={form.message}
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
