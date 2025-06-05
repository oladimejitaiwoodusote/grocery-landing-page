import '../styles/Clients.css'
import Client1 from '../assets/Client1.jpg' 
import Client2 from '../assets/Client2.jpg' 
import Client3 from '../assets/Client3.jpg' 


function Clients() {
  return (
    <div className='Clients'>
        <div className='Clients_Left'>
            <img src={Client1} alt="Client1"/>
            <img src={Client2} alt="Client2"/>
        </div>
        <div className='Clients_Right'>
        <div className='Clients_Right_Top'>
          <span>
            What Our <span className='highlight'>Clients Say</span>
          </span>
          <span>About Us</span>
        </div>
            <div className='Clients_Right_Middle'>
               <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               Sed semper dolor lacus, nec ornare velit cursus sed. 
               Cras in consectetur arcu, et auctor mi. 
               Sed purus orci, sodales non metus vel, cursus bibendum turpis. 
               Nam sit amet congue orci. Sed a ligula in velit porttitor consequat. 
               Duis massa est, elementum id lectus ac, viverra dictum turpis. 
               Pellentesque mollis vestibulum neque vel molestie. Nullam quis lacinia ipsum. Fusce at sapien risus. 
               </p>
            </div>
            <div className='Clients_Right_Bottom'>
                <img src={Client3} alt="Client3"/>
            </div>
        </div>
    </div>
  )
}

export default Clients