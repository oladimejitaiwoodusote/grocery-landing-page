import '../styles/AboutUs.css'
import Icon1 from '../assets/Icon1.jpg' 
import Icon2 from '../assets/Icon2.jpg' 
import img3 from '../assets/img3.jpg'
import frame2 from '../assets/Frame2.jpg'



function AboutUs() {
  return (
    <div className='AboutUs' id ="about">
        <div className='AboutUs_Left'>
            <div className='AboutUs_Left_Top'>
                <span>Finest</span>
                <span>Food</span>
            </div>
            <div className='AboutUs_Left_Middle'>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper dolor lacus, nec
                onare velit cursus sed. Cras in consectur arcu, et auctor mi. Sed purus orci, sodales
                non metus vel, cursus bibendum turpis. Nam sit amet congue orci.
                </p>
            </div>
            <div className='AboutUs_Left_Bottom'>
                <div className='AboutUs_Left_Bottom_Left'>
                    <div className='AboutUs_Left_Bottom_Left_Icon'>
                        <img src={Icon1} alt="Icon1"/>
                    </div>
                    <div className='AboutUs_Left_Bottom_Left_H'>
                        <span>Our Mission</span>
                    </div>
                    <div className='AboutUs_Left_Bottom_Left_P'>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus henderit suscipit egestas nunc eget
                        </p>
                    </div>
                </div>
                <div className='AboutUs_Left_Bottom_Right'>
                    <div className='AboutUs_Left_Bottom_Right_Icon'>
                            <img src={Icon2} alt="Icon2"/>
                        </div>
                        <div className='AboutUs_Left_Bottom_Right_H'>
                            <span>Our Vision</span>
                        </div>
                        <div className='AboutUs_Left_Bottom_Right_P'>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus henderit suscipit egestas nunc eget
                            </p>
                        </div>
                </div>
            </div>
        </div>
        <div className='AboutUs_Right'>
            <img src={img3} alt='img3'/>
            <img src={frame2} alt='frame2'/>
        </div>
    </div>
  )
}

export default AboutUs