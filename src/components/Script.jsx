import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Script.css'

const Script = () => {
  return (
    <div className='script-container'>
        <div className='script-title'>  
            <h1>Your Teleprompter Script</h1>
        </div>
        <textarea className='teleprompter-text'>
            Bonjour from France! I'm exploring the stunning landscapes and vibrant culture of this beautiful country. There's a cafe just around the corner. I'm just walking around the Tuileries Garden park now. I will give you all an update at my next stop. Merci! Bye for now.
        </textarea>
        <nav>
            <Link to='/video'>
                <button className='record-button'>Record Video</button>
            </Link>
        </nav>
    </div>
  )
}

export default Script
