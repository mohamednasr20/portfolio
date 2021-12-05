import React from 'react';
import { projectsData } from './projectsData';
import ProjectCard from './ProjectCard';

const List = ({ selectedId }) => {
  return (
    <ul className="card-list">
      {projectsData.map((card) => (
        <ProjectCard
          key={card.id}
          {...card}
          isSelected={card.id === selectedId}
        />
      ))}
    </ul>
  );
};

export default List;
