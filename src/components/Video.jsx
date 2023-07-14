import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineChevronLeft } from "react-icons/hi";
import '../styles/Video.css'
import video from '../video/mobile_travel_vlog.mp4'

const Video = () => {

  return (
    <div className='video-wrapper'>
    <nav>
        <Link to='..'>
            <HiOutlineChevronLeft className="back-icon" />
        </Link>
    </nav>
        <video className="video-self" controls>
            <source src={video} type="video/mp4" />
        </video>
    </div>
  )
}

export default Video
