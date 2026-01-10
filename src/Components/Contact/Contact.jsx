import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-gradient-to-b from-gray-950 via-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            Get In <span className="text-indigo-500">Touch</span>
          </h2>
          <p className="mt-5 text-lg text-gray-400">
            Send a secure message and it will reach my inbox instantly.
          </p>
        </motion.div>

        {/* ===== GRID ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* ===== CONTACT INFO ===== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <InfoItem icon={<FaEnvelope />} label="Email" value="aikotom3@email.com" />
            <InfoItem icon={<FaPhoneAlt />} label="Phone" value="+254738552698" />
            <InfoItem icon={<FaMapMarkerAlt />} label="Location" value="Nairobi, Kenya" />
          </motion.div>

          {/* ===== FORM ===== */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0f172a]/90 border border-indigo-500/20 rounded-3xl p-10 shadow-2xl space-y-7"
          >
            <FormInput
              label="Full Name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
            />

            <FormInput
              label="Email Address"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                className="
                  w-full px-5 py-4 rounded-xl
                  bg-gray-900
                  text-white
                  placeholder:text-indigo-400
                  border-2 border-gray-700
                  focus:ring-4 focus:ring-indigo-500
                  focus:border-indigo-500
                  outline-none transition
                "
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="
                w-full flex items-center justify-center gap-3
                py-4 rounded-xl bg-indigo-600
                text-white font-bold tracking-wide
                hover:bg-indigo-700
                transition-all duration-300
                disabled:opacity-60
              "
            >
              {status === "loading" ? "Sending..." : "Send Message"}
              <FaPaperPlane />
            </button>

            {/* STATUS */}
            {status === "success" && (
              <p className="flex items-center gap-2 text-green-400 font-semibold text-sm">
                <FaCheckCircle /> Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="flex items-center gap-2 text-red-400 font-semibold text-sm">
                <FaTimesCircle /> Failed to send message. Try again.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

/* ===== REUSABLE COMPONENTS ===== */

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-5">
    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-indigo-600 text-white text-xl shadow-lg">
      {icon}
    </div>
    <div>
      <p className="font-semibold text-white">{label}</p>
      <p className="text-gray-400">{value}</p>
    </div>
  </div>
);

const FormInput = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-300 mb-2">
      {label}
    </label>
    <input
      {...props}
      required
      className="
        w-full px-5 py-4 rounded-xl
        bg-gray-900
        text-white
        placeholder:text-indigo-400
        border-2 border-gray-700
        focus:ring-4 focus:ring-indigo-500
        focus:border-indigo-500
        outline-none transition
      "
    />
  </div>
);

export default Contact;
