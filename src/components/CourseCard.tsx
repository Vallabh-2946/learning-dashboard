"use client";

import { motion } from "framer-motion";
import {
  Code,
  Rocket,
  Database,
  Palette,
} from "lucide-react";

const icons = {
  Code,
  Rocket,
  Database,
  Palette,
};

type Props = {
  title: string;
  progress: number;
  icon_name: keyof typeof icons;
};

export default function CourseCard({
  title,
  progress,
  icon_name,
}: Props) {
  const Icon = icons[icon_name];

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5"
    >
      <Icon className="mb-4 h-8 w-8 text-violet-400" />

      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      <p className="mt-3 text-zinc-400">
        Progress {progress}%
      </p>

      <div className="mt-4 h-3 w-full rounded-full bg-zinc-800">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1 }}
          className="h-3 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
        />
      </div>
    </motion.div>
  );
}