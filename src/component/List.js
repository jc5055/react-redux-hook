import {useSelector} from 'react-redux'
import Item from "./Item";
function List() {
    const todos = useSelector((state)=>{ return state.todoReducer.todos})

    return (
        <div className="todo-main">
            {todos.map((todo,index)=>{
                return (
                    <Item key={index} todo={todo}></Item>
                )
            })}
        </div>
    )
}

export default List