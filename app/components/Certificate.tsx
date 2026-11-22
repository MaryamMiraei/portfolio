import React from "react";
import TitleSection from "../common/TitleSection";
import Card from "../common/Card";
import Image from "next/image";

const Certificate = () => {
  return (
    <div>
      <TitleSection title="Certificate" description="" />
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-5 mb-8">
        <Card className="overflow-hidden">
          <Image
            alt="Bamdad certificate"
            src={"/front-end certificate - Bamdad.jpg"}
            width={500}
            height={500}
          />
        </Card>
      </div>
    </div>
  );
};

export default Certificate;
