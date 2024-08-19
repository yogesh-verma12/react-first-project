import React from 'react'
import ConProps from './ConProps'



function Contact() {
  return (
    <>
         <div className="spacer"></div>
      <section className='about-page'>
        <div className="container">
            <div className='row'>
               <div className='about-banner text-center text-white'>
                <h2>Contact Us</h2>
                <h4>Home / Contact us</h4>
               </div> 
            </div>
        </div>
      </section>

      {/* contact us section start */}
      <section className='contact-us'>
        <div className='container'>
          <div className='row'>
                <div className='col-lg-6 col-12 col-sm-12 col-md-6'>
                <div className='contact-heading'>
                <h2>We're Here To Provide <br/> 24X7 Support</h2>
                </div>
                </div>
                <div className='col-lg-6 col-12 col-sm-12 col-md-6'>
                <div className='contact-para'>
                <p>Aenean et tortor at risus. Rutrum tellus pellentesque eu tincidunt. urna, tempus ac lectus egravida bibendum nisi. Nulla consequat turpis vitae purus ultricies luctus. Phasellus leo tortor, blandit nec consequat eget, rhoncus ac nisl. Fusce dignissim metus sit amet felis auctor consectetur.</p>
                </div>
                </div>

                <div className='col-lg-7 col-12 col-sm-12 col-md-6'>
                  <div className='contact-form'>
                    <form action='#'>
                      <input type='text' name='' placeholder='Name'/>
                      <input type='text' name='' placeholder='Email'/>
                      <input type='number' name='' placeholder='Mob No'/>
                      <input className='message' type='message' name='' placeholder='Message'/>
                      <button>Submit</button>
                    </form>
                  </div>
                </div>

                <div className='col-lg-5 col-12 col-sm-12 col-md-6'>
                  <div className='enquiary'>
                    <h2>Say Hello !</h2>
                    <p>Tincidunt augue interdum velit euismod in. Aliquam lectus urna, tempus ac lectus et, gravida bibendum</p>
                    <img className='img-fluid' src='src/image/cont-img-01.webp' alt='contact-img'/>
                    <h5>Enquiries</h5>
                    <h6>info@example.com,
                    contact@example.com</h6>
                    <span><i class="fa-brands fa-facebook"></i></span>
                    <span><i class="fa-brands fa-instagram"></i></span>
                    <span><i class="fa-brands fa-linkedin-in"></i></span>
                  </div>
                </div>
        
                <ConProps
                  heading="USA"
                  address="No: 58 A, East Madison Street, MD, USA 4508"
                  icon="fa-solid fa-location-dot"
                  icon2="fa-solid fa-phone"
                  icon3="fa-solid fa-envelope"
                  email="info@example.com"
                  mob="20123456789"
                />
                <ConProps
                  heading="Australia"
                  address="936 Kiehn Route, West Ned,Tennessee,Australia 11230"
                  icon="fa-solid fa-location-dot"
                  icon2="fa-solid fa-phone"
                  icon3="fa-solid fa-envelope"
                  email="contact@example.com"
                  mob="+000-123-456789"
                />
                <ConProps
                  heading="canada"
                  address="4059 Carling Avenue, Ottawa,Ontario,Canada,K1Z 7B5"
                  icon="fa-solid fa-location-dot"
                  icon2="fa-solid fa-phone"
                  icon3="fa-solid fa-envelope"
                  email="info@example.com"
                  mob="support@example.com"
                />
            </div>
          </div>
      </section>
      {/* contact section end */}
    </>
  )
}

export default Contact
