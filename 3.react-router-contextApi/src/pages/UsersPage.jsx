import React from 'react'
import { Link } from 'react-router-dom'

const UsersPage = () => {
  return (
    <div>
      <h1> list Users</h1>
      <br />
      <ul>
        <li>
          <Link to="/user/10">User 10</Link>
        </li>
        <li>
          <Link to="/user/20">User 20</Link>
        </li>
        <li>
          <Link to="/user/30">User 30</Link>
        </li>
        <li>
          <Link to="/user/40">User 40</Link>
        </li>

      </ul>
    </div>
  )
}

export default UsersPage