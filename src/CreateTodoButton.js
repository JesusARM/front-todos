import React from "react";
// import MyIcons from "./MyIcons";
import PropTypes from "prop-types";

CreateTodoButton.prototype = {
  Icon: PropTypes.element.isRequired,
};
function CreateTodoButton(props) {
  const AddTask = () => {

    alert("Añadir tarea");
  };

  return (
    <button className="btn-create-task animate-bounce" onClick={AddTask}>
      {props.Icon} Añadir tarea
    </button>
  );
}

export { CreateTodoButton };
