import { Mail, Phone } from "lucide-react";
import GithubIcon from "@/assets/github.svg";
import LinkedinIcon from "@/assets/linkedin.svg";
import { motion } from "framer-motion";

const contactVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ContactSection = () => {
  const contacts = [
    {
      title: "GitHub",
      icon: (
        <img
          src={GithubIcon}
          alt="GitHub"
          className="w-8 h-8 text-gray-300 group-hover:text-white"
        />
      ),
      onClick: () => window.open("https://github.com/Noyal080", "_blank"),
      extra: "Noyal080",
    },
    {
      title: "Email",
      icon: <Mail className="w-8 h-8 text-gray-300 group-hover:text-white" />,
      extra: "noyal12.nakarmi@gmail.com",
      onClick: () =>
        (window.location.href = "mailto:noyal12.nakarmi@gmail.com"),
    },
    {
      title: "Phone",
      icon: <Phone className="w-8 h-8 text-gray-300 group-hover:text-white" />,
      onClick: () => (window.location.href = "tel:+9779862425308"),
      extra: "+977 9862425308",
    },
    {
      title: "LinkedIn",
      icon: (
        <img
          src={LinkedinIcon}
          alt="LinkedIn"
          className="w-8 h-8 text-gray-300 group-hover:text-white"
        />
      ),
      onClick: () =>
        window.open(
          "https://www.linkedin.com/in/noyal-nakarmi-31057b183/",
          "_blank"
        ),
      extra: "Noyal Nakarmi",
    },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-20 px-6 py-24 bg-gray-900 text-white bg-gradient-to-br from-gray-900 to-gray-800"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12"
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {contacts.map(({ title, icon, onClick, extra }, i) => (
            <motion.div
              key={title}
              onClick={onClick}
              custom={i}
              variants={contactVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group cursor-pointer bg-gray-800 hover:bg-gray-700 transition-all duration-300 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 hover:shadow-blue-500/20 hover:ring-2 hover:ring-blue-500/30"
            >
              {icon}
              <p className="mt-4 text-lg font-medium text-gray-200 group-hover:text-white">
                {title}
              </p>
              {extra && (
                <p className="text-sm mt-1 text-gray-400 group-hover:text-gray-200">
                  {extra}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;