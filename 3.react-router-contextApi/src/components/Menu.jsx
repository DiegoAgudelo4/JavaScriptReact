import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Menu.module.css';
const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? style.active : '')} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? style.active : '')} to="/dashboard">dashboard</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? style.active : '')} to="/users">users</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Menu