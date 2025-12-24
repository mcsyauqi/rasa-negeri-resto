"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center" | "right";
  className?: string;
  children?: ReactNode;
  light?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  badge,
  align = "center",
  className,
  children,
  light = false,
}: SectionTitleProps) {
  const alignments = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("mb-12", alignments[align], className)}
    >
      {badge && (
        <span
          className={cn(
            "inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4",
            light
              ? "bg-white/20 text-white"
              : "bg-[#8B4513]/10 text-[#8B4513]"
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold font-[var(--font-heading)] mb-4",
          light ? "text-white" : "text-[#2C1810]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-lg max-w-2xl",
            align === "center" && "mx-auto",
            light ? "text-white/80" : "text-[#3D2314]/70"
          )}
        >
          {subtitle}
        </p>
      )}
      {children}
    </motion.div>
  );
}
