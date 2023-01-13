import React from 'react'
import { Routes, Route } from "react-router-dom"
import NavBar from '../NavBar/NavBar'
import Assembly from '../Pages/About Us/Assembly/Assembly'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import ViewEntireTeam from '../Pages/About Us/Sections/View Entire Team/ViewEntireTeam'



const Router = () => {

    return (
        <div>
            <NavBar />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}>
                </Route>
                <Route
                    path="/aboutus"
                    element={<Assembly />}>
                </Route>
                <Route
                    path="/login"
                    element={<Login />}>
                </Route>
                <Route
                    path="/register"
                    element={<Register />}>
                </Route>
                <Route
                    path="/viewentireteam"
                    element={<ViewEntireTeam />}>
                </Route>
            </Routes>
        </div>
    )
}

export default Router