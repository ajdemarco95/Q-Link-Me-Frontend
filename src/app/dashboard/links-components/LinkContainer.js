import LinkCard from "./LinkCard";
import AddLinkCard from "./link-card-components/AddLinkCard";
import { useState } from "react";

function LinkContainer(props) {
  const { linkArr, deleteLink, updateLink, addLink } = props;
  const [editingStates, setEditingStates] = useState(linkArr.map(() => false));
  const [isAddingLink, setIsAddingLink] = useState(true);

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
      {isAddingLink && (
        <>
          <AddLinkCard />
        </>
      )}
      <button className="btn btn-primary btn-block mt-5">
        Add new link...
      </button>
    </div>
  );
}

export default LinkContainer;
