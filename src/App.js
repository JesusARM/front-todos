import "./App.css";
import React from "react";
import { TodoCounter } from "./TodoCounter.js";
import { TodoItem } from "./TodoItem.js";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { CreateTodoButton } from "./CreateTodoButton.js";
import { TodoInput } from "./TodoInput.js";
import { MyIcons } from "./MyIcons";
import test from "./test.png";

const defaultTodos = [
  { text: "Aprender React", completed: true },
  { text: "Tomar el curso de intro a react", completed: false },
  { text: "Aprender de encriptacion con NodeJs", completed: false },
  { text: "Aprender Angular", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");
  const [newTodovalue,setNewTodo] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1) {
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter((todo)=> {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    console.log(todoIndex);
    const newTodos = [...todos];
    console.log(newTodos);
    newTodos[todoIndex].completed = true;
    console.log(newTodos);
    setTodos(newTodos);
  }

  const DeleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  const addTodo = () => {
    const newTodos = [...todos];
    newTodos.push({
      text: newTodovalue,
      completed: false,
    });
    setTodos(newTodos);
  }

  return (
    <div className="myBody">
      <div className="card flex-1">
        <h1>Create new task...</h1>
        <br></br>
        <h5 className="text-slate-500">Task name</h5>
        <TodoInput Icon={MyIcons.pen} setNewTodo={setNewTodo}></TodoInput>
        <CreateTodoButton Icon={MyIcons.plus} todos={todos} addTodo={()=>addTodo(newTodovalue.text)}/>
        <img src={test} alt="No disponible"></img>
      </div>

      <div className="card flex-1">
        <div className="card-container">
          <h1>Your tasks</h1>
          <TodoCounter totalTodos={totalTodos} totalCompletedTodos={completedTodos}/>
          <TodoSearch Icon={MyIcons.search} searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
        <TodoList>
          {searchedTodos.map((todo) => (
            <TodoItem
              IconCheck={MyIcons.check}
              IconClip={MyIcons.paperclip}
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              IconDelete={MyIcons.trash}
              CompleteTodo={()=>completeTodos(todo.text)}
              DeleteTodo={()=>DeleteTodo(todo.text)}
            />
          ))}
        </TodoList>
      </div>
    </div>
  );
}
export default App;
