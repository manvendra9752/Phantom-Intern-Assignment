import React, { useState } from "react";
import { motion } from "framer-motion";

const TaskInput = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle("");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="relative w-full mb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.input
        type="text"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 border-none rounded-lg text-gray-700 placeholder-gray-400 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 shadow-lg focus:outline-none focus:ring focus:ring-blue-300 focus:bg-white transition-all duration-300"
        whileFocus={{ scale: 1.02 }}
        whileHover={{ scale: 1.01 }}
      />
      <motion.button
        type="submit"
        onClick={handleSubmit}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="px-6 py-3 bg-pink-600 text-white font-bold rounded-r-lg hover:bg-pink-700 focus:outline-none focus:ring focus:ring-purple-400 transition-all duration-300 transform shadow-lg absolute right-0"
      >
        Add
      </motion.button>
    </motion.form>
  );
};

export default TaskInput;
