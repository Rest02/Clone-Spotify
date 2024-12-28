import React from 'react'
import {Route, Router, Routes} from 'react-router-dom'
import HomePage from '../src/pages/HomePage'

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<HomePage/>} ></Route>
    </Routes>
  )
}

export default App