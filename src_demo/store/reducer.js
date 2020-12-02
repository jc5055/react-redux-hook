import actionType from "./actionType";


const initState = {
    todoList : ['first'],
    num:0,
}

const reducer = (state = initState, action)=>{
    switch (action.type){
        case actionType.ADD_TODOLIST:{
            console.log(action)
            return {
               ...state,
                todoList: [...state.todoList, action.payload.listName]
            }
        }

        case actionType.ADD_NUM:{
            return {
                ...state,
                num: state.num + 1
            }
        }

        default :
            return state
    }
}

export default reducer