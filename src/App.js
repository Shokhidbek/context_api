import React, { useReducer, createContext } from 'react'
import TodoList from './pages/TodoList'
import { Reducer } from './reducer/TodosReducer'
import UserList from './pages/UserList'
export const TodosContext = createContext()
export const UserContect = createContext()
const instalState = {
    todos: [
        {
            id: 1,
            name: "Ali"
        }
    ],
    users:[
        {
            id:1,
            name:"Vali",
            last_name:"alimov",
            age:23
        }
    ]
}
const App = () => {
    const [state, dispatch] = useReducer(Reducer, instalState)
    return (
        <UserContect.Provider value={{state:state , dispatch:dispatch}}>
            <TodosContext.Provider value={{ state: state, dispatch: dispatch }}>
                <TodoList />
                <UserList/>
            </TodosContext.Provider>
        </UserContect.Provider>
    )
}

export default App