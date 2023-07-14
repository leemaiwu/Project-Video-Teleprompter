import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Script.css'

const Script = ({handleScriptText}) => {

    const defaultScriptText =
        "Bonjour from France! I'm exploring the stunning landscapes and vibrant culture of this beautiful country. There's a cafe just around the corner. I'm just walking around the Tuileries Garden Park now. I will give you all an update at my next stop. Merci! Bye for now."
    
    const [scriptText, setScriptText] = useState(defaultScriptText)

    const handleScriptChange = (event) => {
        const updatedScriptText = event.target.value
        setScriptText(updatedScriptText || defaultScriptText)
        handleScriptText(updatedScriptText || defaultScriptText)
    }

  return (
    <div className='script-container'>
        <div className='script-title'>  
            <h1>Your Teleprompter Script</h1>
        </div>
        <p className='script-edit'>Edit as needed:</p>
        <textarea
            className="teleprompter-text"
            value={scriptText}
            onChange={handleScriptChange}
        />
        <nav>
        <Link to={{ pathname: '/video', state: {scriptText: scriptText || defaultScriptText} }}>
                <button className='record-button'>Record</button>
        </Link>
        </nav>
    </div>
  )
}

export default Script
