
interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface ShowUndoneTodoProps {
  todos: Todo[];
  handleToggle: (id: number) => void;
}

function ShowUndoneTodo({ todos, handleToggle }: ShowUndoneTodoProps) {
  return (
    <>
      <h2 className="text-lg font-semibold mb-2">Things to do</h2>
      <ul className="mb-4 space-y-2">
        {todos.filter(todo => !todo.done).map(todo => (
          <li key={todo.id} className="flex items-center space-x-2">
            <input
              id={`todo-checkbox-${todo.id}`}
              type="checkbox"
              checked={todo.done}
              onChange={() => handleToggle(todo.id)}
              title={`Mark "${todo.text}" as done`}
            />
            <label htmlFor={`todo-checkbox-${todo.id}`}>
              {todo.text}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ShowUndoneTodo;
