import React from "react";
// import MyIcons from "./MyIcons";
import PropTypes from 'prop-types'


CreateTodoButton.prototype = {
  Icon: PropTypes.element.isRequired,
}
function CreateTodoButton(props) {
  return <button className="btn-create-task">{props.Icon} Añadir tarea</button>;
}

export { CreateTodoButton };
