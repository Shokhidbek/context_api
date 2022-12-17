import React , {useContext} from 'react'
import User from '../components/User'
import { UserContect } from '../App'
const UserList = () => {
    const {state} = useContext(UserContect)
  return (
    <div>{
        state.users && state.users.map(user => {
            return <User name={user.name} last_name={user.last_name} age={user.age} id={user.id}/>
        })
        }</div>
  )
}

export default UserList