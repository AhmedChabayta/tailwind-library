import React from "react";
import { motion } from "framer-motion";

const WobblySVGWrapper = ({ children, ...rest }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      {...rest}
      style={{ originX: "25px", originY: "25px" }}
      animate={{ rotate: [0, -15, 15, -15, 15, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.svg>
  );
};

export default WobblySVGWrapper;
