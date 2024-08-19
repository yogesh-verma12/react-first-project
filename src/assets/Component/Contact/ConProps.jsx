import React from 'react'

function ConProps(props) {
  return (
    <>
       <div className='col-lg-4 col-12 col-sm-12 col-md-6'>
        <div className='add'>
            <h2>{props.heading}</h2>
            <h2 ><i id='icon' className={props.icon}></i><span id='text'>{props.address}</span></h2>
            <h2 ><i id='icon' className={props.icon2}></i><span id='text'>{props.mob}</span></h2>
            <h2 ><i id='icon' className={props.icon3}></i><span id='text'>{props.email}</span></h2>
        </div>
       </div>
    </>
  )
}

export default ConProps
