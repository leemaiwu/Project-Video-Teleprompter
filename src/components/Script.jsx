import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import TextContext from '../context/TextContext'
import '../styles/Script.css'

const Script = () => {

    const {teleprompterText, setTeleprompterText} = useContext(TextContext)

  return (
    <div className='script-container'>
        <div className='script-title'>  
            <h1>Teleprompter Script</h1>
        </div>
        <p className='script-edit'>Customize your teleprompter text:</p>
        <textarea
            className="teleprompter-text"
            value={teleprompterText}
            onChange={(e) => setTeleprompterText(e.target.value)}
        />
        <nav>
        <Link Link to={`/video?text=${encodeURIComponent(teleprompterText)}`}>
            <button className='record-button' >Record</button>
        </Link>
        </nav>
    </div>
  )
}

export default Script
