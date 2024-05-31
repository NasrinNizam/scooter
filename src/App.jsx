import logo from './assets/images/logo.png' 
import './App.css'

function App() {
  

  return (
   <>
   {/* === navbar start ==== */}

   <nav className='navbar'>
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
    <div className="menu">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
    <div className="book">
      <ul>
        <li><a href="#">Login</a></li>
        <li><a href="#">Book Scooter</a></li>
      </ul>
    </div>
   </nav>


   {/* ===== navbar end ==== */}
   {/* ===== banner start == */} 
   
   <div className="container">
    <h2>Fair price ride</h2>
    <h1>Rent our <span>Scooter</span></h1>
    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
    <div className="data">
      <h6><a href="#">Location</a></h6>
      <div className="line"></div>
      <h6><a href="#">Pickup Date</a></h6>
      <div className="line"></div>
      <h6><a href="#">Kilometers</a></h6>
      <div className="line"></div>
      <h6><a href="#">Book Scooter</a></h6>
    </div>
   </div>
    {/* ==== text end ===== */}
   <div className="image">
    <div className="vector6">
    <img src={'/public/vector6.png'} alt="one" />
    <div className="vector4">
      <img src={'/public/vector4.png'} alt="two" />
      <div className="orange">
        <img src={'/public/orange.png'} alt="three" />
        <div className="cartoon">
          <img src={'/public/cartoon.png'} alt="four" />
        </div>
      </div>
    </div>
    </div>
   </div>
    {/* ====== bike image end==== */}
   <div className="leftLeaf">
    <img src={'/public/left.png'} alt="left" />
   </div>

   <div className="rightLeaf">
    <img src={'/public/right.png'} alt="right" />
   </div>

   <div className="price">
    <h4> Starting From </h4>
    <h2> $40 </h2>
   </div>

   <div className="circle1"></div>
   <div className="circle2"></div>
   
   {/* ==== banner part end ====== */}
   
   </>
  )
}

export default App
