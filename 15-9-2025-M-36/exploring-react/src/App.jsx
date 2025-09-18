import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Friends from './Friends'
import './App.css'
import { Suspense } from "react";


const fetchFriends = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
}

function App() {
 
  const friendsPromise = fetchFriends();

  return (
    <>
      
      <h3>MY FIRST REACT PROJECTS</h3>

      <Suspense fallback = {<h3>PLEASE WAIT...</h3>}>
           <Friends friendsPromise={friendsPromise} ></Friends>
      </Suspense>
      
    </>
  )
}

export default App
