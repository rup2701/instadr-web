import Head from 'next/head';
import Layout from '../components/Layout';
import Image from "next/image";
import { Icon } from "@iconify/react";
import heartIcon from "@iconify-icons/uil/heart";
import searchIcon from "@iconify-icons/uil/search";
import scheduleIcon from "@iconify-icons/uil/schedule";
import videoIcon from "@iconify-icons/uil/video";

import uploadImageIcon from "@iconify-icons/uil/upload";
import commentIcon from "@iconify-icons/uil/comment";
import prescriptionIcon from "@iconify-icons/uil/prescription-bottle";
import cloudLockIcon from "@iconify-icons/uil/cloud-lock";
import selfieIcon from "@iconify-icons/uil/selfie";
import Link from 'next/link';

// section two 

/**
 * Request demo from InstaDR
 */
function renderSectionMedGroups() {
  return (
    <section className="section bg-half-170 med-groups-demo" style={{borderTop: '1px solid #00000010'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 order-2 order-md-2 offset-md-1">
            <h4 className="sub-heading">Clinics and Medical groups</h4>
            <h2 className="display-5">Looking for the right Telehealth Partner?</h2>
            <p className="lead subheading mb-4">We take care of the <span className="underline">details</span> so your physicians
              can focus on what they do best.</p>
            <ul className="list-unstyled mt-2">
              <li>Expertise to help navigate challenging situations</li>
              <li>Shared sense of accomplishments</li>
              <li>A partner from start to forever</li>
            </ul>
            <div className=" mt-5">
              <a href='https://calendly.com/instadr/telehealth-demo' className="btn btn-primary mt-2 mr-2">Schedule a live demo</a>
            </div>
          </div>
          <div className="col-md-5 order-1 order-md-1 pb-4" style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <img src="/images/medical-group-telehealth.jpg" className="img-fluid" style={{borderRadius: '12px', border: '4 solid'}}/>
          </div>
        </div>
      </div>
    </section>
  )
}



function renderSectionPhysicians() {
  return (
    <section className="section bg-half-170" id="platform">
      <div className="container text-center mb- mt-4" >
        <h2 className="display-5">Built for Solo Practitioners.</h2>
        <p className="lead subheading mb-4">Market and grow your practice on the Insta marketplace.</p>
        <div className="row mt-5" style={{ borderRadius: '12px', background: 'rgba(0, 128, 255, 0.1)', boxShadow: '0 6px 8px 0 rgba(0, 0, 0, 0.015), 0 6px 8px 0 rgba(0, 0, 0, 0.015) !important'}}>
          <div className="col-md-7 p-3" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}> 
            <img src="/images/faces.jpg" className="img-fluid" style={{ border: '12px solid', borderRadius: '12px' }}/>
          </div> 
          <div className="col-md-5 p-5 text-left" style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}> 
            <h3>Insta Marketplace</h3>
            <p className="mb-4 lead">Enabling doctors to do what they do best.</p>
              <h5>Add another revenue stream</h5>
              <h5>Control your schedule</h5>
              <h5>Build reputation</h5>
              <h5>Market and grow practice</h5>
            <a href="/solo-practice" className="btn btn-primary mt-5 mr-2">Get Started</a>
          </div>
        </div>
        {renderSectionSyncCalendars()}
      </div>
    </section>
  )
}

function renderSectionSyncCalendars() {
  return (
    <div className="g-half-170" style={{paddingTop: '170px'}}>
      <h2 className='display-5'>InstaDR Pro</h2>
      <p className="lead subheading mb-5">Stay connected with existing patients on web, mobile or tablet.</p>
      <img src="/images/syncd-calendars.jpg" style={{maxWidth: '100%', border: '1px solid #00000010', boxShadow: '0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 18px 48px 0 rgba(0, 0, 1, 0.1)'}} />
      <div className="text-center mt-5">
        <a className="btn btn-primary mt-2" href="/pricing">Start free trial</a>
      </div>
    </div>
  )
}

/**
 * Easy calling
 */
function renderSectionEasyCalling() {
  return (
    <section id="calling-sequence" className="bg-half-170" style={{borderBottom: '1px solid #00000010'}}>
      <div className="container mt-100 mt-60">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="section-title mb-4 pb-2">
              <h2 className="display-5">Seamless calling experience.</h2>
              <p className="lead subheading mb-4">No more <span className="text-primary">waiting rooms</span>, links or third-party apps. The doctor <span className="underline">will call</span> you.</p>                    
            </div>
			    </div>
			  </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 text-center">
            <img src="images/easy-calling@2x.png" className="img-fluid mx-auto d-block" style={{maxWidth: '65%'}} alt=""/>
          </div>
        </div>

        {/* <div className=" text-center mt-5">
          <a href="/" className="btn btn-primary mt-2 mr-2">Download app now</a>
        </div> */}
      </div>
	  </section>
  )
}


function renderPatientAppScreenshots() {
  return (
    <div className="row justify-content-center align-items-center mb-5 mt-5">
      <div className="col-lg-5 col-md-4 col-12 mt-4 pt-2 text-center text-md-right">

        <img src="/images/book-accept-doctors@2x.png" className="img-fluid"  style={{ maxWidth: "80%", margin: "auto" }} alt="Book docotors instantly"/>
      </div>
      <div className="col-lg-6 col-md-4 mt-4 pt-2">
        <img src="/images/app/book-doctors-ipad@2x.png" style={{ maxWidth: "80%" , margin: "auto", display: "block"}} className="img-fluid" alt="Book doctors on multiple platforms"/>
      </div>
    </div>
  )
}
/**
 * 
 */
function renderPatientBenefits() {
  return (
    <div className="row justify-content-center align-items-center">
      {/* <div className="col-lg-10 col-md-12"> */}
        <h5 className="sub-heading">InstaDR Benefits</h5>
        <div className="row mt-4 pt-2">
          <div className="col-md-4 col-12" style={{borderRight: '1px solid #00000010', borderBottom: '1px solid #00000010'}}>
              <div className="media pt-4 pb-4">
                <span className="icon text-center  text-primary mr-3 mt-2">
                  <Icon icon={videoIcon} className="h2 text-primary mb-4" />
                  </span>
                  <div className="media-body">
                    <h5>Seamless video calling</h5>
                    <p className=" mb-0">Receive care from the comfort of your home. </p>
                  </div>
              </div>
          </div>
          <div className="col-md-4 col-12" style={{borderRight: '1px solid #00000010', borderBottom: '1px solid #00000010'}}>
              <div className="media  pt-4 pb-4">
                <div className="icon text-center text-primary mr-3 mt-2">
                  <Icon icon={commentIcon} className="h2 text-primary mb-4" />
                  </div>
                  <div className="media-body">
                    <h5 className="title">Effortless communications</h5>
                    <p className=" mb-0">Stay connected, ask questions, and share updates.</p>
                  </div>
              </div>
          </div>
   
          <div className="col-md-4 col-12" style={{borderBottom: '1px solid #00000010'}}>
              <div className="media pt-4 pb-4">
                <div className="icon text-center  text-primary mr-3 mt-2">
                <Icon icon={uploadImageIcon} className="h2 text-primary mb-4" />
                  </div>
                  <div className="media-body">
                    <h5 className="title">Share anything</h5>
                    <p className=" mb-0">Securely exchange documents, prescriptions and photos.</p>
                  </div>
              </div>
          </div>
          
          <div className="col-md-4 col-12" style={{borderRight: '1px solid #00000010'}}>
              <div className="media pt-4 pb-4">
                <div className="icon text-center text-primary mr-3 mt-2">
                  <Icon icon={prescriptionIcon} className="h2 text-primary  mb-4" />
                  </div>
                  <div className="media-body">
                    <h5 className="title">Refill prescriptions</h5>
                    <p className=" mb-0">Get prescriptions delivered to your preferred pharmacy.</p>
                  </div>
              </div>
          </div>
          
          <div className="col-md-4 col-12" style={{borderRight: '1px solid #00000010'}}>
              <div className="media  pt-4 pb-4">
                <div className="icon text-center  text-primary mr-3 mt-2">
                  
                  <Icon icon={selfieIcon} className="h2 text-primary mb-4" />
                  </div>
                  <div className="media-body">
                    <h5 className="title">Device agnostic</h5>
                    <p className=" mb-0">Video consult on a myriad of devices and platforms.</p>
                  </div>
              </div>
          </div>

          <div className="col-md-4 col-12">
              <div className="media pt-4 pb-4">
                <div className="icon text-center  text-primary mr-3 mt-2">
                  <Icon icon={cloudLockIcon} className="h2 text-primary mb-4" />
                  </div>
                  <div className="media-body">
                    <h5 className="title">For your eyes only</h5>
                    <p className=" mb-0">We protect and safeguard your data as if it was our own. </p>
                  </div>
              </div>
          </div>
        </div>
      </div>
    // </div>
  )
}

/**
 * 
 */
const WholeFamily = ({ }) => {  

  return (
    <section className="section" id="whole-family" style={{paddingBottom: '170px', paddingTop: '170px', borderBottom: '0 solid #00000010' }}>
      <div className="container card mb-5" style={{border: 'none', backgroundColor: 'rgba(0, 128, 255, .1)'}}>
        <div className="" style={{ marginTop: '-20px' }}>
          {/* <i className="uil uil-heart rounded h2 text-primary"></i> */}
          {/* <span className="iconify h2 text-primary" data-icon="uil:heart" data-inline="false"></span> */}
          <Icon icon={heartIcon} className="h2 text-primary" />
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-6 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
          {/* <span className="iconify h2 text-primary" data-icon="uil:heart" data-inline="false"></span> */}
            <Image src="/images/whole-family.png" style={{ maxWidth: "80%", height: "auto" }} width={600} height={600} className="mx-auto d-block" alt="Mangage family health" />
					</div>
          <div className="col-12 col-lg-6 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <h2 className="display-5">Manage whole family health.</h2>
            <p className="lead subheading mt-5">Create health <span className="text-primary">profiles</span> for loved ones, and manage all your information, in one place. </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        {/* <a href="/patients" className="btn btn-outline-primary mt-2 mr-2">Learn More</a> */}
        <Link href="/patients" className="btn btn-primary mt-5 mr-2">Try it now</Link>
      </div>
    </section>
  )
}

function renderIntro() {
  return (

        <div className="row" style={{paddingTop: '170px'}}>
          <div className="col-md-4 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
            <div className="card features fea-primary p-4 bg-white position-relative overflow-hidden border-0" style={{flexDirection: 'row', alignItems: "center"}}>
            {<span className="h2 icon2 text-primary" style={{ marginRight: '15px', marginBottom: '0' }}>
              <Icon icon={searchIcon} className="h2 text-primary" />
            </span> }
          
              <div className="card-body p-0 content">
                <h4 className="title" style={{marginBottom: '0'}}>Look up primary care or specialty doctors</h4>        
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
        <div className="card features fea-primary  p-4 bg-white position-relative overflow-hidden border-0" style={{flexDirection: 'row', alignItems: "center"}}>
          <span className="h2 icon2 text-primary" style={{ marginRight: '15px', marginBottom: '0' }}>
          <Icon icon={scheduleIcon} className="h2 text-primary" />
          </span>
              <div className="card-body p-0 content">
                <h4 className="title" style={{marginBottom: '0'}}>Schedule appointment</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
            <div className="card features fea-primary  p-4 bg-white position-relative overflow-hidden border-0" style={{flexDirection: 'row', alignItems: "center"}}>
          <span className="h2 icon2 text-primary" style={{ marginRight: '15px', marginBottom: '0' }}>
            <Icon icon={videoIcon} className="h2 text-primary" />
          </span>
              <div className="card-body p-0 content">
                <h4 className="title" style={{marginBottom: '0'}}>Video consult</h4>
              </div>
            </div>
          </div>
        </div>

  )
}

function renderSectionPatients() {
  return (
    <section className="section bg-half-170">
      <div className="container">
        <div className="text-center mb-4 mt-4">
          <h2 className="display-5">We have <b className="text-primary">you</b> covered.</h2>
          <p className="lead subheading mb-4 narrow">Video-consult vetted and licensed physicians anytime from anywhere.</p>
        </div>
        
        {renderPatientAppScreenshots()}
        {renderPatientBenefits()}
        
        {/* <div className=" text-center mt-5">
          <a href="/patients" className="btn btn-outline-primary mt-2 mr-2">Learn More</a>
          <a href="/patients" className="btn btn-primary mt-2 mr-2">Download App</a>
        </div> */}
      </div>
    </section>
  )
}



/**
 * Page cover
 */
const Hero = () => {
  return (
    <section className="d-table w-100 overflow-hidden" id="herocover--main" style={{ borderBottom: '1px solid #00000010', paddingTop: "6rem", paddingBottom: "6rem" }}>
      <div className="container">
        <div className="row mt-5 align-items-center">
          <div className="col-md-6 col-12">
            <div className="title-heading">
              <h1 className="my-3 display-3" style={{lineHeight: '1.0'}}>Doctors at your <span className="textprimary">fingertips.</span></h1>
                
              <p className="lead subheading mt-5">
                Video-consult, message, get prescriptions without leaving home.
              </p>

              <div className='mt-5 mb-2' style={{fontWeight: "550"}}>Physcian?</div>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfhE6OuGSmqMP4DnmnsvJlS19-nFq3gHf16b-Fu5wmamQnb4g/viewform"
                className="btn btn-primary  ">
                Join Early Access
              </Link>
            </div>
          </div>

          <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0 col-12" >
            <div className="classic-saas-image saas-feature-shape-right position-relative">
              <Image src="/images/doctor-video-1.png"
                className="img-fluid" width={600}
                height={600}
                style={{
                  maxWidth: "80%",
                  height: "auto"
                }}
                alt="Description" />
            </div>
          </div>
        </div>
      {renderIntro()}

      </div>
    </section>
  )
}

function renderSectionCover() {
  return (
    <section className="bg-half-170 " id="hero-cover--main" >
      <div className="translucent-bg-azure"></div>
      <div className="container">
        <div className="content">
          {/* <h6 className="text-center">Marketplace built for doctors and patients</h6> */}
          <h2 className="text-center mb-4">What are you looking for?</h2>          
          <div className="input-area">
            <input
              placeholder="Search by ailment or specialty"
            />
            <img src="/images/filter.svg" />
          </div>
          
          <div className="exp-button-group" style={{marginTop: "32px"}} >
          {/* <h3 className="text-center my-4">or</h3>  */}
            <div>
              <img src="/images/icons/prim-care.svg" />
              <p className="text-center">prim-care</p>
              
            </div>
            <div>
              <img src="/images/icons/pharmacy-exp.svg" />
              <p className="text-center">pharmacy</p>
              
            </div>
            <div>
              <img src="/images/icons/mind.svg" />
              <p className="text-center">mind</p>
              {/* <hr/> */}
            </div>
            <div>
              <Image
                src="/images/icons/alt-care.svg"
                alt=""
              />
              <p className="text-center">alt-care</p>
              {/* <hr/> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <Layout home>
      <Head>
        <title>InstaDR, doctors at your fingertips. HIPAA-compliant telehealth platform</title>
      </Head>
      
      <Hero />
      {/* {renderSectionCover()} */}
      {renderSectionPatients()}
      <WholeFamily />
      {renderSectionEasyCalling()}
      {renderSectionPhysicians()}
      {renderSectionMedGroups()}
    </Layout>  
  )
}