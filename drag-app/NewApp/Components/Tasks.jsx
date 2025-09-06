import React, { useState } from 'react';
import '../Styles/TaskStyle.css'

export default function Tasks({ todo, updateTask, deleteTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditText(todo.text)
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setEditText(todo.text);
    }

    const handleSaveClick = () => {
        updateTask(todo.id, editText);
        setIsEditing(false);
    }

    return (
        <li className='box'>
            {isEditing ? (
                <div className='editBox'>
                    <input 
                        type="text" 
                        value={editText} 
                        size={15}
                        onChange={(e) => setEditText(e.target.value)}
                    />
                    <div className='saveBox'>
                        <button
                            className='saveBtn' 
                            onClick={handleSaveClick}
                        >
                            <img src="./src/assets/save.svg" alt="Save" />
                            <span>Save</span>
                        </button>
                        <button
                            className='cancelBtn' 
                            onClick={handleCancelClick}
                        >
                            <img src="./src/assets/cancel.svg" alt="Cancel" />
                            <span>Cancel</span>
                        </button>
                    </div>
                </div>
            ) : (
                <div className='sticker'>
                    <div className='stickText'>
                        <span>{todo.date}</span>
                        <p>{todo.text}</p>
                    </div>
                    <div className='stickBtn'>
                        <button
                            className='editBtn' 
                            onClick={handleEditClick}
                        >
                            <img src="./src/assets/edit.svg" alt="Edit" />
                            <span>Edit</span>
                        </button>
                        <button
                            className='deleteBtn' 
                            onClick={() => deleteTask(todo.id)}
                        >
                            <img src="./src/assets/delete.svg" alt="delete" />
                            <span>Delete</span>
                        </button>
                    </div>
                </div>
            )}
        </li>
    )
}