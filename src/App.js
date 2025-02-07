import React from 'react'
import "./App.css"
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom' 
import Dashboard from './Dashboard'
import Settings from './Settings'
import Parent from './Parent'
import Child from './Child'

function App() {
  
  return (
    <div>

      <Router>
      <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/settings' element={<Settings/>}/>
      <Route path='/parent' element={<Parent/>}/>
      <Route path='/child' element={<Child/>}/>

      </Routes>
      </Router>
       
    </div>
  )
}

export default App

