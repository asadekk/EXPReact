import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Quiz from './Quiz'
import React from 'react'

function Layout() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Quiz' element={<Quiz />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Layout