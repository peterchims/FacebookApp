import React from 'react';
import './Layout.css';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

// Pages..................................
import Login from '../pages/login/login';
import Signup from '../pages/signup/signup';
import Home from '../pages/home/home';
import Profile from '../pages/profile/profile';
import Chatbox from '../pages/chatbox/chatbox';

// Components.................................
import Nav from '../component/navbar/nav';
import Leftbar from '../component/leftbar/leftbar';
import Right from '../component/rightbar/rightbar';

function Layout() {
  // Feed component to act as a layout with Outlet for nested routes
  const Feed = () => {
    return (
      <>
        <Nav />
        <main>
            <Leftbar />
          <div className="container">
            <Outlet /> {/* Outlet renders the matched child route */}
          </div>
          <Right />
        </main>
      </>
    );
  };

  return (
    <Router>
      <Routes>
        {/* Feed is a layout component */}
        <Route path="/" element={<Feed />}>
        <Route index element={<Home />} /> 
          {/* Nested Routes will be rendered inside Feed's Outlet */}
          <Route path="home" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/chatbox/:id" element={<Chatbox />} />
        </Route>
        
        {/* Login and Signup are separate pages, not part of the Feed layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Fallback for undefined routes */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default Layout;

