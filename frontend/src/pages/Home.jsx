import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskList from "../components/TaskList";
import SearchBar from "../components/SearchBar";
import { motion } from "framer-motion";
import TaskInputModal from "../components/TaskInputModal";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const fetchTasks = async () => {
    const { data } = await axios.get("http://localhost:5000/tasks");
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (title) => {
    const { data } = await axios.post("http://localhost:5000/tasks", { title });
    setTasks([...tasks, data]);
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  const toggleTask = async (id, completed) => {
    await axios.put(`http://localhost:5000/tasks/${id}`, { completed });
    fetchTasks();
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-500 p-8 flex flex-col items-center">
      <motion.h1
        className="text-4xl font-bold text-white mb-8 "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Things To Do
      </motion.h1>

      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between min-w-fit space-x-4 mb-4">
          <SearchBar onSearch={setSearch} />
          <motion.button
            onClick={() => setModalOpen(true)}
            className="bg-green-500 w-[20vw] px-3 py-2 text-white rounded-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            New Task
          </motion.button>
        </div>
        {modalOpen && (
          <TaskInputModal onClose={() => setModalOpen(false)} onAdd={addTask} />
        )}
        <TaskList
          tasks={filteredTasks}
          onDelete={deleteTask}
          onToggle={toggleTask}
        />
      </div>
    </div>
  );
};

export default Home;
