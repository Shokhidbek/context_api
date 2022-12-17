import React from 'react'

const User = ({name , last_name , age , id}) => {
  return (
    <div key={id}>
        <h1>{name}</h1>
        <h3>{last_name}</h3>
        <h2>{age}</h2>
    </div>
  )
}

export default User