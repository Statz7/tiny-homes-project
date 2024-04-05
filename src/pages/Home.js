import './../App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import EditIcon from './../assets/Vector.png';
import CheckBoxBlank from './../assets/Property 1=Check box outline blank.png';
import CheckBox from './../assets/Property 1=Check box.png';
import SelectBlank from './../assets/Selected=false.png';
import SelectSelected from './../assets/Selected=True.png';
import DeleteIcon from './../assets/delete.png';

const Fetch = () => {

    const [tasks, setTasks] = useState([]);
    useEffect(() => {
      fetch('https://localhost:7204/api/Tasks')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setTasks(data);
        });
    }, []);

    const handleCheckboxClick = (id) => {
        console.log(`Checkbox clicked for task with ID: ${id}`);
        const updatedTasks = tasks.map(task => {
          if (task.id === id) {
            return {
              ...task,
              isCompleted: !task.isCompleted
            };
          }
          return task;
      });
    
        setTasks(updatedTasks);
    };
    
      const handleDeleteClick = (id) => {
        console.log(`Delete clicked for task with ID: ${id}`);
        const updatedTasks = tasks.filter(task => task.id !== id);
    
        setTasks(updatedTasks);
      };


    return (

    <div className='taskList'>

    {tasks.map(task => (
      <div className='cardComponent' key={task.id}>
        
          <div className='cardBody'>
            <div>
              <img src={EditIcon} alt="Edit Icon" />
            </div>
            <div className='taskDetails'>
              <h3>{task.description}</h3>
              <p>Due: {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' })}</p>
              <p>Created: {new Date(task.createdDate).toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' })}</p>
            </div>
            <div className='iconsRight'>
              <div className='checkboxIcon' onClick={() => handleCheckboxClick(task.id)}>
                <img src={task.isCompleted ? CheckBox : CheckBoxBlank} alt="CheckBox Icon" />
              </div>
              <div className='deleteIcon' onClick={() => handleDeleteClick(task.id)}>
                <img src={DeleteIcon} alt="Delete Icon" />
              </div>
            </div>
        </div>
      </div>
    ))}
  </div>

)
    };

    export default Fetch;