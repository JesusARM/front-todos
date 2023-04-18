import React from "react";
// import MyIcons from "./MyIcons";
import PropTypes from "prop-types";

CreateTodoButton.prototype = {
  Icon: PropTypes.element.isRequired,
  addTodo: PropTypes.func.isRequired,
};
function CreateTodoButton(props) {
  // const AddTask = () => {

  //   alert("Añadir tarea");
  // };



  return (
    <button className="btn-create-task animate-bounce" onClick={props.addTodo}>
      {props.Icon} Añadir tarea
    </button>
  );
}

export { CreateTodoButton };
