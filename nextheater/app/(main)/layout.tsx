import React from "react";
import NavBar from "@/components/navbar";

const ProjectsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="m-10">
      <NavBar></NavBar>
      <main>{children}</main>
    </div>
  );
};

export default ProjectsLayout;
