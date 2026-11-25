const variantsTitle = {
  primary: "text-xl",
  secondary: "text-base",
};

const variantsDescription = {
  primary: "text-base",
  secondary: "text-sm",
};

type Variant = "primary" | "secondary";

interface ICardProps {
  title?: string;
  subtitle?: string;
  description?: string | string[];
  titleVariant?: Variant;
  descriptionVariants?: Variant;
  className?: string;
}

export const TitleDescription = ({
  title,
  subtitle,
  description,
  className,
  titleVariant = "secondary",
  descriptionVariants = "secondary",
}: ICardProps) => {
  return (
    <div className={className}>
      {title && (
        <h2
          className={`text-text-first dark:text-text-second mb-2 font-bold ${variantsTitle[titleVariant]}`}
        >
          {title}
        </h2>
      )}

      {subtitle && <p className="text-text-third text-sm mb-3">{subtitle}</p>}

      {description && (
        <div
          className={`text-text-third mb-2 ${variantsDescription[descriptionVariants]}`}
        >
          {Array.isArray(description) ? (
            <div className="space-y-4">
              {description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          ) : (
            <p>{description}</p>
          )}
        </div>
      )}
    </div>
  );
};
