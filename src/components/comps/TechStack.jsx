// eslint-disable-next-line no-unused-vars
import React from "react";

import javascriptLogo from "../../assets/tech/js.png";
import reactLogo from "../../assets/tech/react.png";
import viteLogo from "../../assets/tech/vite.png";
import mysqlLogo from "../../assets/tech/mysql.png";
import mongodbLogo from "../../assets/tech/mongodb.png";
import pythonLogo from "../../assets/tech/python.png";
import typescriptLogo from "../../assets/tech/typescript.png";
import awsLogo from "../../assets/tech/aws.png";

const techStacks = [
  {
    id: 1,
    name: "JavaScript",
    logo: javascriptLogo,
  },
  {
    id: 2,
    name: "React",
    logo: reactLogo,
  },
  {
    id: 3,
    name: "Vite",
    logo: viteLogo,
  },
  {
    id: 4,
    name: "MySQL",
    logo: mysqlLogo,
  },
  {
    id: 5,
    name: "MongoDB",
    logo: mongodbLogo,
  },
  {
    id: 6,
    name: "Python",
    logo: pythonLogo,
  },
  {
    id: 7,
    name: "TypeScript",
    logo: typescriptLogo,
  },
  {
    id: 8,
    name: "AWS",
    logo: awsLogo,
  },
];

const TechStack = () => {
  return (
    <section id="techstack" className="py-20 mt-8">
      <div className="container mx-auto text-center mt-18">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-1">
          Tech Stack
        </h2>
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-4 md:grid-cols-3 bg-sky-950 p-4 lg:grid-cols-4">
          {techStacks.map((tech) => (
            <div key={tech.id} className="flex flex-col items-center">
              <img
                src={tech.logo}
                alt={tech.name}
                className="h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 object-contain mb-2"
              />
              <p className="text-white font-semibold text-xs md:text-sm lg:text-base font-mono">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
