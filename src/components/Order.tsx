import '../styles/Order.css'
import Order1 from '../assets/Order1.jpg' 
import Order2 from '../assets/Order2.jpg' 
import Order3 from '../assets/Order3.jpg' 


function Order() {
  return (
    <div className='Order'>
        <div className='Order_Top'>
            <span className='line1'>Order Today And</span>
            <span className='line2'>
                <span className='highlight'>Save Up To</span> 70%!
            </span>
        </div>
        <div className='Order_Middle'>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed semper dolor lacus, nec ornare velit cursus sed. 
                Cras in consectetur arcu, et auctor mi. 
            </p>
        </div>
        <div className='Order_Bottom'>
            <img src={Order1} alt="Order1"/>
            <img src={Order2} alt="Order2"/>
            <img src={Order3} alt="Order3"/>
        </div>
    </div>
  )
}

export default Order