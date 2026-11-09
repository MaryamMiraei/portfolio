import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "third";
  fullWidth?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  type,
  ...props
}: ButtonProps) => {
  const variants = {
    primary: "text-text-second bg-button px-3 py-2 rounded-sm",
    secondary:
      "text-text-first bg-card-first border border-border-first dark:text-text-second dark:bg-card-second dark:border-border-second rounded-sm px-3 py-2",
    third:
      "border border-border-second bg-card-first dark:bg-card-second rounded-full hover:ring hover:ring-text-fourth hover:cursor-pointer hover:shadow-text-fourth transition-all duration-300 shadow-custom-first dark:shadow-custom-second hover:text-text-fourth p-3",
  };

  return (
    <button
      type={type}
      className={`
        disabled:cursor-not-allowed disabled:opacity-50 text-sm tracking-tight font-medium cursor-pointer flex items-center gap-2 w-full sm:w-auto justify-center hover:scale-105
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
