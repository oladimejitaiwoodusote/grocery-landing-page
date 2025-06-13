import '../styles/Footer.css'
import { CiYoutube, CiTwitter, CiInstagram, CiFacebook } from "react-icons/ci";

function Footer() {
  return (
    <div className='Footer'>
      <div className='Footer_Top'>
        <label className='newsletter-label'>Newsletter</label>
        <form className='newsletter-form'>
          <div className='newsletter-form-wrapper'>
            <input type='email' placeholder='Enter your email' />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className='Footer_Middle_1'>
        <span className='logo'>
          Easy<span className='logo-green'>Eats</span>
        </span>
      </div>

      <div className='Footer_Middle_2'>
        <span>Home</span>
        <span>About Us</span>
        <span>Service</span>
        <span>Testimonial</span>
        <span>Contact Us</span>
      </div>

      <div className='Footer_Middle_3'>
        <CiYoutube />
        <CiTwitter />
        <CiInstagram />
        <CiFacebook />
      </div>

      <div className='Footer_Bottom'>
        <span>hello@website.com</span>
        <span>838 Cantt Sialkot, ENG</span>
        <span>+02 5421234560</span>
      </div>
    </div>
  )
}

export default Footer
