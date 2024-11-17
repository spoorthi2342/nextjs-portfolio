"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Trends Footware",
    description: "Managing creative aspects of brands, maintaining/ negotiating cost & schedules adhering to company standards of creative quality, cost efficiency & timely delivery.",
    image: "/images/projects/1.jpeg",
    tag: ["All", "Brands"],
    // gitUrl: "/",
    previewUrl: "https://www.instagram.com/reel/Cqva2rboYNx/",
  },
  {
    id: 2,
    title: "Trends Footware",
    description: "Spearheaded negotiations to optimize cost structures while maintaining high-quality creative outputs.",
    image: "/images/projects/2.png",
    tag: ["All", "Brands"],
    // gitUrl: "/",
    previewUrl: "https://www.instagram.com/p/DB3qZLbPHT1/?img_index=1",
  },
  {
    id: 3,
    title: "Trends Footware",
    description: "Developed innovative branding strategies that adhered to company standards and exceeded client expectations.",
    image: "/images/projects/3.png",
    tag: ["All", "Brands"],
    // gitUrl: "/",
    previewUrl: "https://www.instagram.com/p/DByjwucyGUp/",
  },
  {
    id: 4,
    title: "Trends Footware",
    description: "Collaborated with cross-functional teams to streamline workflows, ensuring cost-efficient production processes.",
    image: "/images/projects/4.png",
    tag: ["All", "Brands"],
    // gitUrl: "/",
    previewUrl: "https://www.instagram.com/p/DCWsSrjvfl7/?img_index=1",
  },
  {
    id: 5,
    title: "Trends Footware",
    description: "Ensured all creative deliverables met the brand’s vision while adhering to company policies and guidelines.",
    image: "/images/projects/5.png",
    tag: ["All", "Brands"],
    // gitUrl: "/",
    previewUrl: "https://www.instagram.com/p/DB6h7mxTahv/?img_index=1",
  },
  {
    id: 6,
    title: "Trends Footware",
    description: "Monitored the creative execution process to maintain consistency in branding and quality across all campaigns.",
    image: "/images/projects/6.png",
    tag: ["All", "Brands"],
    // gitUrl: "/",
    previewUrl: "https://www.instagram.com/p/DBbXnpeTb_J/?img_index=1",
  },
  {
    id: 7,
    title: "Trends Footware",
    description: "Built strong relationships with stakeholders, fostering transparency and mutual trust throughout the creative process.",
    image: "/images/projects/7.png",
    tag: ["All", "Brands"],
    // gitUrl: "/",
    previewUrl: "https://www.instagram.com/p/C9pQPHePqJi/",
  },
  {
    id: 8,
    title: "Navaratri",
    description: "Conceptualized and executed comprehensive design strategies for visual merchandising (VM) campaigns.",
    image: "/images/projects/mem/8.jpeg",
    tag: ["All", "Visual Merchandiser"],
    // gitUrl: "/",
    previewUrl: "https://drive.google.com/drive/folders/1epqd24hl_UDwypeVnUePGjar-0X0KRMN?usp=sharing",
  },
  {
    id: 9,
    title: "Onam",
    description: "Designed and directed the creation of graphic layouts and illustrations for high-impact branding activities..",
    image: "/images/projects/mem/9.jpeg",
    tag: ["All", "Visual Merchandiser"],
    // gitUrl: "/",
    previewUrl: "https://drive.google.com/drive/folders/1epqd24hl_UDwypeVnUePGjar-0X0KRMN?usp=sharing",
  },
  {
    id: 10,
    title: "Window",
    description: "Led the end-to-end design process for VM projects, ensuring alignment with brand identity.",
    image: "/images/projects/mem/10.jpeg",
    tag: ["All", "Visual Merchandiser"],
    // gitUrl: "/",
    previewUrl: "https://drive.google.com/drive/folders/1epqd24hl_UDwypeVnUePGjar-0X0KRMN?usp=sharing",
  },
  {
    id: 11,
    title: "Focal Point",
    description: "Led the end-to-end design process for VM projects, ensuring alignment with brand identity.",
    image: "/images/projects/mem/11.jpeg",
    tag: ["All", "Visual Merchandiser"],
    // gitUrl: "/",
    previewUrl: "https://drive.google.com/drive/folders/1epqd24hl_UDwypeVnUePGjar-0X0KRMN?usp=sharing",
  },
  {
    id: 12,
    title: "Festival",
    description: "Developed innovative graphic concepts to enhance product displays and customer engagement.",
    image: "/images/projects/mem/12.jpeg",
    tag: ["All", "Visual Merchandiser"],
    // gitUrl: "/",
    previewUrl: "https://drive.google.com/drive/folders/1epqd24hl_UDwypeVnUePGjar-0X0KRMN?usp=sharing",
  },
  {
    id: 13,
    title: "Valentines Day",
    description: "Oversaw the artistic direction for VM activities, ensuring a cohesive and appealing visual narrative.",
    image: "/images/projects/mem/13.jpeg",
    tag: ["All", "Visual Merchandiser"],
    // gitUrl: "/",
    previewUrl: "https://drive.google.com/drive/folders/1epqd24hl_UDwypeVnUePGjar-0X0KRMN?usp=sharing",
  },
  {
    id: 14,
    title: "Holi",
    description: "Produced original illustrations and graphics tailored to specific VM needs and branding guidelines.",
    image: "/images/projects/mem/14.jpeg",
    tag: ["All", "Visual Merchandiser"],
    // gitUrl: "/",
    previewUrl: "https://drive.google.com/drive/folders/1epqd24hl_UDwypeVnUePGjar-0X0KRMN?usp=sharing",
  },
  {
    id: 15,
    title: "FootWare",
    description: "Collaborated with marketing and VM teams to translate ideas into compelling visual designs.",
    image: "/images/projects/mem/15.jpeg",
    tag: ["All", "Visual Merchandiser"],
    // gitUrl: "/",
    previewUrl: "https://drive.google.com/drive/folders/1epqd24hl_UDwypeVnUePGjar-0X0KRMN?usp=sharing",
  },
  {
    id: 16,
    title: "Christmas",
    description: "Researched emerging design trends to keep VM activities visually fresh and relevant.",
    image: "/images/projects/mem/16.jpeg",
    tag: ["All", "Visual Merchandiser"],
    // gitUrl: "/",
    previewUrl: "https://drive.google.com/drive/folders/1epqd24hl_UDwypeVnUePGjar-0X0KRMN?usp=sharing",
  },


];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Brands"
          isSelected={tag === "Brands"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Visual Merchandiser"
          isSelected={tag === "Visual Merchandiser"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              // gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
