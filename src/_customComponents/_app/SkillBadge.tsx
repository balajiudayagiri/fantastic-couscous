import { motion } from "framer-motion";
import { variants } from "./animations";

interface SkillBadgeProps {
  skill: {
    name: string;
    icon?: React.ComponentType<{ className?: string }>;
  };
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <motion.div
      variants={variants.card}
      whileHover="hover"
      tabIndex={0}
      role="button"
      className="px-4 py-2 rounded-full text-sm font-medium
        bg-gradient-to-r from-primary/5 to-transparent
        border border-primary/10 hover:border-primary/30
        backdrop-blur-sm transition-all duration-300
        hover:shadow-lg hover:shadow-primary/10
        focus:outline-none focus:ring-2 focus:ring-primary/50
        flex items-center gap-2">
      {skill.icon && (
        <skill.icon className="w-4 h-4 text-primary/60" aria-hidden="true" />
      )}
      <span>{skill.name}</span>
    </motion.div>
  );
}
