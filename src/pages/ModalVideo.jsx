import React from 'react'
import Video from '../components/Video'
import { TextContextProvider } from '../context/TextContext'
import '../styles/ModalVideo.css'

const ModalVideo = () => {

    return (
        <TextContextProvider>
            <div className='video-modal'>
                <Video />
            </div>
        </TextContextProvider>
    )
}

export default ModalVideo
