import React from 'react'
import { FaTypo3 , FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

export default function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form action="">
                        <input type="email" name="email" placeholder='Your Email' className="footer-input" />
                        <Button buttonStyle='btn--outline'>Subsrcibe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h1>About us</h1>
                        <Link to='/sign-up'>How to it Works</Link>
                        <Link to='/'>Testimonials</Link> 
                        <Link to='/sign-up'>Careers</Link> 
                        <Link to='/sign-up'>Investors</Link> 
                        <Link to='/sign-up'>Terms of Service</Link> 
                    </div>
                    <div className="footer-link-items">
                        <h1>Conatct us</h1>
                        <Link to='/sign-up'>How to it Works</Link>
                        <Link to='/'>Testimonials</Link> 
                        <Link to='/sign-up'>Careers</Link> 
                        <Link to='/sign-up'>Investors</Link> 
                        <Link to='/sign-up'>Terms of Service</Link> 
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h1>About us</h1>
                        <Link to='/sign-up'>How to it Works</Link>
                        <Link to='/'>Testimonials</Link> 
                        <Link to='/sign-up'>Careers</Link> 
                        <Link to='/sign-up'>Investors</Link> 
                        <Link to='/sign-up'>Terms of Service</Link> 
                    </div>
                    <div className="footer-link-items">
                        <h1>Conatct us</h1>
                        <Link to='/sign-up'>How to it Works</Link>
                        <Link to='/'>Testimonials</Link> 
                        <Link to='/sign-up'>Careers</Link> 
                        <Link to='/sign-up'>Investors</Link> 
                        <Link to='/sign-up'>Terms of Service</Link> 
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                   <div className="footer-logo">
                       <Link to='/' className="social-logo">
                           TRVL <FaTypo3 className='fa-typo3'/>
                       </Link>
                   </div>
                   <small className="website-rights">
                       TRVL @ 2021
                   </small>
                   <div className="social-icons">
                       <Link className="social-icon-link facebook"
                       to='/'
                       target='_blank'
                       aria-label='Facebook'
                       >
                           <FaFacebook className="fa-facebook"/>
                       </Link>
                       <Link className="social-icon-link instagram"
                       to='/'
                       target='_blank'
                       aria-label='Instagram'
                       >
                           <FaInstagram className="fa-instagram"/>
                       </Link>
                       <Link className="social-icon-link twitter"
                       to='/'
                       target='_blank'
                       aria-label='Twitter'
                       >
                           <FaTwitter className="fa-twitter"/>
                       </Link>
                       <Link className="social-icon-link youtube"
                       to='/'
                       target='_blank'
                       aria-label='Youtube'
                       >
                           <FaYoutube className="fa-youtube"/>
                       </Link>
                       <Link className="social-icon-link linkedin"
                       to='/'
                       target='_blank'
                       aria-label='Linkedin'
                       >
                           <FaLinkedin className="fa-linkedin"/>
                       </Link>
                   </div>
                </div>
            </section>
        </div>
    )
}
