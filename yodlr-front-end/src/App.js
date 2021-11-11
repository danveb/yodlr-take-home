import React, { useState, useEffect } from 'react' 
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import UsersContext from './context/UsersContext'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SignupForm from './components/SignupForm'
import Admin from './components/Admin'
import axios from 'axios';

const BASE_URL = "http://localhost:3000";

function App() {
  // users, setUsers with state 
  const [users, setUsers] = useState(null) 

  // useEffect to get initial user data from state if users is null 
  useEffect(() => {
    if(!users) {
      getUsers() 
    }
  }, [users])

  // getUsers()
  const getUsers = async () => {
    try {
      let response = await axios.get(`${BASE_URL}/users`) 
      setUsers(response.data) 
    } catch(err) {
      console.log(err)
    }
  }

  // handleAddUser() -> adds new users 
  const handleAddUser = async (userData) => {
    try {
      await axios.post(`${BASE_URL}/users`, userData) 
      getUsers() 
    } catch(err) {
      console.log(err) 
    }
  }

  // handleUpdateUser() -> updates user
  const handleUpdateUser = async (userData) => {
    try {
      await axios.put(`${BASE_URL}/users/${userData.id}`, userData)
      getUsers() 
    } catch(err) {
      console.log(err) 
    }
  }

  // handleDeleteUser() -> deletes user 
  const handleDeleteUser = async (userData) => {
    try {
      await axios.delete(`${BASE_URL}/users/${userData.id}`, userData) 
      getUsers()
    } catch(err) {
      console.log(err) 
    }
  }
  
  return (
    <div className="App">
      <BrowserRouter>
          <UsersContext.Provider value={{ users, handleAddUser, handleUpdateUser, handleDeleteUser }}>
          <NavBar /> 
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
          </UsersContext.Provider>
        </BrowserRouter>
    </div>
  );
}

export default App;
