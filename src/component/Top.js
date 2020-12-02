import {useSelector, useDispatch} from 'react-redux'
import {useRef} from 'react'
import actionType from "../store/actionType";
function Top() {
    const todos = useSelector(state => state.todoReducer.todos)
    const inputRef = useRef()
    const dispatch = useDispatch()

    const _handleKeyEvent = (e)=>{
        const lastTodoId = todos.length === 0 ? 0: todos[todos.length - 1].id
        if (13 === e.keyCode){
            const value = inputRef.current.value
            if (!value.trim()){
                alert('输入的内容不为空')
                return
            }
            const todo = {id:lastTodoId, title:value, finished:false}
            dispatch({
                type: actionType.ADD_ONE_TODO,
                payload: todo
            })
            inputRef.current.value = ''
        }
    }

    return (
        <div className="todo-header">
            <input type="text"
                   placeholder="请输入今天的任务清单，按回车键确认"
                   onKeyDown={(event)=>{_handleKeyEvent(event)}}
                   ref={inputRef}
            />
        </div>
    )
}

export default Top