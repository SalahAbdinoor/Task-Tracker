/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import { FaTimes } from "react-icons/fa"

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <input type="datetime-local" defaultValue={task.date} />
    </div>
  )
}

export default Task
