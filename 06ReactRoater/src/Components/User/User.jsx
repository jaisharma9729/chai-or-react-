import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} =useParams()
  return (
    <div className="text-3xl bg-zinc-600 text-white p-4 text-center">
      User: {userid}
    </div>
  )
}

export default User
