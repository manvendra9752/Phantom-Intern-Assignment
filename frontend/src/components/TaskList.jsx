import React from "react";
import { FaCheckCircle, FaUndoAlt, FaTrashAlt } from "react-icons/fa";

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className="overflow-y-auto max-h-[70vh] px-4 stylish-scrollbar">
      <ul className="space-y-3">
        {tasks.length > 0 ? (
          [...tasks].reverse().map(
            (
              task // Reverse the tasks array
            ) => (
              <li
                key={task._id}
                className={`p-4 flex justify-between items-center bg-white rounded-lg shadow-md ${
                  task.completed ? " text-gray-500" : "text-gray-800"
                }`}
              >
                <span
                  className={`flex-grow ${
                    task.completed
                      ? "line-through text-gray-500"
                      : "text-gray-800"
                  }`}
                >
                  {task.title}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => onToggle(task._id, !task.completed)}
                    className={`px-3 py-2 text-xs rounded-lg font-semibold text-white flex items-center gap-1 transition ${
                      task.completed
                        ? "bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-300"
                        : "bg-green-500 hover:bg-green-600 focus:ring-green-300"
                    }`}
                  >
                    {task.completed ? (
                      <>
                        <FaUndoAlt />
                        Undo
                      </>
                    ) : (
                      <>
                        <FaCheckCircle />
                        Done
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => onDelete(task._id)}
                    className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg flex items-center gap-1 focus:outline-none focus:ring focus:ring-red-300 transition text-xs"
                  >
                    <FaTrashAlt />
                    Delete
                  </button>
                </div>
              </li>
            )
          )
        ) : (
          <div className="text-center text-gray-500 mt-4">
            No tasks available...
          </div>
        )}
      </ul>
    </div>
  );
};

export default TaskList;
