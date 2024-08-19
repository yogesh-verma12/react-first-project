import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      {/* about us section start */}
      <div className="spacer"></div>
      <section className='about-page'>
        <div className="container">
            <div className='row'>
               <div className='about-banner text-center text-white'>
                <h2>About us </h2>
                <h4>Home / About us</h4>
               </div> 
            </div>
        </div>
      </section>

      <section className='about'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 col-12 col-sm-12 col-md-6'>
          <div className='about-text'>
            <h5>ABOUT US</h5>
            <h6>Globally Recognized Interactive <br/> Preschool Education</h6>
            <p>Gravida rutrum quisque non tellus orci ac auctor.. Aenean imperdiet sodales felis, ultricies ultricies metus faucibus non. Integer consequat ex lacus, in mattis nulla posuere in. Nam posuere feugiat lacus. Morbi suscipit erat felis, ac aliquam nibh.</p>
          </div>

          <div className='row'>
            <div className='col-lg-6  col-6 col-sm-6 col-md-6'>
             <div className='about-main'>
             <div className='row'>
                <div className='col-lg-3 col-3 col-sm-3 col-md-3'>
                  <div className='about-img'>
                     <span><i class="fa-solid fa-brain"></i></span>
                  </div>
                </div>
                <div className='col-lg-9 col-9 col-sm-9 col-md-9'>
                  <div className='about-img-text'>
                    <h4>Child Friendly Environment</h4>
                  </div>
                </div>
              </div>
             </div>
            </div>

            <div className='col-lg-6 col-6 col-xm-6 col-md-6'>
              <div className='about-main'>
              <div className='row'>
                <div className='col-lg-3  col-3 col-sm-3 col-md-3'>
                  <div className='about-img'>
                     <span id='user'><i class="fa-solid fa-user-graduate"></i></span>
                  </div>
                </div>
                <div className='col-lg-9  col-9 col-sm-9 col-md-9'>
                  <div className='about-img-text'>
                    <h4>Real time Education</h4>
                  </div>
                </div>
              </div>
              </div>
            </div>

           <div className='col-lg-6  col-6 col-sm-6 col-md-6'>
             <div className='about-main'>
             <div className='row'>
                <div className='col-lg-3   col-3 col-sm-3 col-md-3'>
                  <div className='about-img'>
                    <span><i class="fa-solid fa-globe"></i></span>
                  </div>
                </div>
                <div className='col-lg-9  col-9 col-sm-9 col-md-9'>
                  <div className='about-img-text'>
                    <h4>Well-Built Infrastructure</h4>
                  </div>
                </div>
              </div>
             </div>
            </div>
          
           <div className='col-lg-6  col-6 col-sm-6 col-md-6'>
             <div className='about-main'>
             <div className='row'>
                <div className='col-lg-3  col-3 col-sm-3 col-md-3'>
                  <div className='about-img'>
                    <span id='mob'><i class="fa-solid fa-mobile"></i></span>
                  </div>
                </div>
                <div className='col-lg-9  col-9 col-sm-9 col-md-9'>
                  <div className='about-img-text'>
                    <h4>Proffessional Staf Members</h4>
                  </div>
                </div>
              </div>
             </div>
            </div>

            <div className='col-lg-6  col-6 col-sm-6 col-md-6'>
             <div className='about-main'>
             <div className='row'>
                <div className='col-lg-3  col-3 col-sm-3 col-md-3'>
                  <div className='about-img'>
                  <span id='mob'><i class="fa-solid fa-mobile"></i></span>
                  </div>
                </div>
                <div className='col-lg-9  col-9 col-sm-9 col-md-9'>
                  <div className='about-img-text'>
                    <h4>Proffessional Staf Members</h4>
                  </div>
                </div>
              </div>
             </div>
            </div>

           <div className='col-lg-6  col-6 col-sm-6 col-md-6'>
              <div className='about-main'>
              <div className='row'>
                <div className='col-lg-3  col-3 col-sm-3 col-md-3'>
                  <div className='about-img'>
                  <span id='mob'><i class="fa-solid fa-mobile"></i></span>
                  </div>
                </div>
                <div className='col-lg-9  col-9 col-sm-9 col-md-9'>
                  <div className='about-img-text'>
                    <h4>Proffessional Staf Members</h4>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
         
         <div className='about-btn'>
          <button>MORE ABOUT US </button>
          <Link to='#'>or $100/year with 14-days money-back guarantee</Link>
         </div>

        </div>

        <div className='col-lg-6 col-12 col-sm-12 col-md-12'>
          <div className='row'>
            <div className='col-lg-4 col-4 col-sm-4 col-md-4'>
              <div className='about-right-img'>
                <img className='img-fluid' src='src/image/untitled-11.webp' alt='about-img' />
              </div>
            </div>

            <div className='col-lg-8  col-8 col-sm-8 col-md-8'>
              <div className='about-video'>
                <video autoPlay muted loop playsinline   src="https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/03/01.mp4" class="w-100" > </video>
              </div>
            </div>

            <div className='col-lg-8 col-8 col-sm-8 col-md-8'>
              <div className='about-video'>
                <video autoPlay muted loop playsinline   src="https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/03/01.mp4" class="w-100" > </video>
              </div>
            </div>

            <div className='col-lg-4  col-4 col-sm-4 col-md-4'>
              <div className='about-right-img'>
                <img className='img-fluid' src='src/image/untitled-11.webp' alt='about-img' />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
   </section>

   {/* work section start */}
   <section class="work">
    <div class="container">
      <div class="row">
        <div class="work-text">
          <h5>HOW WE WORKS</h5>
          <h2>What Makes Our Teaching Unique</h2>
        </div>

        <div class="col-lg-1 col-xl-1" id="spac"></div>

        <div class="col-lg-11 col-xl-11 col-12 col-sm-12 col-md-12">
         <div class="work-main">
          <div class="row">
            <div class="col-lg-5 col-xl-5 col-12 col-sm-12 col-md-5">
              <div class="work-inner-text">
                <div class="media">
                  <h2>OUR MISSION</h2>
                  <div class="media-body">
                    <img src="src/image/home-icon-101.webp"/>
                  </div>
                </div>
                <p>Pellentesque habitant morbi tristique senectus et Cras quis eleifend quam. Proin rutrum tristique arcu. Pellentesque turpis urna, sodales sit amet odio eu, ultricies tincidunt tellus. Phasellus risus neque, luctus at ligula sit amet, sagittis congue orci. Vivamus ut malesuada mi.</p>
              </div>
            </div>

            <div class="col-lg-4 col-xl-4 col-12 col-sm-12 col-md-4">
              <div class="work-main-text">
                <ul>
                 <li><i class="fa-solid fa-arrow-right"></i>Vulputate dignissim suspendisse</li>
                 <li><i class="fa-solid fa-arrow-right"></i>Nibh sed pulvinar proin gravida</li>
                 <li><i class="fa-solid fa-arrow-right"></i>A scelerisque purus semper eget</li>
                </ul>
              </div>
            </div>
           
           <div class="col-lg-3 col-xl-3 col-12 col-sm-12 col-md-3">
            <div class="work-img">
              <img src="src/image/textimage3.webp"/>  
            </div>
          </div>
         </div>
        </div> 
      </div>

    <div class="col-lg-11 col-xl-11 col-12 col-sm-12 col-md-12">
         <div class="work-main" id="wo">
          <div class="row">

            <div class="col-lg-3 col-xl-3 col-12 col-sm-12  col-md-3">
            <div class="work-img" id="work">
              <img src="src/image/textimage1.webp" />  
            </div>
          </div>

            <div class="col-lg-5 col-xl-5 col-12 col-sm-12 col-md-5">
              <div class="work-inner-text">
                <div class="media">
                  <h2>OUR VALUES</h2>
                  <div class="media-body">
                    <img src="src/image/home-icon-102.webp" />
                  </div>
                </div>
                <p>Arcu bibendum at varius vel pharetra vel turpis nunc. In eu mi bibendum neque egestas. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Ut venenatis tellus in metus vulputate. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget.</p>
              </div>
            </div>

            <div class="col-lg-4 col-xl-4 col-12 col-sm-12 col-md-4">
              <div class="work-main-text">
                <ul>
                 <li><i class="fa-solid fa-arrow-right"></i>Urna molestie at elementum en</li>
                 <li><i class="fa-solid fa-arrow-right"></i>Scelerisque purus semper eget</li>
                 <li><i class="fa-solid fa-arrow-right"></i>Turpis nunc eget lorem dolor sed</li>
                </ul>
              </div>
            </div>
           
           
         </div>
        </div> 
      </div>

<div class="col-lg-1 col-xl-1" id="spac"></div>

<div class="col-lg-1 col-xl-1" id="spac"></div>

<div class="col-lg-11 col-xl-11 col-12 col-sm-12 col-md-12">
         <div class="work-main" id="wor">
          <div class="row">
            <div class="col-lg-5 col-xl-5 col-12 col-sm-12 col-md-5">
              <div class="work-inner-text">
                <div class="media">
                  <h2>OUR VISION</h2>
                  <div class="media-body">
                    <img src="src/image/home-icon-103.webp" />
                  </div>
                </div>
                <p>Enim nulla aliquet porttitor lacus luctus. Auctor augue mauris augue neque gravida in fermentum et. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus.Volutpat diam ut venenatis tellus in metus. Id donec ultrices tincidunt arcu non sodales neque sodales ut.</p>
              </div>
            </div>

            <div class="col-lg-4 col-xl-4 col-12 col-sm-12 col-md-4">
              <div class="work-main-text">
                <ul>
                 <li><i class="fa-solid fa-arrow-right"></i>Interdum en varius sit amet</li>
                 <li><i class="fa-solid fa-arrow-right"></i>Lacinia at risus en sed quis</li>
                 <li><i class="fa-solid fa-arrow-right"></i>Arcu cursus en viverra niba</li>
                </ul>
              </div>
            </div>
           
           <div class="col-lg-3 col-xl-3 col-12 col-sm-12 col-md-3">
            <div class="work-img">
              <img src="src/image/textimage2.webp" />  
            </div>
          </div>
         </div>
        </div> 
      </div>



      </div>
    </div>
  </section>
   {/* work section end */}
      {/* about us section end */}
    </>
  )
}

export default About
