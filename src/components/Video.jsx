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
    const teleprompterRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [showPlayButton, setShowPlayButton] = useState(true)
    let scrollInterval = null

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
        startScrolling()
    }

    const handleVideoPause = () => {
        setIsPlaying(false)
        setShowPlayButton(true)
        stopScrolling()
    }

    const startScrolling = () => {
        if (scrollInterval === null) {
            scrollInterval = setInterval(() => {
                if (teleprompterRef.current) {
                    teleprompterRef.current.scrollTop += 1
                }
            }, 40)
        }
    }

    const stopScrolling = () => {
        clearInterval(scrollInterval)
        scrollInterval = null
    }

    useEffect(() => {
        videoRef.current.addEventListener('play', handleVideoPlay)
        videoRef.current.addEventListener('pause', handleVideoPause)

        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener('play', handleVideoPlay)
                // eslint-disable-next-line
                videoRef.current.removeEventListener('pause', handleVideoPause)
            }
            stopScrolling()
        }
    // eslint-disable-next-line
    }, [])

  return (
    <div className="video-wrapper"  ref={containerRef}>
        <nav>
            <Link to="..">
                <HiOutlineChevronLeft className="back-icon-dark" />
            </Link>
        </nav>

        <div className="teleprompter" ref={teleprompterRef} onClick={handleVideoClick}>
            <br/>
            {teleprompterText}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>

        <video className="video-self" ref={videoRef} playsInline onClick={handleVideoClick}>
            <source src={video} type="video/mp4" />
        </video>

        {!isPlaying && showPlayButton && (
            <div className={`play-button ${showPlayButton ? 'fade-in' : ''}`} onClick={handleVideoClick}>
            <FaPlay className="play-icon" />
            </div>
        )}
    </div>
  )
}

export default Video
