import { useCreateTodo } from "@/hooks/useCreateTodo";
import { useGetTodos } from "@/hooks/useGetTodos";
import { useState } from "react";

const Todos = () => {
  const [value, setValue] = useState("");

  const { data: todos } = useGetTodos();
  const { mutateAsync: createTodo, isPending: isCreatingTodo } =
    useCreateTodo();

  const handleAddTodo = async () => {
    await createTodo(value);
    setValue("");
  };

  return (
    <div className="todo-container">
      <h1>Todo Items</h1>
      <div>
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button onClick={handleAddTodo} disabled={!value || isCreatingTodo}>
          ADD
        </button>
      </div>
      {todos && (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.todo}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todos;
