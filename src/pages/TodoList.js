import React , {useContext} from 'react'
import { TodosContext } from '../App'




import Todo from '../components/Todo'
const TodoList = () => {
    const {state} = useContext(TodosContext)
  return (
    <div>
        {
            state.todos && state.todos.map(todo => {
                return <Todo name={todo.name}/>
            })
        }
    </div>
  )
}

export default TodoList