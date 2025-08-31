import React from 'react'

function ShowUndoneTodo({ todos, handleToggle }) {
  return (
    <>
      <h2 className="text-lg font-semibold mb-2">Things to do</h2>
      <ul className="mb-4 space-y-2">
        {todos
          .filter((todo) => !todo.done)
          .map((todo) => (
            <li key={todo.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => handleToggle(todo.id)}
              />
              <span>{todo.text}</span>
            </li>
          ))}
      </ul>
    </>
  )
}

export default ShowUndoneTodo