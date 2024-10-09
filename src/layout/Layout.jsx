import React from 'react'
import './Layout.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/login/login'
import Signup from '../pages/signup/signup'

function Layout(){

    return(
     <>
     <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
     
      </Routes>
    </Router>
     </>
    )
}

export default Layout
