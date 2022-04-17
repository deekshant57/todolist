export const TodoItem = ({ props }) => {
  return (
    <div>
      {props}
      <button
        onClick={() => {
          console.log("Status");
        }}
      >
        Toggle
      </button>
    </div>
  );
};
