import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import { HiOutlineChevronLeft } from 'react-icons/hi'
import { FaPlay } from 'react-icons/fa'
import '../styles/Video.css'
import video from '../video/mobile_travel_vlog.mp4'

const Video = () => {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const teleprompterText = searchParams.get('text')

    const videoRef = useRef(null)
    const containerRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [showPlayButton, setShowPlayButton] = useState(true)

    const handleVideoClick = () => {
        if (isPlaying) {
            videoRef.current.pause()
        } else {
            videoRef.current.play()
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

    useEffect(() => {
        console.log("teleprompterText in Video:", teleprompterText)
    }, [teleprompterText])

    return (
        <div className='video-wrapper' ref={containerRef}>
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

            <div className="teleprompter" onClick={handleVideoClick}>
                {teleprompterText}
            </div>

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
