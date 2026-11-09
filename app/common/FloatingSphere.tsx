"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useAnimationFrame,
  color,
} from "motion/react";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFlutter,
  SiSwift,
  SiGo,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiFirebase,
  SiRedis,
  SiKubernetes,
  SiDocker,
  SiPython,
  SiGit,
  SiMongodb,
} from "react-icons/si";

const icons = [
  { Icon: SiReact, color: "#61DAFB" },
  { Icon: SiNextdotjs, color: "#000000" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: SiJavascript, color: "#F7DF1E" },
  { Icon: SiTailwindcss, color: "#06B6D4" },
  // { Icon: SiFlutter, color: "#02569B" },
  // { Icon: SiSwift, color: "#F05138" },
  // { Icon: SiGo, color: "#00ADD8" },
  // { Icon: SiNodedotjs, color: "#5FA04E" },
  // { Icon: SiExpress, color: "#FFFFFF" },
  // { Icon: SiPostgresql, color: "#4169E1" },
  // { Icon: SiFirebase, color: "#DD2C00" },
  // { Icon: SiRedis, color: "#FF4438" },
  // { Icon: SiKubernetes, color: "#326CE5" },
  // { Icon: SiDocker, color: "#2496ED" },
  // { Icon: SiPython, color: "#3776AB" },
  { Icon: SiGit, color: "#F05032" },
  // { Icon: SiMongodb, color: "#47A248" },
];

const FloatingSphere = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const autoRotation = useMotionValue(0);

  const rotationRef = useRef(0);

  // نرم کردن حرکت موس
  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  // چرخش معکوس برای ثابت ماندن جهت آیکون‌ها
  const inverseAutoRotation = useTransform(autoRotation, (value) => -value);

  const inverseMouseX = useTransform(smoothX, (value) => -value);

  const inverseMouseY = useTransform(smoothY, (value) => -value);

  // چرخش دائمی کره
  useAnimationFrame((_, delta) => {
    rotationRef.current += delta * 0.015;
    autoRotation.set(rotationRef.current);
  });

  // محاسبه مختصات سه‌بعدی آیکون‌ها
  const positions = useMemo(
    () =>
      icons.map((_, index) => {
        const count = icons.length;

        const phi = Math.acos(1 - (2 * (index + 0.5)) / count);
        const theta = Math.PI * (1 + Math.sqrt(5)) * index;

        const radius = 100;

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        return { x, y, z };
      }),
    [],
  );

  // دریافت موقعیت موس
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    mouseY.set((0.5 - y) * 35);
    mouseX.set((x - 0.5) * 35);
  };

  // بازگشت کره به حالت اولیه
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };
  if (!isMounted) {
    return (
      <div className="relative flex size-[300px] items-center justify-center overflow-hidden">
        <div className="h-[100px] w-[100px]" />
      </div>
    );
  }

  return (
    <div
      className="relative flex size-[300px] items-center justify-center overflow-hidden"
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative h-[100px] w-[100px]"
        style={{
          transformStyle: "preserve-3d",
          rotateX: smoothY,
          rotateY: autoRotation,
        }}
      >
        {icons.map(({ Icon, color }, index) => {
          const position = positions[index];

          return (
            <motion.div
              key={index}
              className="absolute left-1/2 top-1/2"
              style={{
                x: position.x,
                y: position.y,
                z: position.z,
                translateX: "-50%",
                translateY: "-50%",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              <motion.div
                style={{
                  rotateY: inverseAutoRotation,
                  rotateX: inverseMouseY,
                  rotateZ: inverseMouseX,
                }}
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 2 + (index % 4) * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Icon
                  size={22}
                  color={color}
                  className="drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                />
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default FloatingSphere;
