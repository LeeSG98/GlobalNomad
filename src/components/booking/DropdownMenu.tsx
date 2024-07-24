import React, { useState, useEffect } from 'react';

interface Experience {
  id: number;
  name: string;
}

interface DropdownMenuProps {
  experiences: Experience[];
  onSelect: (experience: Experience) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ experiences, onSelect }) => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  const handleSelect = (experience: Experience) => {
    setSelectedExperience(experience);
    onSelect(experience);
  };

  return (
    <div>
      <button className="dropdown-button">
        {selectedExperience ? selectedExperience.name : '체험 선택'}
      </button>
      <ul className="dropdown-menu">
        {experiences.map(exp => (
          <li key={exp.id} onClick={() => handleSelect(exp)}>
            {exp.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
