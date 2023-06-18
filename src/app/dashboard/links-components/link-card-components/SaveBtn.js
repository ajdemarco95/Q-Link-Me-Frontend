import React from "react";

function SaveBtn(props) {
  const { handleEditClick, index } = props;
  return (
    <button
      className={"hover:animate-btn-bounce-sm btn btn-outline btn-success mr-3"}
      onClick={() => handleEditClick(index)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    </button>
  );
}

export default SaveBtn;
