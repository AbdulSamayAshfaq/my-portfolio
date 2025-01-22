import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/"
          title="General E-coomerce"
          description="this my general E-commerce website "
        />
        <ProjectCard
          src="/"
          title="Interactive Resume"
          description="Passionate and results-driven professional skilled in [key skill/field], with a proven track record of delivering innovative solutions and exceeding expectations."
        />
        <ProjectCard
          src="/"
          title="Resume builder Website"
          description="The editable resume project simplifies creating and updating resumes with customizable templates, real-time editing, and easy exporting to formats like PDF. It’s user-friendly, responsive, and ensures a professional design for all users."
        />
      </div>
    </div>
  );
};

export default Projects;
