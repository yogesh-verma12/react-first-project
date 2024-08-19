import React from 'react'
import { Link } from 'react-router-dom'
import {Homeprops, Class, Gallery, FotterWeidget, } from './Homeprops.jsx'

function Home() {
  return (
    <>
       {/* <!-- banner section start --> */}
	<div className="spacer"></div>
	<section className="banner">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-xl-6 col-12 col-sm-12 col-md-6">
					<div className="banner-img">
						<img className="inner-img img-fluid"  src="src/image/home-slider-img-01.webp"/>
            <img className="main-img" src="src/image/Back-Pack.webp" />
					</div>
				</div>

        <div className="col-lg-6 col-xl-6 col-12 col-sm-12 col-md-6">
          <div className="main-carosoul">
          <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
  {/* <!-- <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div> --> */}
  <div className="carousel-inner">
    <div className="carousel-item active">
     <h6>GREATER LEARNING</h6>
     <h2>Discover, Engage, Develop, and Enjoy!</h2>
     <p>Vitae elementum curabitur vitae nunc sed. Dictum varius duis at consectetur lorem donec. Nunc eget lorem dolor sed viverra ipsum nunc. Ac tortor vitae purus faucibus ornare.</p>
     <button>Get Started<i className="fa-solid fa-arrow-right"></i></button>
    </div>
    <div className="carousel-item">
     <h6>PERSONAL ATTENTION</h6>
     <h2>Child Focused Experimental Learning</h2>
     <p>Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Semper risus in hendrerit gravida rutrum quisque non. Mattis vulputate enim nulla aliquet porttitor lacus luctus.</p>
     <button>Get Started<i className="fa-solid fa-arrow-right"></i></button>
    </div>
    <div className="carousel-item">
      <h6>HIGH STANDARD</h6>
     <h2>play-Based Young Learning System</h2>
     <p>Cras adipiscing enim eu turpis egestas pretium. Fringilla ut morbi tincidunt augue interdum velit euismod in. Scelerisque eleifend donec pretium vulputate.</p>
     <button>Get Started<i className="fa-solid fa-arrow-right"></i></button>
    </div>
  </div>

  <div className="next-btn">
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev" aria-hidden="true"><i className="fa-solid fa-arrow-left-long"></i></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next" aria-hidden="true"><i className="fa-solid fa-arrow-right-long"></i></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

</div>
</div>

<div className="carousel-img">
  <img src="src/image/ABC-Scale.webp"/>
</div>
        </div>
			</div>
		</div>
	</section>
	 {/* end of banner section  */}

   {/* about section start */}
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
   {/* about section end */}


   {/* knowledge section start */}
   <section className='knowledge'>
    <div className='container'>
      <div className='row'>
        <div className='knowledge-text text-center'>
          <h6>DEDICATED TO PREFECTION</h6>
          <h5>Building Good Foundation Of <br/> Knowledge</h5>
          </div>
          <Homeprops 
            text="Enhance Reading And Reasoning Skills."
            para="Nulla facilisi. Aliquam maximus, ipsum convallis pellentesque, ante sem pulvinar eros, a iaculis augue odio."
          />

          <Homeprops 
            text="High Standards For Security And Safety."
            para="Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras quis eleifend."
          />

          <Homeprops 
          text="Clear And Genuine Communication With Parents."
          para="Proin rutrum tristique arcu. Pellentesque turpis urna, sodales sit amet odio eu, ultricies tincidunt tellusneque."
          />

          <Homeprops
            text="Kids Are Free To Use Their Imaginations."
            para="Vivamus ut malesuada mi. Sed ultricies, dolor non iaculis lacinia, metus lorem posuere purus, sit amet efficitur."
          />
        
      </div>
    </div>
   </section>
   {/* knowledge section end */}

   {/* feature section start */}
   <section className='feature'>
    <div className='container'>
      <div className='row'>
        <div className='feature-heading text-center'>
          <h3>A FEATURE-RICH LMS</h3>
          <h6>We've breen helping customers deliver <br/> eLearning in more than 10 countries</h6>
          <div className='feature-img'>
            <img src='src/image/sponcer-1.webp' alt='' />
            <img src='src/image/sponcer-2.webp' alt='' />
            <img src='src/image/sponcer-3.webp' alt='' />
            <img src='src/image/sponcer-4.webp' alt='' />
            <img src='src/image/sponcer-5.webp' alt='' />
            <img src='src/image/sponcer-6.webp' alt='' />
            <img src='src/image/sponcer-7.webp' alt='' />
            <img src='src/image/sponcer-8.webp' alt='' />
            <img src='src/image/sponcer-9.webp' alt='' />
            <img src='src/image/sponcer-10.webp' alt='' />
          </div>
        </div>
      </div>
    </div>
   </section>
   {/* feature section end   */}

   {/* education section start */}
   <section className='education'>
    <div className='container'>
      <div className='row'>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" id='caro-text'>
      <h6>PLAY & LEARN</h6>
      <h2>Committed To Fun Filled Education.</h2>
      <p>Diam quam nulla porttitor massa id neque aliquam vestibulum. Purus gravida quis blandit turpis cursus in hac habitasse platea. Senectus et netus et malesuada. Eget nullam non nisi est.</p>
    </div>
    <div class="carousel-item" id='caro-text'>
    <h6>PLAY & LEARN</h6>
      <h2>Committed To Fun Filled Education.</h2>
      <p>Diam quam nulla porttitor massa id neque aliquam vestibulum. Purus gravida quis blandit turpis cursus in hac habitasse platea. Senectus et netus et malesuada. Eget nullam non nisi est.</p>
      
    </div>
    <div class="carousel-item" id='caro-text'>
    <h6>PLAY & LEARN</h6>
      <h2>Committed To Fun Filled Education.</h2>
      <p>Diam quam nulla porttitor massa id neque aliquam vestibulum. Purus gravida quis blandit turpis cursus in hac habitasse platea. Senectus et netus et malesuada. Eget nullam non nisi est.</p>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div className='education-btn'>
  <button>Get Started</button>
</div>
      </div>
    </div>
   </section>
   {/* education section end */}

   {/* classes section start */}
   <section className='class'>
    <div className='container'>
      <div className='row'>
        <div className='class-heading text-center'>
          <h3>TAILORED CLASSES</h3>
          <h6>Unique Approaches To Teaching <br/> Combined Technology & Learning.</h6>
          </div>
          <Class
            srcname="src/image/course-detail-image-101-640x430.jpg"
            text="Math League"
            para="Gravida cum sociis natoque penatibus. Enim nec dui nunc mattis enim ut."
            del="$69"
            price="$49"
            btn="STARTS on 18: SEP"
          />

           <Class
            srcname="src/image/course-detail-image-102-640x430.jpg"
            text="Art Club"
            para="Convallis a cras semper auctor neque vitae. Malesuada nunc vel risus commodo viverra."
            del="$59"
            price="$39"
            btn="Join Class"
          />

          <Class
            srcname="src/image/course-detail-image-103-640x430.jpg"
            text="Music Class"
            para="Amet mattis vulputate enim nulla aliquet porttitor lacus luctus.Orci ac auctor augue mauris augue."
            del="$85"
            price="$75"
            btn="Join Class"
          />

          <Class
            srcname="src/image/course-detail-image-104-640x430.jpg"
            text="Orchestra Player"
            para="Leo urna molestie at elementum eu. Duis at consectetur lorem donec massa sapien."
            del="$36"
            price="$29"
            btn="STARTS on 18: SEP"
          />
          <Class
            srcname="src/image/course-detail-image-105-640x430.jpg"
            text="Enginnering Class"
            para="Nascetur ridiculus mus mauris vitae ultricies leo. Eget arcu dictum varius duis at."
            del="$69"
            price="$49"
            btn="STARTS on 18: SEP"
          />
           <Class
            srcname="src/image/course-detail-image-106-640x430.jpg"
            text="Painting Class"
            para="Elit pellentesque habitant morbi tristique senectus et netus et Etiam dignissim diam quis."
            del="Free"
            price=""
            btn="START COURSE"
          />

          <div className='bottom-btn'>
            <button>View All Courses</button>
          </div>
        
      </div>
    </div>
   </section>
   {/* classes section end */}

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

   {/* Learning section start */}
   <section className='learning'>
    <div className='container'>
      <div className='row'>
       <div className='col-lg-4  col-12 col-xm-12 col-md-4'>
        <div className='learn-img'>
          <img className='img-fluid' src='src/image/icbox-filler-img-01 (2).webp' alt=''/>
        </div>
       </div>

       <div className='col-lg-8  col-12 col-xm-12 col-md-8'>
       <div className='learning-heading text-white'>
          <h3>LOVED BY KIDS</h3>
          <h4>Join Today & Become  Confident Learner</h4>
        </div>
       </div>
      </div>
    </div>
   </section>
   {/* Learning section end */}

   {/* gallery section start */}
   <section className='gallery'>
     <div className='container'>
      <div className='row'>
        <div className='gallery-heading'>
          <h3>PHOTO GALLERY</h3>
          <h4>Ideal Kids Special Events</h4>
            <button>VIEW ALL EVENTS</button>
        </div>

        <Gallery 
          heading="Teacher vs. Student Day"
          text="Feb 11 @ 6:00 am - Feb 13 @ 8:00 pm"
          para="Community Service Event, Australia"
          srcname="src/image/event-feature-image-111.webp"
          btn="VIEW EVENTS" 
          btntext="11 Feb"
        />

<Gallery 
          heading="Community Get Together"
          text="Feb 11 @ 6:00 am - Feb 13 @ 8:00 pm"
          para="Community Service Event, Australia"
          srcname="src/image/event-feature-image-102.webp"
          btn="VIEW EVENTS" 
          btntext="11 Feb"
        />

<Gallery 
          heading="Winter Feast Family Event"
          text="Feb 11 @ 6:00 am - Feb 13 @ 8:00 pm"
          para="Community Service Event, Australia"
          srcname="src/image/event-feature-image-104.webp"
          btn="VIEW EVENTS" 
          btntext="11 Feb"
        />

<Gallery 
          heading="Dinner Night Event"
          text="Feb 11 @ 6:00 am - Feb 13 @ 8:00 pm"
          para="Community Service Event, Australia"
          srcname="src/image/event-feature-image-105.webp"
          btn="VIEW EVENTS" 
          btntext="11 Feb"
        />

<Gallery 
          heading="Game Day Event"
          text="Feb 11 @ 6:00 am - Feb 13 @ 8:00 pm"
          para="Community Service Event, Australia"
          srcname="src/image/event-feature-image-106.webp"
          btn="VIEW EVENTS" 
          btntext="11 Feb"
        />

<Gallery 
          heading="Earth Day Party"
          text="Feb 11 @ 6:00 am - Feb 13 @ 8:00 pm"
          para="Community Service Event, Australia"
          srcname="src/image/event-feature-image-107.webp"
          btn="VIEW EVENTS" 
          btntext="11 Feb"
        />

<Gallery 
          heading="Birthday Party Night"
          text="Feb 11 @ 6:00 am - Feb 13 @ 8:00 pm"
          para="Community Service Event, Australia"
          srcname="src/image/event-feature-image-108.webp"
          btn="VIEW EVENTS" 
          btntext="11 Feb"
        />

<Gallery 
          heading="Drama Production Event"
          text="Feb 11 @ 6:00 am - Feb 13 @ 8:00 pm"
          para="Community Service Event, Australia"
          srcname="src/image/event-feature-image-109.webp"
          btn="VIEW EVENTS" 
          btntext="11 Feb"
        />
      </div>
     </div>
   </section>
   {/* gallery section end */}


   {/* newsletter section start */}
   <section className='newsletter'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12 col-12 col-sm-12 col-md-12 newsletter-heading text-white text-center'>
          <h4>OUR NEWSLETTER</h4>
          <h3>Sign Up Now To Receive 25% Off On Order.</h3>
           <p>Sollicitudin tempor id eu nisl nunc. Non curabitur gravida arcu ac tortor dignissim <br/>convallis. Suspendisse sed nisi lacus sed viverra tellus habitasse.</p>
          <form action='#' method=''>
            <input type='text' name='email' placeholder='Enter Your Email'/>
            <button>SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </div>
   </section>
   {/* newsletter section end */}

   <courses/>
    </>
  )
}

export default Home
