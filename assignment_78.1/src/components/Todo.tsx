
import AddTodo from "./AddTodo";
import ShowDoneTodo from "./ShowDoneTodo";
import ShowUndoneTodo from "./ShowUndoneTodo";
import Button from "./Button";
import { useCallback, useState } from "react";

interface TodoItem {
  id: number;
  text: string;
  done: boolean;
}

function Todo() {
  const [todos, setTodos] = useState<TodoItem[]>(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });

  const [newTodo, setNewTodo] = useState<string>("");
  const [adding, setAdding] = useState<boolean>(false);

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;
    const updatedTodos = [...todos, { id: Date.now(), text: newTodo, done: false }];
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
    setNewTodo("");
    setAdding(false);
  };

  const handleDelete = useCallback((id: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  }, [todos]);

  const handleToggle = useCallback((id: number) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  }, [todos]);

  const handleRefresh = useCallback(() => {
    const stored = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(stored);
  }, []);

  return (
    <div className="px-8 py-9 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Things to get done</h1>
        <Button handleFunction={handleRefresh} label="Refresh" />
      </div>

      <ShowUndoneTodo todos={todos} handleToggle={handleToggle} />

      {adding ? (
        <AddTodo
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          setAdding={setAdding}
          handleAddTodo={handleAddTodo}
        />
      ) : (
        <Button borderRadius="rounded-3xl" handleFunction={() => setAdding(true)} label="+ Add Todo" />
      )}

      <ShowDoneTodo todos={todos} handleToggle={handleToggle} handleDelete={handleDelete} />
    </div>
  );
}

export default Todo;
