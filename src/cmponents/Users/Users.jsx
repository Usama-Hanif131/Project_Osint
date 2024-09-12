import React from 'react'
import { useParams } from 'react-router-dom'
function Users() {
    const {userid} = useParams()
    return (
    <div className='text-center m-0 bg-gray-600 text-white p-3 text-3xl'>User: {userid}</div>
  )
}

export default Users
