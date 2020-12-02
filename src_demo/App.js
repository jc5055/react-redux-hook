import './App.css';
import Main from "./component/Main";
import {useSelector, useDispatch} from 'react-redux'
import AddPage from "./component/AddPage";
import actionType from "./store/actionType";
// import {useCallback} from 'react'

function App() {

    const dispatch = useDispatch()
    const num = useSelector(state => state.num)

    // const mainBtn = useCallback(()=>{
    //     console.log('mainBtn')
    // }, [num])

    const addAction = ()=>{
        dispatch({
            type:actionType.ADD_NUM
        })
    }
    return (
        <div className="App">
            <Main></Main>
            <AddPage addAction={addAction} num={num}></AddPage>
        </div>
    );
}

export default App;
