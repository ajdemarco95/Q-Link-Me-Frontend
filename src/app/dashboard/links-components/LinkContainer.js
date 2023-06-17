import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import LinkCard from "./LinkCard";
import { useState } from "react";
function LinkContainer(props) {
  const { linkArr } = props;
  const [items, setItems] = useState();
  const onDragEnd = (test) => {
    console.log(test);
  };
  return (
    <div className="container">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {linkArr.map((link, index) => (
                <Draggable
                  draggableId={link.id.toString()}
                  index={index}
                  key={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <LinkCard key={index} link={link} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <button className="btn btn-block mt-5">Add new link...</button>
    </div>
  );
}

export default LinkContainer;

//   {
//     linkArr.map((link, index) => (
//       <LinkCard key={index} link={link} />
//     ));
//   }
