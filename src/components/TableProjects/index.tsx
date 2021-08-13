import React, { useState } from "react";
import { DataView } from "primereact/dataview";
import { Project } from "../../models/Project";

export const TableProjects = () => {
  const projects: Project[] = [
    {
      name: "Tradutor Automático de HQs",
      description: "Projeto criado em Python",
      url: "/projects/hqtranslator",
    },
    {
      name: "PDF em ReactJS",
      description: "Sequencia de possibilidades com pdf em base64",
      url: "/projects/pdfs",
    },
  ];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [layout, setLayout] = useState("list");

  const renderListItem = (data: Project) => {
    return (
      <div className="p-col-12">
        <a href={data.url}>
          <div>
            <h4>{data.name}</h4>
            <p>{data.description}</p>
          </div>
        </a>
      </div>
    );
  };

  const renderGridItem = (data: Project) => {
    return (
      <div className="p-col-12 p-md-4">
        <h4>{data.name}</h4>
      </div>
    );
  };

  const itemTemplate = (project: Project, layout: string) => {
    if (!project) {
      return;
    }

    if (layout === "list") return renderListItem(project);
    else if (layout === "grid") return renderGridItem(project);
  };

  return (
    <div className="dataview-demo">
      <div className="card">
        <DataView
          value={projects}
          layout={layout}
          itemTemplate={itemTemplate}
          paginator
          rows={9}
        />
      </div>
    </div>
  );
};
