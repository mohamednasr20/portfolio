import React from 'react';
import { projectsList } from '../projectsList';
import ProjectCard from '../ProjectCard/ProjectCard';

const List = ({ selectedId }) => {
  return (
    <ul className="card-list">
      {projectsList.map((card) => (
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
