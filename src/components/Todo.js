import React , {useContext} from 'react'
import { TodosContext } from '../App'
import { Actions } from '../reducer/Actions'
const Todo = ({name , id}) => {

    const {dispatch} = useContext(TodosContext)

    const edit = () => {
       dispatch({type:Actions.UPDATE_TODO , payload:{}})
    }
    const delete_1 = () => {
        dispatch({type:Actions.DELETE_TODO , payload:2})
    }
  return (
    <div key={id}>
        {name}
        <button onClick={edit}>edit</button>
        <button onClick={delete_1}>edit</button>
    </div>
  )
}

export default Todo