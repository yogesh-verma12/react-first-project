import React from 'react'

function Homeprops(props) {
  return (
   <>
    <div className='col-lg-3 col-12 col-sm-12 col-md-6'>
        <div className='card text-center'>
            <span> <i class="fa-solid fa-brain"></i></span>
            <div className='card-body'>
                <h4>{props.text}</h4>
                <p>{props.para}</p>
            </div>
        </div>
    </div>
   </>
  )
}



function Class(props) {
    return (
     <>
      <div className='col-lg-4 col-12 col-sm-12 col-md-6'>
        <div className='main-class'>
          <div className='card' id='class-card'>
            <figure>
            <img src={props.srcname} alt='class-img'/>
            </figure>
            <div className='card-body' id='class-body'>
              <h2>{props.text}</h2>
              <p>{props.para}</p>
              <font><del>{props.del}</del>{props.price}</font>
              <button id='bt'>{props.btn}</button>
            </div>
          </div>
        </div>
      </div>
     </>
    )
  }

  function Gallery(props){
    return(
       <>
       <div className='col-lg-6 col-12 col-sm-12 col-md-6'>
        <div className='gallery-sec'>
        <div className='row'>
          <div className='col-lg-5 col-5 col-sm-5 col-md-5'>
            <div className='gallery-img'>
              <figure className='gallery-fig'>
              <img className='img-fluid' src={props.srcname} alt='gallery image'/>
              </figure>
            </div>
          </div>
          <div className='col-lg-7 col-7 col-sm-7 col-md-7'>
            <div className='gallery-text'>
              <h4>{props.heading}</h4>
              <p>{props.text}</p>
              <p>{props.para}</p>
              <button>{props.btn}</button>
              <button id='gallery-btn'>{props.btntext}</button>
            </div>
          </div>
        </div>
        </div>
       </div>
       </>
    )
  }

  function FotterWeidget(props){
    return(
      <>
        <div className='col-lg-3 col-12 col-sm-12 col-md-6'>
          <div className='footer-widget-text text-white'>
            <h4>{props.link}</h4>
            <p>{props.address}</p>
            <p>{props.mob}</p>
            <p>{props.mail}</p>
            <p>{props.con}</p>
            <p>{props.text}</p>
          </div>
        </div>
      </>
    )
  }
export  {Homeprops, Class ,Gallery ,FotterWeidget}
