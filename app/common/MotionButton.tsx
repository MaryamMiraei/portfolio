"use client";

import { motion, useMotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface IMotionButton {
  title: string;
  icon: React.ReactNode;
  link: string;
}

const MotionButton = ({ title, icon, link }: IMotionButton) => {
  const y = useMotionValue(0);

  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const elapsedTime = useRef(0);
  const previousTime = useRef<number | null>(null);
  const frameId = useRef<number | null>(null);

  // فعال شدن انیمیشن بعد از Mount شدن کامپوننت
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || isHovered) {
      if (frameId.current !== null) {
        cancelAnimationFrame(frameId.current);
        frameId.current = null;
      }

      previousTime.current = null;
      return;
    }

    const duration = 2000;

    const animate = (time: number) => {
      if (previousTime.current !== null) {
        elapsedTime.current += time - previousTime.current;
      }

      previousTime.current = time;

      const progress = (elapsedTime.current % duration) / duration;

      const position = (-10 * (1 - Math.cos(progress * Math.PI * 2))) / 2;

      y.set(position);

      frameId.current = requestAnimationFrame(animate);
    };

    frameId.current = requestAnimationFrame(animate);

    return () => {
      if (frameId.current !== null) {
        cancelAnimationFrame(frameId.current);
        frameId.current = null;
      }

      previousTime.current = null;
    };
  }, [isMounted, isHovered, y]);

  return (
    <motion.div
      style={{ y }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="flex justify-center items-center"
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 px-5 py-2 border border-border-second bg-card-first dark:bg-card-second rounded-full hover:ring hover:ring-text-fourth hover:cursor-pointer hover:shadow-text-fourth transition-all duration-300 shadow-custom-first dark:shadow-custom-second hover:text-text-fourth"
      >
        <span>{title}</span>
        {icon}
      </a>
    </motion.div>
  );
};

export default MotionButton;
