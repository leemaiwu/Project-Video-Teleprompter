import './App.css'
import { Route, Routes } from 'react-router-dom'
import Video from './components/Video'
import Script from './components/Script'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route index element={<Script />} />
        <Route path='/video' element={<Video />}/>
      </Routes>
    </div>
  )
}

export default App
