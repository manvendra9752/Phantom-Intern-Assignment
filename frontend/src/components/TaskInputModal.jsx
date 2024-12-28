import React, { useState } from "react";
import { motion } from "framer-motion";

const TaskInputModal = ({ onClose, onAdd }) => {
  const [title, setTitle] = useState("");

  const handleAddTask = () => {
    if (title.trim()) {
      onAdd(title);
      onClose();
      setTitle("");
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        className="bg-white rounded-xl p-6 w-[90vw] max-w-md shadow-2xl relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition hover:rotate-90 hover:duration-500 "
          onClick={onClose}
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add New Task
        </h2>
        <input
          type="text"
          placeholder="Enter your task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border-none rounded-lg text-gray-700 placeholder-gray-400 bg-gradient-to-r from-blue-100 via-violet-100 to-pink-100 shadow-lg focus:outline-none focus:ring focus:ring-blue-300 focus:bg-white transition-all duration-300 mb-6"
          whileFocus={{ scale: 1.02 }}
          whileHover={{ scale: 1.01 }}
        />
        <div className="flex justify-around gap-4 w-full">
          <button
            className="px-5 w-full py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className={`px-5 py-2 w-full rounded-lg text-white transition ${
              title.trim()
                ? "bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-300"
                : "bg-green-300 cursor-not-allowed"
            }`}
            onClick={handleAddTask}
            disabled={!title.trim()}
          >
            Add Task
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TaskInputModal;
