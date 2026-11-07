import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" ;
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
    primary: "text-text-second bg-button",
    secondary:
      "text-text-first bg-card-first border border-border-first dark:text-text-second dark:bg-card-second dark:border-border-second",
  };

  return (
    <button
      type={type}
      className={`
        disabled:cursor-not-allowed disabled:opacity-50 rounded-sm text-sm tracking-tight px-3 py-2 font-medium drop-shadow-xl cursor-pointer flex items-center gap-2 w-full sm:w-auto justify-center hover:opacity-80
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
