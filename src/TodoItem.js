import React from "react";
import PropTypes from "prop-types";

//TODO: Crear una funcion que cambie un componente segun el mouse este encima o no
TodoItem.prototype = {
  text: PropTypes.string.isRequired,
  Icon: PropTypes.element.isRequired,
  deleteicon: PropTypes.element.isRequired,
  IconCheck: PropTypes.element.isRequired,
  completed: PropTypes.bool.isRequired,
};
function TodoItem(props) {
  return (
    <li className="card-list">
      <span class="flex items-center">
      <span class="btnDoubleIcon">
            <button className="btnCompleteTask">
              <span>{props.Icon}</span>
              <span>{props.IconCheck}</span>
            </button>
        </span>
        <span className={`flex-auto ${props.completed && 'Todo-complete'}`}>
          <p>{props.text}</p>
        </span>
        <button className="del">{props.deleteicon}</button>
      </span>
    </li>
  );
}

export { TodoItem };
