import React, { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Video from './components/Video'
import Script from './components/Script'

function App() {

  const [scriptText, setScriptText] = useState('')

  return (
    <div className='App'>
      <Routes>
        <Route index element={<Script handleScriptText={setScriptText} />} />
        <Route path='/video' element={<Video scriptText={scriptText} />}/>
      </Routes>
    </div>
  )
}

export default App
