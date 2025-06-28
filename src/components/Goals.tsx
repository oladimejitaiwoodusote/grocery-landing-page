import '../styles/Goals.css'
import Goals1img from '../assets/Goals1img.jpg' 
import Goals2img from '../assets/Goals2img.jpg' 
import Goals2icon from '../assets/Goals2icon.jpg' 
import Goals3img from '../assets/Goals3img.jpg' 
import Goals3icon from '../assets/Goals3icon.jpg' 



function Goals() {
  return (
    <div className='Goals' id="goals">
        <div className='Goals_Left'>
            <div className='Goals_Left_Top'>
                <span><span className='highlight'>Goals</span> of Our</span>
                <span>Wholesale</span>
                <span>Company</span>
            </div>
            <div className='Goals_Left_Bottom'>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed semper dolor lacus, nec ornare velit cursus sed. 
                Cras in consectetur arcu, et auctor mi. 
                Sed purus orci, sodales non metus vel Caras insdk.
                </p>
            </div>
        </div>
        <div className='Goals_Right'>
            <div className='Goals_Right_Top'>
                <img src={Goals1img} alt='Goals1img'/>
            </div>
            <div className='Goals_Right_Middle'>
                <div className='Goals_Image_Container'>
                    <img src={Goals2img} alt='Goals2img'/>
                    <img className='icon-overlay' src={Goals2icon} alt='Goals2icon'/>
                </div>
            </div>
            <div className='Goals_Right_Bottom'>
                <div className='Goals_Image_Container'>
                    <img src={Goals3img} alt='Goals3img'/>
                    <img className='icon-overlay' src={Goals3icon} alt='Goals3icon'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Goals