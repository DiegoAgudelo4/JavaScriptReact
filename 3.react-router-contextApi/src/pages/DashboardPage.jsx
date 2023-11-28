import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const DashboardPage = () => {
  return (
    <div><h1>DashboardPage</h1>
      <ul>
        <li> <Link to="indicadores">indicadores</Link></li>
        <li> <Link to="Metricas">Metricas</Link></li>
        <li> <Link to="graficos">graficos</Link></li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default DashboardPage