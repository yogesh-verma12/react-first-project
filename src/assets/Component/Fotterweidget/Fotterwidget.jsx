import React from 'react'
import { FotterWeidget } from '../Home/Homeprops'

function Fotterwidget() {
  return (
   <>
    {/* fotter weidget section start */}
    <div className='fotter-spacer'></div>
   <section className='fotter-weidget'>
    <div className='container'>
      <div className='row'>
      <div className='col-lg-3 col-12 col-sm-12 col-md-6'>
          <div className='widget text-white'>
            <img src='src/image/logo.svg' alt='fotter-logo'/>
            <p>Konec sit amet nibh vestibulum ipsum cursus rhoncus. Duis ac tortor gravida ligula eleifend finibus sed vel tellus.</p>
            <h2>Social Media</h2>
            <span><i class="fa-brands fa-instagram"></i></span>
            <span><i class="fa-brands fa-facebook"></i></span>
            <span><i class="fa-brands fa-youtube"></i></span>
            <span><i class="fa-solid fa-xmark"></i></span>
          </div>
        </div>

        <FotterWeidget
          link="GET IN TOUCH"
          address="Manzana María Elena Leiva s/n., Vitoria, Can 58948"
          mob="Call Us :+00 (0) 123 456 789"
          mail="E-Mail :admin@example.com"
        />
        <FotterWeidget
          link="USEFUL LINKS"
          address="Contact"
          mob="History"
          mail="Shiping & Refund"
          con="Refund Policy"
          text="Terms & Conditions"
        />
        <FotterWeidget
          link="CUSTOMER SERVICE"
          address="Comunication App"
          mob="Tour A School"
          mail="Health & Safety"
          con="Our Curriculam"
          text="Our Educators"
        />
      </div>
    </div>
   </section>
   {/* fotter weidget section end */}
   </>
  )
}

export default Fotterwidget
