import { motion } from "framer-motion";

export const NNLogo = () => (
  <motion.svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >

    <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M12 12V28L18 18V28"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 12V28L28 18V28"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

  </motion.svg>
);
