import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { TodoForm } from './components/TodoForm'

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container"></div>
      <TodoForm />
    </>
  )
}

export default App
