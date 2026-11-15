"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

const GithubContributions = () => {
  const { resolvedTheme } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <section className="w-full overflow-x-auto flex justify-center items-center py-8 px-8">
      <GitHubCalendar
        className=""
        username="MaryamMiraei"
        colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
        blockSize={12}
        blockMargin={4}
        fontSize={14}
        theme={{
          light: ["#F0F0F0", "#F3C7C7", "#E58B8B", "#C94A4A", "#730606"],
          dark: ["#191919", "#3D1717", "#6B2020", "#A52D2D", "#F05252"],
        }}
      />
    </section>
  );
};

export default GithubContributions;
