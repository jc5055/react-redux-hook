import {useSelector, useDispatch} from 'react-redux'
import actionType from "../store/actionType";

function Footer() {
    const finishedCount = useSelector(state => state.todoReducer.finishedCount)
    const todos = useSelector(state => state.todoReducer.todos)
    const dispatch = useDispatch()

    const dealChecked = (flag) => {
        dispatch({
            type: actionType.IS_CHECKED_ALL_TODO,
            payload: flag
        })
    }


    const dealRemove = ()=>{
        dispatch({
            type: actionType.DEL_FINISHED_TODO
        })
    }


    return (
        <div className="todo-footer">
            <label htmlFor="">
                <input type="checkbox"
                       checked={finishedCount === todos.length && todos.length > 0}
                       onChange={() => {
                           dealChecked(finishedCount !== todos.length)
                       }}
                />
            </label>
            <span><span>已完成{finishedCount}件</span> / 总计{todos.length}件 </span>
            <button className="btn btn-warning" onClick={dealRemove}>清除已完成任务</button>

        </div>
    )
}

export default Footer