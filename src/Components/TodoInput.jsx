import { useState } from "react";

export const TodoInput = ({ props }) => {
  const [todoInput, setTodoInput] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          //   console.log(e.target.value);
          setTodoInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let ans = props();
          console.log(ans);
          // props(todoInput);
        }}
      >
        +
      </button>
    </div>
  );
};
