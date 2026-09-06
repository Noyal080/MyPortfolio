import { useState } from "react";
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "noyal12.nakarmi@gmail.com",
      href: "mailto:noyal12.nakarmi@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+977 9862425308",
      href: "tel:+9779862425308",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "@Noyal080",
      href: "https://github.com/Noyal080",
      target: "_blank" as const,
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Noyal Nakarmi",
      href: "https://www.linkedin.com/in/noyal-nakarmi-31057b183/",
      target: "_blank" as const,
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Kathmandu, Nepal",
      href: "#",
    },
  ];

  return (
    <section className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm font-medium text-[#999] dark:text-[#666] uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111] dark:text-[#FAFAFA] tracking-tight mb-4">
            Let's Work Together
          </h1>
          <p className="text-base md:text-lg text-[#666] dark:text-[#888] max-w-2xl">
            Have a project in mind or just want to say hello? I'd love to hear
            from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Form */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-[#111] dark:text-[#FAFAFA] mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#666] dark:text-[#888] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-0 py-3 border-b border-[#E5E5E5] dark:border-[#333] bg-transparent text-[#111] dark:text-[#FAFAFA] placeholder-[#CCC] dark:placeholder-[#444] focus:outline-none focus:border-[#2563EB] dark:focus:border-[#60A5FA] transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#666] dark:text-[#888] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-0 py-3 border-b border-[#E5E5E5] dark:border-[#333] bg-transparent text-[#111] dark:text-[#FAFAFA] placeholder-[#CCC] dark:placeholder-[#444] focus:outline-none focus:border-[#2563EB] dark:focus:border-[#60A5FA] transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#666] dark:text-[#888] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={4}
                  className="w-full px-0 py-3 border-b border-[#E5E5E5] dark:border-[#333] bg-transparent text-[#111] dark:text-[#FAFAFA] placeholder-[#CCC] dark:placeholder-[#444] focus:outline-none focus:border-[#2563EB] dark:focus:border-[#60A5FA] transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                className="px-8 py-3 bg-[#111] dark:bg-[#FAFAFA] text-white dark:text-[#111] text-sm font-medium rounded-full hover:bg-[#2563EB] dark:hover:bg-[#333] transition-colors disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={sent}
              >
                {sent ? "Message Sent! ✓" : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-[#111] dark:text-[#FAFAFA] mb-6">
              Contact Information
            </h3>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.target}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#F9F9F9] dark:hover:bg-[#111] transition-colors group"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F5F5F5] dark:bg-[#1A1A1A] text-[#666] dark:text-[#888] group-hover:bg-[#2563EB] dark:group-hover:bg-[#60A5FA] group-hover:text-white dark:group-hover:text-[#111] transition-colors flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-[#999] dark:text-[#555] uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="text-sm font-medium text-[#111] dark:text-[#FAFAFA]">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Response time */}
            <div className="mt-8 p-4 rounded-xl bg-[#F5F5F5] dark:bg-[#1A1A1A]">
              <p className="text-sm text-[#666] dark:text-[#888]">
                ⚡ Typically responds within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
