import actionType from "../actionType";

const defaultState = {
    todos: [{id: 0, title: 0, finished: false}],
    finishedCount: 0
}

const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionType.GET_ALL_TODO : {
            const todos = [
                {id: 1, title: "学习2个小时的react课程", finished: true},
                {id: 2, title: "学习1个小时的webpack课程", finished: true},
                {id: 3, title: "学习1个小时的node课程", finished: false},
                {id: 4, title: "刷2小时的抖音", finished: false}
            ]

            let finishedCount = 0
            todos.forEach((todo, index) => {
                if (todo.finished) {
                    finishedCount += 1
                }
            })
            return {
                ...state,
                todos,
                finishedCount,
            }
        }
        case actionType.DEL_ONE_TODO: {
            const todoId = action.payload
            const newtodos = state.todos.filter((todo, index) => {
                return todo.id !== todoId
            })

            let finishedCount = 0
            state.todos.forEach((todo, index) => {
                if (todo.finished) {
                    finishedCount += 1
                }
            })

            return {
                ...state,
                todos: newtodos,
                finishedCount
            }
        }
        case actionType.CHANGE_ONE_TODO: {

            const {todoId, flag} = action.payload

            const newTodos = state.todos.map((todo, index) => {
                if (todo.id === todoId) {
                    return {
                        ...todo,
                        finished: flag
                    }
                } else {
                    return todo
                }
            })

            console.log(newTodos)
            let finishedCount = state.finishedCount
            if (flag === true) {
                finishedCount += 1
            } else {
                finishedCount -= 1
            }

            return {
                ...state,
                todos: newTodos,
                finishedCount
            }

        }
        case actionType.ADD_ONE_TODO: {
            const todo = action.payload
            return {
                ...state,
                todos: [...state.todos, todo]
            }

        }
        case actionType.DEL_FINISHED_TODO: {
            const todos = state.todos.filter((todo, index) => {
                return todo.finished !== true
            })

            return {
                ...state,
                todos,
                finishedCount: 0
            }
        }
        case actionType.IS_CHECKED_ALL_TODO: {
            const flag = action.payload
            const todos = state.todos.map((todo, index) => {
                if (todo.finished === flag) {
                    return todo
                } else {
                    return {
                        ...todo,
                        finished: flag
                    }
                }
            })

            return {
                ...state,
                todos,
                finishedCount: flag === true ? todos.length : 0
            }
        }
        default:
            return defaultState
    }
}


export default todoReducer