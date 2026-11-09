interface ITitleSectionProps {
  title: string;
  description: string;
}

const TitleSection = ({ title, description }: ITitleSectionProps) => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-3xl md:text-4xl font-bold text-text-first dark:text-text-second">
        {title}
      </h1>
      <div className="mt-4 h-1 w-20 bg-button mx-auto rounded-full"></div>
      <p className="mt-6 text-text-third max-w-2xl mx-auto">{description}</p>
    </div>
  );
};

export default TitleSection;
