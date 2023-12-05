import React, { useRef, useState } from 'react'
import './todo.css'

import { faXmark, faCheck, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '@fortawesome/fontawesome-free/css/all.min.css';
function Todo() {
    const input = useRef()
    const parg = useRef()
    const addbtn = useRef()
    const [todos, settodos] = useState([]);




    function add(event) {
        event.preventDefault();
        const text = input.current.value;
        const newitem = { complete: false, text }
        settodos([...todos, newitem]);

        input.current.value = '';

    }


    const done =
        (index) => {
            const newtodos = [...todos];
            newtodos[index].complete = !newtodos[index].complete
            settodos(newtodos)
        }
    const deleted =
        (index) => {
            const newtodos = [...todos];
            newtodos.splice(index, 1)
            settodos(newtodos)

        }



    return (
        <>
            <div className='container '>
                <div className='all '>
                    <h1 className='text-center text-capitalize'>todo</h1>
                    <form >
                        <div className='inputs row ' >
                            <div className='col-md-9 col-sm-12 col1' >
                                <input name='nametask' ref={input} type='text' placeholder='Add a task.........' />
                            </div>
                            <div className='col-md-3 col-sm-12 '>
                                <button className='col-md-3' onClick={add} ref={addbtn} type='submit' style={{ width: '100px' }}>Add a task</button>
                            </div>    </div></form>

                    {todos.map(({ text, complete }, index) => {
                        return (
                            <div className='tasks d-flex flex-row' >
                                <h3 className={complete ? 'done' : ''} ref={parg}>{text}</h3>
                                <div className='icons ms-auto'>
                                    <span onClick={() => parg.className = done(index)}   >      <FontAwesomeIcon icon={faCheck} /> </span>
                                    <span onClick={() => deleted(index)}><FontAwesomeIcon icon={faXmark} /> </span>
                                </div>     </div>)
                    })}

                </div>
            </div>









        </>
    )
}
export default Todo













