import '../styles/Home.css'
import img1 from '../assets/img1.jpg' 
import card from '../assets/card.jpg' 
import img2 from '../assets/img2.jpg' 
import frame from '../assets/frame.jpg' 


function Home() {
  return (
    <div className="Home">
        <div className="Home_Left">
          <div className='Home_Left_Top'>
            <span>Enjoy the Results</span>
            <span>Big Harvest</span>
            <span>With Ease</span>
          </div>
          <div className='Home_Left_Middle'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper dolor lacus, nec
              onare velit cursus sed. Cras in consectur arcu, et auctor mi. Sed purus orci, sodales
              non metus vel, cursus bibendum turpis. Nam sit amet congue orci. Sed a ligula in velit
              porttitor consequat. Duis massa est, elementum id lectus ac, viverra dictum turpis
            </p>
          </div>
          <div className='Home_Left_Bottom'>
            <button>Get Started</button>
          </div>
        </div>
        <div className='Home_Right'>
          <div className='Home_Right_Top'>
            <div className='Home_Right_Top_Left'>
              <div className='Image_Card'>
                <div className='block'></div>
                <img src={img1} alt="img1"/>
              </div>
              <div className='Image_Card'>
                <div className='block'></div>
                <img src={card} alt="card"/>
              </div>
            </div>
            <div className='Home_Right_Top_Right'>
              <div className='Image_Card'>
                <div className='block'></div>
                <img src={img2} alt="img2"/>
              </div>
              <div>
                <div className="frame-container">
                  <img src={frame} alt="frame" />
                </div>
              </div>
            </div>            
          </div>
          <div className='Home_Right_Bottom'>
            <button>&lt;</button>
            <button>&gt;</button>
          </div>
        </div>
    </div>
  )
}

export default Home