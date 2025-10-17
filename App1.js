import React from 'react'
import Navebary from './Resturent Project/Navebary'
import Resturent from './Resturent Project/Resturent'
import Aboutrest from './Resturent Project/Aboutrest'
import Our_chef from './Resturent Project/Our_chef'
import Story from './Resturent Project/Story'
import Book_Table from './Resturent Project/Book_Table'
import Gallery from './Resturent Project/Gallery'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Navebary />
        <Routes>
          <Route path='/' element={<Resturent />} />
          <Route path='/about' element={<Aboutrest />} />
          <Route path='/chef' element={<Our_chef />} />
          <Route path='/story' element={<Story />} />
          <Route path='/book_table' element={<Book_Table />} />
          <Route path='gallery' element={<Gallery />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
