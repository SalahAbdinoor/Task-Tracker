/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import AddTask from "./components/AddTask"
import Tasks from "./components/Tasks"
import About from "./components/About"
import Footer from "./components/Footer"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  // Default Set Task
  const [tasks, setTasks] = useState([])

  // get Data from server
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // fetch all tasks
  const fetchTasks = async () => {
    const respone = await fetch("http://localhost:5000/tasks")
    const data = await respone.json()

    return data
  }

  // fetch single task
  const fetchTask = async (id) => {
    const respone = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await respone.json()

    return data
  }

  // Add Task
  const addTask = async (task) => {
    const response = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    })

    const data = await response.json()

    setTasks([...tasks, data])
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    })

    const data = await response.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    )
  }

  return (
    <Router>
      <div className="container">
        <Header
          title="Task Tracker"
          showAdd={showAddTask}
          onAdd={() => setShowAddTask(!showAddTask)}
        />
        {showAddTask && <AddTask onAdd={addTask} />}

        <Routes>
          <Route
            path="/"
            element={
              tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onToggle={toggleReminder}
                  onDelete={deleteTask}
                />
              ) : (
                <h4>No Tasks To Show</h4>
              )
            }
          />
        </Routes>

        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
