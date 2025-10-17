import React, { useState } from 'react'
import './Resturent.css'
import burger from '../Resturent Project/newBurger.png'

const Resturent = () => {
  const [inputdata, setinputdata] = useState({
    name: "",
    email: "",
    textarea: "",

  })

  function onchangehandler(e) {
    const { value, name } = e.target
    setinputdata({ ...inputdata, [name]: value })
  }

  function submithandler(e) {
    e.preventDefault()
    alert("You data is uploded")
    setinputdata({
      name: "",
      email: "",
      textarea: "",

    })
  }
  return (
    <>
      <div className='container'>

        <div className='first'>
          <div>
            <h1>WELLCOME TO ❤️</h1>
            <h1 id='head'>MARWAT RESTURENT</h1>
          </div>
          <div>
            <p style={{ maxWidth: "550px", fontSize: "19px" }}>Marwat Restaurant is a welcoming dining spot known for its rich flavors and warm hospitality. We specialize in serving freshly prepared dishes that blend traditional taste with modern presentation. Our cozy ambiance and attentive service make every visit memorable.Whether you’re here for a family dinner or a quick lunch, we ensure quality in every bite. Experience the true taste of freshness at Marwat Restaurant.</p>
          </div>
        </div>
        <div>
          <img src={burger} />
        </div>

      </div>
      {/* <div className='second'>
          <h1>ABOUT</h1>
      </div> */}
      <div className='about'>
        <div className='text'>
          <h1>ABOUT:-</h1>
          <p>We serve fresh, flavorful dishes inspired by authentic Pakistani and regional Marwat cuisine.
            Our warm and inviting atmosphere makes every meal feel like home.
            From rich curries to sizzling BBQ, every bite is made with love and quality ingredients.
            Perfect for family dinners, friends’ gatherings, or special celebrations.
            Come and experience the true taste of hospitality at Marwat Restaurant.</p>
        </div>
        <div className='pic'>
          {/* <img src='https://acropolisgrill.com/wp-content/uploads/2018/04/chattanooga_outdoor_dining.jpg'/> */}
        </div>
      </div>
      <div className='client'>
        <h1>CLIENTS</h1>
      </div>
      <div className='clientpics'>
        <div className='box'>
          <img src='https://www.artauk.com/blog/wp-content/uploads/2024/08/Customer-Review.png' />
          <h3>Sophia</h3>
          <p>This Resturent is very Delicious</p>
        </div>

        <div className='box'>
          <img src='https://culinasydney.com.au/wp-content/uploads/2020/02/18-12_mensenumfrage.jpg' />
          <h3>William</h3>
          <p>This Resturent is very Delicious</p>
        </div>

        <div className='box'>
          <img src='https://restaurantengine.com/wp-content/uploads/2013/04/Restaurant-Customer-Loyalty.jpg' />
          <h3>Alexander</h3>
          <p>This Resturent is very Delicious</p>
        </div>

      </div>

      <div className='menu'>
        <h1>MENU</h1>
      </div>

      <div className='menupic'>
        <div className='menubox'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBrsswSWK6sU0-Qczvehd0lz7Yoi_FBgU1HA&s' />
          <h2 style={{ marginTop: "-8px" }}>Burger</h2>
          <button>Order</button>
        </div>

        <div className='menubox'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/1200px-Pizza-3007395.jpg' />
          <h2 style={{ marginTop: "-6px" }}>Pizza</h2>
          <button>Order</button>
        </div>

        <div className='menubox'>
          <img src='https://images.immediate.co.uk/production/volatile/sites/30/2018/06/One-pot-spiced-chicken-1763078.jpg?quality=90&resize=708,643' />
          <h2 style={{ marginTop: "-6px" }}>Chicken</h2>
          <button>Order</button>
        </div>
      </div>

      <div className='secondmenupics'>

        <div className='secondpics'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL7T6rB5grJqxnQJSwCUfxMKiwaThZvOp6Kg&s' />
          <h2>Fried Chicken</h2>
          <button>Order</button>
        </div>

        <div className='secondpics'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSW_kJx48BME6TWDKN2eygAq_vRaST7yVQ6Qc-K39W6Ae6soKlqvNBpggEKyYZL_vRA60&usqp=CAU' />
          <h2>Fried Chicken</h2>
          <button>Order</button>
        </div>

        <div className='secondpics'>
          <img src='https://i.pinimg.com/736x/4c/81/07/4c81076658eee03e7f532f3104b636f5.jpg' />
          <h2>Fried Chicken</h2>
          <button>Order</button>
        </div>

      </div>

      <div className='contact'>
        <h1 style={{ textDecoration: "underline" }}>Contact Us</h1>
      </div>

      <div className='inputdata'>
        <form onSubmit={submithandler}>
          <div className='typey'>
            <p>Enter Your Name</p>
            <input type='text' placeholder='Enter Your Name' value={inputdata.name} name='name' onChange={onchangehandler} />
          </div>
          <div className='typey'>
            <p>Enter Your Email</p>
            <input type='email' placeholder='Enter Your Email' value={inputdata.email} name='email' onChange={onchangehandler} />
          </div>
          <div className='typey'>
            <p>Enter Your Message</p>
            <textarea rows={5} cols={35} placeholder='What You Want' value={inputdata.textarea} name='textarea' onChange={onchangehandler} />
          </div>
          <div className='btny'>
            <button>Submit</button>
          </div>
        </form>
      </div>

      {/*--------------------Footer------------------*/}
      <div className='foot'>
        <div className='flexy'>
          <div className='appliences'>
            <h2>APPLIENCE</h2>
            <p>OVENS</p>
            <p>RANGES</p>
            <p>COOKTOPS</p>
            <p>DISHWASSHER</p>
            <p>REFRIGRATOR</p>
            <p>FIREPLACE</p>
            <p>SMART BATHROOM</p>
          </div>
          <div className='AUDOVISUAL'>

            <h2>AUDOVISUAL</h2>
            <p>TELEVISIONS</p>
            <p>ENTERTAINMENT SYSTEM</p>
            <p>NAVIGATION SYSTEM</p>
            <p>AUDIO</p>
            <p>ACCESSRIES</p>

          </div>

          <div className='cameras'>

            <h2>CAMERAS</h2>
            <p>VECHICALE ABSERVATION</p>
            <p>ACCESSRRIES</p>

          </div>

          <div className='energy'>

            <h2>ENERGY</h2>
            <p>NET-ZERO SOLAR</p>
            <p>INVERTERS</p>
            <p>CABLES</p>
            <p>ACCESSORIES</p>

          </div>

        </div>
        <div className='flexaa'>
          <div>
            <h2>SERVICES</h2>
            <p>Net Zearo</p>
            <p>Design</p>
            <p>Robotics</p>
          </div>
          <div>
            <h2>OUR STORY</h2>
            <p>Our Story</p>
            <p>Global Infrastructure</p>
            <p>work for Us</p>
          </div>
          <div>
            <h2>SUPPORT</h2>
            <p>Locate and Dealer</p>
            <p>Register products</p>
            <p>Manual & Downloads</p>
            <p>Contact Us</p>
          </div>
          <div>
            <h2>MEDIA</h2>
            <p>Facebook</p>
            <p>Whatsapp</p>
            <p>Instegram</p>
          </div>
        </div>

        <div className='icons'>
          <div>
            <a href='https://www.instagram.com/'>
              <i className="fa-brands fa-instagram" style={{ backgroundColor: "#E1306C" }}></i>
            </a>
          </div>
          <div>
            <a href='https://twitter.com/'>
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
          <div>
            <a href="https://pk.linkedin.com/" target="_blank">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <div>
            <a href='https://web.facebook.com/?_rdc=1&_rdr#'>
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </div>

        </div>
      </div>
    </>
  )
}

export default Resturent