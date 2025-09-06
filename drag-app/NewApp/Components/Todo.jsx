import React, { useState } from 'react';
import moment from 'moment';
import Tasks from './Tasks';
import { ReactSortable } from 'react-sortablejs';
import '../Styles/TodoStyle.css';
import NavBar from './Nav';

export default function TodoApp() {

    // Manage States
    const [task, setTask] = useState('');
    const [dateTask, setDateTask] = useState('');

    // State for NavBar
    const [toggle, setToggle] = useState(false);
    
    // Element Objects
    const [todos, setTodos] = useState([
        { id: 1, text: 'Clean the kitchen', date: 'Jul 23th', isEditing: false },
        { id: 2, text: 'Order textbooks', date: 'Jul 27th', isEditing: false },
        { id: 3, text: 'Get new business cards', date: 'Jul 25th', isEditing: false },
    ])

    // Functions to add tasks
    const handleNewTask = (e) => {
        setTask(e.target.value);
    }

    const handleNewDate = (e) => {
        setDateTask(e.target.value);
    }

    const addNewTask = () => {
        if (task.trim() === '' || dateTask.trim() === '') return;

        let dateFormat = moment(dateTask).format('MMMM Do');

        const newTask = {
            id: Date.now(),
            text: task,
            date: dateFormat,
            isEditing: false,
        };

        setTodos([...todos, newTask]);
        setTask('');
        setDateTask('');
    }

    const updateTask = (id, newTask) => {
        setTodos(
            todos.map((todo) => (
                todo.id === id ? { ...todo, text: newTask } : todo
            ))
        );
    };

    const deleteTask = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <div className='todoHead'>
            <div className={`sideNav ${toggle ? 'toggle' : ''}`}>
                <div className='openToggle' onClick={handleToggle}>
                    <img src="../src/assets/expand.svg" alt="" />
                    <p>PANEL</p>
                </div>
                <NavBar/>
            </div>
            
            <div className='todoComponent'>
                <div className='titleHead'>
                    <h1>Daily Planner</h1>
                    <p><i>Grab and drag to organize your cards</i></p>
                </div>

                <div className='addTask'>
                    <div className='mainInput'>
                        <input 
                            type="text" 
                            size={50}
                            placeholder='Add a Task' 
                            value={task} 
                            onChange={handleNewTask}
                        />
                    </div>
                    <div className='secondInput'>
                        <input type="date" value={dateTask} onChange={handleNewDate}/>
                        <button onClick={addNewTask}>Add</button>
                    </div>
                </div>

                <div className='mainDisplay'>
                    <ul>
                        <ReactSortable list={todos} setList={setTodos} className='gridTodo'>
                            {todos.map((todo) => (
                                <Tasks 
                                    key={todo.id}
                                    todo={todo}
                                    updateTask={updateTask}
                                    deleteTask={deleteTask}
                                />
                            ))}
                        </ReactSortable>
                    </ul>
                </div>
            </div>
        </div>
    )
}