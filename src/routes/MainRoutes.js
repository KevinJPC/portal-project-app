import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../layout/Home'
import Login from '../pages/Login'


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route index element={<Login />} />
      </Route>
      {/* <Route path="/admin">

      </Route>
      <Route path="/user">

      </Route>
      <Route path="/admin">

      </Route> */}
    </Routes>
  )
}

export default MainRoutes