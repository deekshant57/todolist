import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
import { nanoid } from "nanoid";

export const Todo = () => {
  const [todo, setTodo] = useState([]);
  //   console.log(todo);
  const getDatafromInput = (data) => {
    let obj = {
      title: data,
      id: nanoid(5),
      status: false,
    };
    setTodo([...todo, obj]);
  };
  console.log(todo);
  return (
    <div>
      <TodoInput props={getDatafromInput}></TodoInput>
      {todo.map((e) => (
        <TodoItem props={e.title}></TodoItem>
      ))}
      {/* {todo.map((e) => (
        <div>{e}</div>
      ))} */}
    </div>
  );
};
