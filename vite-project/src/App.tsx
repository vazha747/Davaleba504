import { useState } from 'react'
import './App.css'
import Dashboard from './assets/pages/dashboard'
import Sidebar from './assets/pages/sidebar'
function App() {

  return (
<div className='flex bg-bodyBg h-screen' >
  <Sidebar />
  <Dashboard />
</div>
  )
}

export default App
