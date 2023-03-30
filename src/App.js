import "./App.css";
import { TodoCounter } from "./TodoCounter.js";
import { TodoItem } from "./TodoItem.js";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { CreateTodoButton } from "./CreateTodoButton.js";
//TODO: +FontAwesomeIcons

const todos = [
  { text: "Aprender React", completed: false },
  { text: "Tomar el curso de intro a react", completed: false },
  { text: "Aprender de encriptacion con NodeJs", completed: false },
];
function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}
export default App;
