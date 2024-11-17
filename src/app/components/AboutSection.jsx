"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Canva</li>
        <li>Adobe Xpress</li>
        <li>Adobe Firefly</li>
        <li>Illustrator</li>
        <li>Corel Draw</li>
        <li>InDesign</li>
        <li>QuarkXPress</li>
        <li>Freehand-10</li>
        <li>Adobe In-design</li>
        <li>Flash</li>
        <li>Photoshop</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of Fine Arts from Chitra Kala Mandir (CKM), Kala Shale, College of Fine Arts in 2006</li>
      </ul>
    ),
  },
  {
    title: "Awards",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>“Chakrapani Kalaprashasti-06” painting contest award at Mangalore.</li>
        <li>“Agnipath All India Art Competition-06” Gold medal award at New Delhi.</li>
        <li>State-level postcard art competition award from Shanthivana Trust, Dharmasthala.</li>
      </ul>
    ),
  },
  {
    title: "Exhibitions",
    id: "exhibitions",
    content: (
      <ul className="list-disc pl-2">
        <li>AIFACS [All India Fine Arts & Craft Society] New Delhi</li>
        <li>South Zone Art Contest at Nagpur</li>
        <li>Karnataka K.L.A., Bangalore</li>
        <li>10th National Art Festival by Kalavarthnyas, Ujjain</li>
        <li>“AGNIPATH” All India Art Exhibition, Mumbai</li>
        <li>Tumkur 69th Akhila Bharatha Kannada Sahithya Sammelana</li>
        <li>Vibhuti Art Gallery, Udupi</li>
        <li>Shashivarna Art Exhibition</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image 
          src="/images/about-image.png" 
          width={500} 
          height={500} 
          alt="About section illustration" 
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m Santhosh Achary, a Visual Merchandiser and Senior Graphic Designer with over 17 years of experience in the field. 
            I specialize in graphic designing, visual merchandising, retail design, and marketing. 
            I&apos;ve worked with leading organizations like Reliance Retail Ltd. and Manipal Advertising Services, where I handled everything 
            from creating impactful promotional campaigns to designing retail concepts and store setups. 
            I&apos;m skilled in tools like Adobe Suite, Corel Draw, and Photoshop, which I use to develop creative and effective materials. 
            I take pride in blending creativity with strategic planning, whether it&apos;s designing marketing campaigns, creating unique store visuals, 
            or managing branding initiatives. It&apos;s all about delivering results that make an impact.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
