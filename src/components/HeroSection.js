import React from 'react'
import { Button } from './Button'
import '../App.css'
import './HeroSection.css'
import { FaPlayCircle } from 'react-icons/fa'

export default function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='./videos/video-2.mp4' autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for ?</p>
            <div className="hero-btns">
                <Button  className='btns' buttonSize='btn--large' buttonStyle='btn--outline'>
                    GET STARTED
                </Button>
                <Button  className='btns' buttonSize='btn--large' buttonStyle='btn--primary'>
                    WATCH TRAILER <FaPlayCircle className='fa-play-circle'/>
                </Button>
            </div>
        </div>
    )
}
