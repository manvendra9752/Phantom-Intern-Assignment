import React from "react";
import { motion } from "framer-motion";

const SearchBar = ({ onSearch }) => {
  return (
    <motion.div
      className="relative w-full "
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.input
        type="text"
        placeholder="Search tasks..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full p-3 border-none rounded-lg text-gray-700 placeholder-gray-400 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 shadow-lg focus:outline-none focus:ring focus:ring-blue-300 focus:bg-white transition-all duration-300"
        whileFocus={{ scale: 1.02 }}
        whileHover={{ scale: 1.01 }}
      />
      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
        🔍
      </div>
    </motion.div>
  );
};

export default SearchBar;
