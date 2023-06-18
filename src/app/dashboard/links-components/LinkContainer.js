import LinkCard from "./LinkCard";
import { useState } from "react";

function LinkContainer(props) {
  const { linkArr, deleteLink, updateLink, addLink } = props;
  const [editingStates, setEditingStates] = useState(linkArr.map(() => false));

  const handleEditClick = (index) => {
    const newEditingStates = [...editingStates];
    newEditingStates[index] = !newEditingStates[index];
    setEditingStates(newEditingStates);
  };

  return (
    <div className="container">
      {linkArr.map((link, index) => (
        <LinkCard
          key={index}
          link={link}
          isEditing={!editingStates[index]}
          index={index}
          handleEditClick={handleEditClick}
          deleteLink={deleteLink}
          updateLink={updateLink}
          addLink={addLink}
        />
      ))}
      <button className="btn btn-primary btn-block mt-5">
        Add new link...
      </button>
    </div>
  );
}

export default LinkContainer;
