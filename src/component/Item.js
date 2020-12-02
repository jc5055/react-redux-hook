import {useState} from 'react'
import {useDispatch} from 'react-redux'
import actionType from "../store/actionType";

function Item(props) {
    const {todo} = props
    const [isShowDelBtn, setIsShowDelBtn] = useState(false)
    const dispatch = useDispatch()

    const dealRemove = (todoId) => {
        dispatch({
            type: actionType.DEL_ONE_TODO,
            payload: todoId
        })
    }

    const dealChange = (todoId, flag) => {
        console.log(flag)
        dispatch({
            type: actionType.CHANGE_ONE_TODO,
            payload: {todoId, flag}
        })
    }

    return (
        <li key={todo.id}
            onMouseOver={() => {
                setIsShowDelBtn(true)
            }}
            onMouseOut={() => {
                setIsShowDelBtn(false)
            }}
        >
            <label htmlFor="">
                <input type="checkbox"
                       checked={todo.finished}
                       onChange={() => {
                           dealChange(todo.id, !todo.finished)
                       }}
                />
                <span> {todo.title}</span>
            </label>
            <button className="btn btn-warning"
                    style={{display: isShowDelBtn ? "block" : "none"}}
                    onClick={() => {
                        dealRemove(todo.id)
                    }}
            >
                删除
            </button>

        </li>
    )
}

export default Item