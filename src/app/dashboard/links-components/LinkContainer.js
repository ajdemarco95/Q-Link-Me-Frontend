import LinkCard from "./LinkCard";
import { useState } from "react";
function LinkContainer(props) {
  const { linkArr } = props;
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="container">
      {linkArr.map((link, index) => (
        <LinkCard
          key={index}
          link={link}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      ))}
      <button className="btn btn-primary btn-block mt-5">
        Add new link...
      </button>
    </div>
  );
}

export default LinkContainer;
