/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import { useState } from "react"
const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("")
  const [date, setDate] = useState("")
  const [reminder, setReminder] = useState(false)

  const submitTask = (e) => {
    e.preventDefault()

    if (!text) {
      alert("please add a Task")
      return
    }

    onAdd({ text, date, reminder })

    setText("")
    setDate("")
    setReminder(false)
  }
  return (
    <form className="add-form" onSubmit={submitTask}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Date & Time</label>
        <input
          type="datetime-local"
          placeholder="Add Task"
          value={date}
          onChange={(e) =>
            setDate(e.target.value) && console.log(e.target.value)
          }
        />
      </div>
      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          placeholder="Add Task"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" className="btn btn-block" value="Save Task" />
    </form>
  )
}

export default AddTask
