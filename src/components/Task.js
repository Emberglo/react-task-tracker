import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, toggleReminder }) => {
    
    return (
        // NOTE - using curly braces and backticks for an expression and the ${} for a condition 
      <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => toggleReminder(task.id)}>
        <h3>
            {task.text}
            {/* NOTE - onDelete event is passed back up from here to the function in app.js & calling a function in onclick allows us to send just the ID back up otherwise it sends the whole click event */}
            <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
        </h3>
        <p>{task.day}</p>
      </div>
    )
}

export default Task
