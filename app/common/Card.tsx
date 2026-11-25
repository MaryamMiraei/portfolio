import type { ReactNode } from "react";

interface ICardProps {
  className?: string;
  children: ReactNode;
}

const Card = ({ children, className = "" }: ICardProps) => {
  return (
    <div
      className={`rounded-2xl border border-border-first dark:border-border-second
      bg-card-first dark:bg-card-second
      hover:ring hover:ring-text-fourth
      active:ring active:ring-text-fourth
      hover:shadow-text-fourth active:shadow-text-fourth
      hover:cursor-pointer
      transition-all duration-300
      shadow-custom-first dark:shadow-custom-second
      whitespace-pre-line ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
