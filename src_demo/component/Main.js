import {useSelector, useDispatch} from 'react-redux'
import React, {useState} from 'react'

function Main() {
    const [listName, setListName] = useState('')
    const todolist = useSelector(state => state.todoList)

    const dispatch = useDispatch()

    const addTodoList = ()=>{
        dispatch({
            type:'add_todolist',
            payload:{listName}
        })
    }

    return (
        <>
            <input type="text"
                   value={listName}
                   onChange={(e)=>{setListName(e.target.value)}}
            />
            <button onClick={addTodoList}>增加代办</button>
            <ul>
                {todolist.map((todo, index) => {
                    return <li key={index}>{todo}</li>
                })}
            </ul>
        </>
    )
}

export default Main