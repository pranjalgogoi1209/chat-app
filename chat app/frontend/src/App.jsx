import { useState } from 'react'

import './App.css'
import MainContainer from './components/MainContainer'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Login from './components/Login'
import { RouterProvider } from 'react-router'
import Welcome from './components/Welcome'
import ChatArea from './components/ChatArea'

function App() {
  let [user, setUser] = useState("");
  let [userDetails, setUserDetails] = useState([]);
  console.log(userDetails)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/signup"
          element={<Login setUser={setUser} />}></Route>
        <Route
          path="/"
          element={<MainContainer user={user} userDetails={userDetails} setUserDetails = {setUserDetails} />}>
          <Route
            index
            element={<Welcome user ={userDetails.name} />}></Route>
          <Route
            path="chat"
            element={<ChatArea />}></Route>
        </Route>
      </>
    )
  );

  return (
    <div className='app'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
