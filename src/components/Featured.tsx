import '../styles/Featured.css'
import Featured1 from '../assets/Featured1.jpg' 
import Featured2 from '../assets/Featured2.jpg' 
import Featured3 from '../assets/Featured3.jpg' 
import Featured4 from '../assets/Featured4.jpg' 



function Featured() {
  return (
    <div className='Featured'>
        <div className='Featured_Left'>
            <span>Our</span>
            <span className='highlight-text'>Featured</span>
        </div>
        <div className='Featured_Right'>
            <div className='Featured_Image_Wrapper'>
              <img src={Featured1} alt='Featured1'/>
            </div>
            <div className='Featured_Image_Wrapper'>
              <img src={Featured2} alt='Featured2'/>
            </div>
            <div className='Featured_Image_Wrapper_highlight-card'>
              <img src={Featured3} alt='Featured3'/>
            </div>
            <div className='Featured_Image_Wrapper'>
              <img src={Featured4} alt='Featured4'/>
            </div>
        </div>
    </div>
  )
}

export default Featured