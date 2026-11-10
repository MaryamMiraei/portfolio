"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface IHoverEffectProps {
  children: ReactNode;
  className?: string;
}

const HoverEffect = ({ children, className = "" }: IHoverEffectProps) => {
  return (
    <motion.div
      className={`relative rounded-2xl overflow-hidden ${className}`}
      initial="initial"
      whileHover="hover"
    >
      {/* لایه متحرک قرمز */}
      <motion.div
        className="absolute inset-0 z-50 pointer-events-none  overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(120deg, transparent 20%, rgba(115, 6, 6, 0.45) 50%, transparent 80%)",
          backgroundSize: "200% 100%",
        }}
        variants={{
          initial: {
            opacity: 0,
            backgroundPosition: "0% 50%",
          },
          hover: {
            opacity: 1,
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            transition: {
              opacity: {
                duration: 0.3,
              },
              backgroundPosition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            },
          },
        }}
      />

      {/* محتوای کارت */}
      <div className="relative z-20 h-full">{children}</div>
    </motion.div>
  );
};

export default HoverEffect;
