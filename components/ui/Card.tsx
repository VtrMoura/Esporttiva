import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Card({ children, className, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "bg-zinc-900 border border-zinc-800 rounded-lg p-6 transition-colors hover:border-accent",
        onClick && "cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}
