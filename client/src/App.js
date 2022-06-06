import logo from './logo.svg';
import './App.css';

import {Route,Routes,BrowserRouter } from "react-router-dom"

import Navbar from './Components/Navbar';
import Posts from './Pages/Posts';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
// import CreateAPost from "./Pages/CreateAPost"

import {loginContext} from "./Helper/Context"
import { useState } from 'react';

import CreateAPost from './Pages/CreateAPost';




function App() {


  const [LoggedIn, setLoggedIn] = useState(false);

  return (
    <loginContext.Provider value={{ LoggedIn, setLoggedIn }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<CreateAPost/> } />
        </Routes>
      </BrowserRouter>
    </loginContext.Provider>
  );
}

export default App;
