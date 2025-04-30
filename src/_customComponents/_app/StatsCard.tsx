import { motion } from "framer-motion";
import { variants } from "./animations";

interface StatsCardProps {
  icon: React.ComponentType<{ className?: string }>;
  value: string | number;
  label: string;
  description: string;
}

export function StatsCard({
  icon: Icon,
  value,
  label,
  description,
}: StatsCardProps) {
  return (
    <motion.div
      variants={variants.card}
      whileHover="hover"
      className="group relative focus-within:ring-2 focus-within:ring-primary/50 rounded-2xl">
      {/* Card Glow Effect */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent 
          rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl"
        aria-hidden="true"
      />

      {/* Card Content */}
      <div
        className="relative h-full p-6 md:p-8 rounded-2xl 
        border border-primary/10 bg-black/40 backdrop-blur-sm
        transition-all duration-300 group-hover:border-primary/30
        group-hover:bg-black/50 group-hover:shadow-lg group-hover:shadow-primary/10">
        <div className="flex items-center gap-4 mb-4">
          <Icon className="w-8 h-8 text-primary/80" aria-hidden="true" />
          <span
            className="text-3xl md:text-4xl lg:text-5xl font-bold 
            bg-gradient-to-r from-primary to-primary/70 
            bg-clip-text text-transparent">
            {value}
          </span>
        </div>
        <h3 className="text-sm font-medium text-primary/80">{label}</h3>
        <p className="text-xs text-muted-foreground/80 mt-2">{description}</p>
      </div>
    </motion.div>
  );
}
