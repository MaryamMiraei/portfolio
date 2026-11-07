import React from "react";
import FloatingSphere from "../common/FloatingSphere";
import Button from "../common/Button";

const Home = () => {
  return (
    <div className="px-20 py-10 ">
      <div className="flex gap-6 items-center justify-between">
        <div>
          <h1>Hi, I'm Maryam Miraei</h1>
        </div>
        <FloatingSphere />
      </div>
      <Button type="button">Download Resume</Button>
    </div>
  );
};

export default Home;
