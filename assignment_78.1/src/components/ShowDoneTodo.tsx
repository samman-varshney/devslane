
import { FaTrash } from 'react-icons/fa';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface ShowDoneTodoProps {
  todos: Todo[];
  handleToggle: (id: number) => void;
  handleDelete: (id: number) => void;
}

function ShowDoneTodo({ todos, handleToggle, handleDelete }: ShowDoneTodoProps) {
  return (
    <>
      <h2 className="text-lg font-semibold mb-2">Things done</h2>
      <ul className="space-y-2">
        {todos
            .filter((todo: Todo) => todo.done)
            .map((todo: Todo) => (
                <li key={todo.id} className="flex items-center space-x-2 text-yellow-600">
                    <FaTrash
                        onClick={() => handleDelete(todo.id)}
                        className="cursor-pointer hover:text-red-500"
                    />
                    <input
                        type="checkbox"
                        checked={todo.done}
                        onChange={() => handleToggle(todo.id)}
                        className="accent-yellow-500 p-5 w-4 h-4"
                        title="Mark as not done"
                    />
                    <span className="line-through">{todo.text}</span>
                </li>
            ))}
      </ul>
    </>
  );
}

export default ShowDoneTodo;
