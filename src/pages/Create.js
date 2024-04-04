import { useState } from "react";
import './Create.css';

function Create() {
    
    // const [selectedDate, setSelectedDate] = useState('');
    // const [todoName, setTodoName] = useState('');
    return (
        <div className="create">
            <h1>Create</h1>

            <form className="createForm">
                <label>To-Do Item Name</label>
                <input 
                    type="text"
                    required
                />
                <label>Select Due Date</label>
                <input 
                    type="date"
                    required
                />
                <div class='submitContainer'>
                <input className="submit" type="submit" value="Save" />
                </div>
            </form>
        </div>
    )
}

export default Create;