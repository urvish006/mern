import { useState } from "react";
import contactImg from "../assets/images/register.png"; // Use a relevant image or reuse the register one

export const Contact = () => {
  const [contact, setContact] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    const fieldMap = {
      contact_fullname: "fullname",
      contact_email: "email",
      contact_phone: "phone",
      contact_message: "message",
    };

    const stateKey = fieldMap[name];

    setContact({
      ...contact,
      [stateKey]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Data Submitted:", contact);
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <main className="w-full max-w-5xl p-6 bg-white rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex justify-center items-center">
            <img
              src={contactImg}
              alt="contact illustration"
              className="w-[400px] h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Contact Form */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-700 mb-6 border-b-4 border-blue-500 pb-2 capitalize">
              contact form
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
              <div>
                <label htmlFor="contact_fullname" className="block text-gray-600 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="contact_fullname"
                  value={contact.fullname}
                  onChange={handleInput}
                  placeholder="Enter your full name"
                  autoComplete="off"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="contact_email" className="block text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="contact_email"
                  value={contact.email}
                  onChange={handleInput}
                  placeholder="Enter your email"
                  autoComplete="off"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="contact_phone" className="block text-gray-600 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="contact_phone"
                  value={contact.phone}
                  onChange={handleInput}
                  placeholder="Enter your phone number"
                  autoComplete="off"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="contact_message" className="block text-gray-600 mb-1">
                  Message
                </label>
                <textarea
                  name="contact_message"
                  value={contact.message}
                  onChange={handleInput}
                  placeholder="Write your message here..."
                  rows="4"
                  autoComplete="off"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Contact;
