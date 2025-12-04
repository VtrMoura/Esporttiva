import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "px-6 py-3 rounded-lg font-medium transition-colors",
        {
          "bg-accent text-black hover:bg-accent/90": variant === "primary",
          "bg-white text-black hover:bg-gray-200": variant === "secondary",
          "border border-accent text-accent hover:bg-accent hover:text-black":
            variant === "outline",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
