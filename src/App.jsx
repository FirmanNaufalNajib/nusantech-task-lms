import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListMateri from './pages/ListMateri'
import FilterPages from './pages/FilterPages'
function App() {
  return (
    <>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListMateri/>} />
        <Route path='/materi-pages' element={<FilterPages/>} />
      </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
