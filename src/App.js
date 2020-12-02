import './App.css';
import Footer from "./component/Footer";
import List from "./component/List";
import Top from "./component/Top";
import actionType from "./store/actionType";
import {useEffect} from 'react'
import { useDispatch} from 'react-redux'


function App() {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch({
            type:actionType.GET_ALL_TODO
        })
    }, [dispatch])

    return (
        <div className="todo-container">
            <div className="todo-wrap">
                <Top></Top>
                <List></List>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default App;
