import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineChevronLeft } from 'react-icons/hi'
import { FaPlay } from 'react-icons/fa'
import '../styles/Video.css'
import video from '../video/mobile_travel_vlog.mp4'

const Video = ({ scriptText }) => {
  const videoRef = useRef(null)
  const teleprompterRef = useRef(null)
  const containerRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showPlayButton, setShowPlayButton] = useState(true)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isUserScroll, setIsUserScroll] = useState(false)

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

  const handleScroll = () => {
    if (!isUserScroll) {
      videoRef.current.pause()
      setIsPlaying(false)
      setScrollPosition(teleprompterRef.current.scrollTop)
    }
    setIsUserScroll(false)
  }

  useEffect(() => {
    const teleprompter = teleprompterRef.current
    const container = containerRef.current

    const totalDuration = 18 * 1000 // length of video
    const teleprompterHeight = teleprompter.scrollHeight - teleprompter.clientHeight
    const scrollRate = teleprompterHeight / totalDuration

    let animationFrameId
    let animationStartTime

    // eslint-disable-next-line
    const animateScroll = (timestamp) => {
      if (!animationStartTime) {
        animationStartTime = timestamp
      }

      const elapsedTime = timestamp - animationStartTime
      const newScrollPosition = scrollRate * elapsedTime

      teleprompter.scrollTop = newScrollPosition

      if (elapsedTime < totalDuration && isPlaying) {
        animationFrameId = requestAnimationFrame(animateScroll)
      } else {
        cancelAnimationFrame(animationFrameId)
        setIsPlaying(false)
      }
    }

    teleprompter.scrollTop = scrollPosition
    teleprompter.addEventListener('scroll', handleScroll)

    container.addEventListener('scroll', handleScroll, { capture: true })

    return () => {
      cancelAnimationFrame(animationFrameId)
      teleprompter.removeEventListener('scroll', handleScroll)
      container.removeEventListener('scroll', handleScroll, { capture: true })
    }
    // eslint-disable-next-line
  }, [isPlaying, scrollPosition, isUserScroll])

  return (
    <div className='video-wrapper' ref={containerRef}>
      <nav>
        <Link to={{ pathname: '..', state: { scriptText } }}>
          <HiOutlineChevronLeft className='back-icon-light' />
        </Link>
      </nav>
      <nav>
        <Link to={{ pathname: '..', state: { scriptText } }}>
          <HiOutlineChevronLeft className='back-icon-dark' />
        </Link>
      </nav>

      <div className='teleprompter' ref={teleprompterRef} onClick={handleVideoClick} onScroll={() => setIsUserScroll(true)}>
        {scriptText}
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
