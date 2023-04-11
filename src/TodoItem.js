import React from "react";
import PropTypes from "prop-types";

TodoItem.prototype = {
  text: PropTypes.string.isRequired,
  IconClip: PropTypes.element.isRequired,
  IconDelete: PropTypes.element.isRequired,
  IconCheck: PropTypes.element.isRequired,
  completed: PropTypes.bool.isRequired,
};
function TodoItem(props) {
const onComplete = () => {
    alert("Completaste la tarea: " + props.text);
}

const onDelete = () => {
    alert("Eliminaste la tarea: " + props.text);
}

  return (
    <li className="card-list">
      <span className="flex items-center">
      <span className="btnDoubleIcon">
            <button className="btnCompleteTask" onClick={onComplete}>
              <span>{props.IconClip}</span>
              <span>{props.IconCheck}</span>
            </button>
        </span>
        <span className={`flex-auto ${props.completed && 'Todo-complete'}`}>
          <p>{props.text}</p>
        </span>
        <button className="del" onClick={onDelete}>{props.IconDelete}</button>
      </span>
    </li>
  );
}

export { TodoItem };
