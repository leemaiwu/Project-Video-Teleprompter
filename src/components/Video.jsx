import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineChevronLeft } from 'react-icons/hi'
import { FaPlay } from 'react-icons/fa'
import '../styles/Video.css'
import video from '../video/mobile_travel_vlog.mp4'

const Video = () => {

    const videoRef = useRef(null)
    const [ isPlaying, setIsPlaying ] = useState(false)
    const [showPlayButton, setShowPlayButton] = useState(true)

    const handleVideoClick = () => {
        let video = videoRef.current
        if (isPlaying) {
            video.pause()
        } else {
            video.play()
        }
        setIsPlaying(!isPlaying)
    }

    const handleVideoPlay = () => {
        setIsPlaying(true)
        setShowPlayButton(false)
    }

    const handleVideoPause = () => {
        setIsPlaying(false)
        setShowPlayButton(true)
    }

    return (
    <div className='video-wrapper'>
        <nav>
            <Link to='..'>
                <HiOutlineChevronLeft className='back-icon-light' />
            </Link>
        </nav>
        <nav>
            <Link to='..'>
                <HiOutlineChevronLeft className='back-icon-dark' />
            </Link>
        </nav>
        <video 
            className='video-self'
            ref={videoRef}
            onClick={handleVideoClick}
            onPlay={handleVideoPlay}
            onPause={handleVideoPause}
            playsInline
        >
            <source src={video} type='video/mp4' />
        </video>
        {!isPlaying && showPlayButton && (
            <div className={`play-button ${showPlayButton ? 'fade-in' : ''}`} onClick={handleVideoClick}>
                <FaPlay className='play-icon' />
            </div>
        )}
    </div>
    )
}

export default Video
