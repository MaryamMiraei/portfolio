import TitleSection from "../common/TitleSection";
import Card from "../common/Card";
import { Mail } from "lucide-react";
import { GrGithub } from "react-icons/gr";
import HoverEffect from "../common/HoverEffect";

const contactItems = [
  {
    id: 1,
    icon: <Mail size={30} />,
    title: "Email",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=m.miraei94@gmail.com",
  },
  {
    id: 2,
    icon: <GrGithub size={30} />,
    title: "GitHub",
    link: "https://github.com/MaryamMiraei",
  },
];

const Contact = () => {
  return (
    <div>
      <TitleSection title="Contact" description="" />
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 w-80  gap-4">
          {contactItems.map((item) => (
            <a
              href={item.link}
              key={item.id}
              rel="noopener noreferrer"
              target="_blank"
            >
                <HoverEffect className="">
              <Card className="flex flex-col items-center justify-center p-5">
                  <div className="p-4 border border-border-second rounded-full mb-2">
                    {item.icon}
                  </div>
                  <div>{item.title}</div>
              </Card>
                </HoverEffect>
            </a>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
