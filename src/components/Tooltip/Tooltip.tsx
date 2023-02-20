import { useState } from "react";
import { motion, MotionStyle, useMotionValue } from "framer-motion";

interface TooltipProps {
  text?: string;
  children: React.ReactNode;
}

const Tooltip = ({ text, children }: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent) => {
    setIsOpen(true);
    x.set(event.clientX + 10);
    y.set(event.clientY + 10);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const tooltipStyle: MotionStyle = {
    position: "absolute",
    zIndex: 9999,
    left: x,
    top: y,
  };

  return (
    <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {children}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={tooltipStyle}
          className="pointer-events-none rounded-md bg-gray-400 p-2 text-sm font-medium text-gray-900 shadow-lg dark:bg-gray-500"
        >
          <div>{text}</div>
          <svg
            className="absolute left-0 top-full h-2 w-full text-gray-400 dark:text-gray-500"
            x="0px"
            y="0px"
            viewBox="0 0 255 255"
            xmlSpace="preserve"
          >
            <polygon points="0,0 127.5,127.5 255,0" />
          </svg>
        </motion.div>
      )}
    </div>
  );
};
export default Tooltip;
