import React from "react";
import { motion } from "framer-motion";

const Muñequito = ({ isVisible }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0 }}
    transition={{ duration: 1 }}
    style={{
      position: "fixed",
      bottom: 20,
      right: 20,
    }}
  >
    🐭
  </motion.div>
);

export default Muñequito;
