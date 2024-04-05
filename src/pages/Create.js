import { useState } from "react";
import './Create.css';

function Create() {
    
    const [todoName, setTodoName] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const taskData = {
            description: todoName,
            dueDate: dueDate,
            createdDate: Date(),
        };

        try {
            const response = await fetch('https://localhost:7204/api/Tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(taskData)
            });

            if (!response.ok) {
                throw new Error('Failed to create task');
            }

            setTodoName('');
            setDueDate('');

        } catch (error) {
            console.error('Error creating task:', error);
        }
    };
    return (
        <div className="create">
            <h1>Create</h1>

            <form className="createForm" onSubmit={handleSubmit}>
                <label>To-Do Item Name</label>
                <input 
                    type="text"
                    required
                    value={todoName}
                    onChange={(event) => setTodoName(event.target.value)}
                />
                <label>Select Due Date</label>
                <input 
                    type="date"
                    required
                    value={dueDate}
                    onChange={(event) => setDueDate(event.target.value)}
                />
                <div className='submitContainer'>
                    <input className="submit" type="submit" value="Save" />
                </div>
            </form>
        </div>
    )
}

export default Create;