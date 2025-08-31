import React from 'react'
import Button from './Button'

function AddTodo({newTodo, setNewTodo, setAdding, handleAddTodo}) {
    
  return (
    <div className="border-1 border-gray-200 shadow-sm rounded-lg p-4 mb-6 space-y-5">
          <h3 className="text-lg font-semibold">Create a todo</h3>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Write a todo..."
            className="border-1 border-gray-200 rounded px-3 py-2 w-80 focus:outline-none focus:ring-1 focus:ring-yellow-500"
          />
          <div className="space-x-2 flex">
            <Button handleFunction={handleAddTodo} label="Save" />
            <Button handleFunction={() => setAdding(false)} className="bg-gray-200 hover:bg-gray-400" label="Cancel" />
          </div>
        </div>
  )
}

export default AddTodo