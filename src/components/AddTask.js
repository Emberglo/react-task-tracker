import { useState } from "react"

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        // NOTE - prevent page change/refresh
        e.preventDefault();

        // NOTE - prevents submitting form without a Task
        if(!text) {
            alert('Please Add Text');
            return
        }

        // NOTE - call the addTask function in app.js with the informtation from the form
        onAdd({ text, day, reminder });

        // NOTE - clear form after it's submitted
        setText('');
        setDay('');
        setReminder(false);
    }

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input 
                type="text" 
                placeholder="Add Text"
                // NOTE - value is state value and onchange updates the state value with inputs value
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>

        <div className="form-control">
            <label>Day & Time</label>
            <input 
                type="text" 
                placeholder="Add Day And Time" 
                value={day}
                onChange={(e) => setDay(e.target.value)} 
            />
        </div>

        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input 
                type="checkbox" 
                // NOTE - makes sure the checkbox is only checked if reminder is true
                checked={reminder}
                value={reminder}
                // NOTE - currentTarget.checked gives current true/false value of checkbox
                onChange={(e) => setReminder(e.currentTarget.checked)}
            />
        </div>

        <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  )
}

export default AddTask
