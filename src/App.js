import "./App.css";
import { TodoCounter } from "./TodoCounter.js";
import { TodoItem } from "./TodoItem.js";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { CreateTodoButton } from "./CreateTodoButton.js";
import { TodoInput } from "./TodoInput.js";
import { MyIcons } from "./MyIcons";
import test from "./test.png";

const todos = [
  { text: "Aprender React", completed: true },
  { text: "Tomar el curso de intro a react", completed: false },
  { text: "Aprender de encriptacion con NodeJs", completed: false },
  { text: "Aprender Angular", completed: false },
];

function App() {
  return (
    <div className="myBody">
      <div className="card flex-1">
        <h1>Create new task...</h1>
        <br></br>
        <h5 className="text-slate-500">Task name</h5>
        <TodoInput Icon={MyIcons.pen}></TodoInput>
        <CreateTodoButton Icon={MyIcons.plus} />
        <img src={test} alt="No disponible"></img>
      </div>

      <div className="card flex-1">
        <div className="card-container">
          <h1>Your tasks</h1>
          <TodoCounter />
          <TodoSearch Icon={MyIcons.search} />
        </div>
        <TodoList>
          {todos.map((todo) => (
            <TodoItem
              IconCheck={MyIcons.check}
              IconClip={MyIcons.paperclip}
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              IconDelete={MyIcons.trash}
            />
          ))}
        </TodoList>
      </div>
    </div>
  );
}
export default App;
