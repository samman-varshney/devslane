import React from 'react'
import { FaTrash } from 'react-icons/fa';

function ShowDoneTodo({ todos, handleToggle, handleDelete}) {
    return (
        <>
            <h2 className="text-lg font-semibold mb-2">Things done</h2>
            <ul className="space-y-2">
                {todos
                    .filter((todo) => todo.done)
                    .map((todo) => (
                        <li
                            key={todo.id}
                            className="flex items-center space-x-2 text-yellow-600"
                        >
                            <FaTrash onClick={() => handleDelete(todo.id)} className=" cursor-pointer hover:text-red-500" />
                            <input
                                type="checkbox"
                                checked={todo.done}
                                onChange={() => handleToggle(todo.id)}
                                className="accent-yellow-500 p-5 w-4 h-4"
                            />
                            <span className="line-through">{todo.text}</span>
                            
                        </li>
                    ))}
            </ul>
        </>
    )
}

export default ShowDoneTodo