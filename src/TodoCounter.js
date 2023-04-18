import React from "react";
import PropTypes from "prop-types";

TodoCounter.prototype = {
  totalTodos: PropTypes.number.isRequired,
  totalCompletedTodos: PropTypes.number.isRequired,
};
function TodoCounter(props) {
  return (
    <h5>
      {" "}
      Has complentado {props.totalCompletedTodos} de {props.totalTodos} tareas
    </h5>
  );
}

export { TodoCounter };
