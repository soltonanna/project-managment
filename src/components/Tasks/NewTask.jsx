import React, { useState, useRef } from 'react';
import Modal from '../modules/Modal';

const NewTask = ({ onAdd }) => {
    const [enteredTasks, setEnteredTasks] = useState('');
    const modal = useRef();

    const handleChange = (e) => {
        setEnteredTasks(e.target.value)
    }

    const handleClick = () => {
        if(enteredTasks.trim() === '') {
            modal.current.open();
            return;
        }
        onAdd(enteredTasks);
        setEnteredTasks('');
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Close">
                <h2 className="text-xl font-bold text-stone-500 my-4"> Invalid input.</h2>
                <p className="text-stone-70 mb-4">Oops... looks like you forgot to enter a value.</p>
            </Modal>

            <div className="flex items-center gap-4">
                <input 
                    type="text" 
                    onChange={handleChange}
                    value={enteredTasks}
                    className="w-64 px-2 py-1 rounded-sm bg-stone-200" 
                />
                <button 
                    onClick={handleClick}
                    className="text-stone-700 hover:text-stone-950">
                        Add Task
                </button>
            </div>
        </>
        
    );
}

export default NewTask;