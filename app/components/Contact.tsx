import React from 'react'
import TitleSection from '../common/TitleSection';
import Card from '../common/Card';
import { Mail } from 'lucide-react';
import { GrGithub } from 'react-icons/gr';

const contactItems = [
  {
    id: 1,
    icon: <Mail />,
    title: "Email",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=m.miraei94@gmail.com",
  },
  {
    id: 2,
    icon: <GrGithub />,
    title: "GitHub",
    link: "https://github.com/MaryamMiraei",
  },
];

const Contact = () => {
  return (
    <div>
      <TitleSection title="Contact" description="" />
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 w-80 gap-4">
          {contactItems.map((item) => (
            <a href={item.link} key={item.id} rel="noopener noreferrer" target='_blank'>
              <Card className="flex flex-col items-center justify-center p-5">
                <div className="p-4 border border-border-second rounded-full">
                  {item.icon}
                </div>
                <div>{item.title}</div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact