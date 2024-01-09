import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import PayoutsPage from './components/PayoutsPage'

function App() {
  return (
    <div className='flex'>
        <Sidebar></Sidebar>
        <PayoutsPage></PayoutsPage>
    </div>
  )
}

export default App