import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';

import { Icon } from "@iconify/react";
import heartIcon from "@iconify-icons/uil/heart";
// import searchIcon from "@iconify-icons/uil/search";
// import scheduleIcon from "@iconify-icons/uil/schedule";
import videoIcon from "@iconify-icons/uil/video";

import uploadImageIcon from "@iconify-icons/uil/upload";
import chartLineIcon from "@iconify-icons/uil/chart-line";
import chatBubbleIcon from "@iconify-icons/uil/chat";

import plugIcon from "@iconify-icons/uil/plug";
// import padlockIcon from "@iconify-icons/uil/padlock";
// import analyticsIcon from "@iconify-icons/uil/analytics";
import userCheckIcon from "@iconify-icons/uil/user-check";
// import shieldPlusIcon from "@iconify-icons/uil/shield-plus";
// import shieldSlashIcon from "@iconify-icons/uil/shield-slash";
import shieldCheckIcon from "@iconify-icons/uil/shield-check";
// import cloudShieldIcon  from "@iconify-icons/uil/cloud-shield";
// import secureArchIcon from "@iconify-icons/uil/data-sharing";
// import creditCardIcon from "@iconify-icons/uil/credit-card";
// import cloudDataConnectionIcon from "@iconify-icons/uil/cloud-data-connection";
// import fileCheckAltIcon from "@iconify-icons/uil/file-check-alt"

// import rocketIcon from "@iconify-icons/uil/rocket";
// import clockTenIcon from "@iconify-icons/uil/clock-ten";
import dollarAltIcon from "@iconify-icons/uil/dollar-alt";
import stethoscopeIcon from "@iconify-icons/uil/stethoscope-alt";


// import cloudDownloadIcon from "@iconify-icons/uil/cloud-download";
import selfieIcon from "@iconify-icons/uil/selfie";

function renderSectionHero() {
  return (
    <section className="bg-half-170 " style={{borderBottom: '0px solid #00000010', background: "#f6f7fb" }}>
      <div className="container">
        <div className="row align-items-center t-5">
          <div className="col-md-12 order-2 order-md-1 mb-5">  
            <h1 className="display-1" style={{ lineHeight: '1.0', textAlign: 'center' }}>
              Taking your practice virtual just got <span className="text-primary">easier.</span>
            </h1>
            <div className="mt-2 cta-btn-group" style={{textAlign: 'center'}}>
              <p className="lead subheading pb-4 pt-4">When <b><em>Zoom</em></b> is not enough. Video platform built for doctors.</p>
              <a className="btn btn-primary" href="/pricing">Start Free Trial</a>
              <a href='https://calendly.com/instadr/telehealth-demo' className="btn btn-outline-primary ">Schedule a Demo</a>
            </div>
          </div>
          <div className="col-md-12 offset-md-0 offset-md-0 order-1 order-md-2 mt-5 pt-2 mt-sm-0 pt-sm-0" style={{ marginBottom: '40px' }}>
            <Image 
              src="/images/app/web-app.gif"
              alt="A gif showing instadr platform in action"
              width={1200}
              height={0}
              style={{
                border: '12px solid black',
                borderRadius: '4px',
                height: "auto",
                maxWidth: "80%",
                display: "block",
                margin: "auto"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}


function renderSectionBenefits() {
  return (
    <section className="section bg-half-170" style={{borderBottom: '1px solid #00000010', }}>
      <div className="container">
        <h5 className="sub-heading">InstaDR Edge</h5>
        <div className="row">
          <div className="col-md-4 col-12 p-4" style={{ borderBottom: '1px solid #00000010', borderRight: '1px solid #00000010' }}>
            <div className="feature-card text-left">
              <div className=" d-inline-block">
                <Icon icon={videoIcon} className="h2 text-primary" />
              </div>
              <div className="content mt-3">
                <h5 className="title">Synchronous care</h5>
                <p className=" mb-2">Conduct secure video appointments using the web or mobile apps.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 p-4" style={{ borderBottom: '1px solid #00000010', borderRight: '1px solid #00000010' }}>
            <div className="feature-card text-left">
                <div className=" d-inline-block">
                  <Icon icon={plugIcon} className="h2 text-primary" />
                </div>
                <div className="content mt-4">
                  <h5 className="title">Stay Connected</h5>
                  <p className=" mb-2">Sign-in from any device to view your calendar and patient data.</p>
                </div>
            </div>
           </div>
            
          <div className="col-md-4 col-12 mt-5 mt-sm-0 p-4" style={{borderBottom: '1px solid #00000010'}}>
            <div className="text-left">
              <div className="d-inline-block">
                <Icon icon={chartLineIcon} className="h2 text-primary" />
              </div>
              <div className="content mt-4">
                <h5 className="title">Stay competitive</h5>
                <p className=" mb-2">Acquire new patients, and extend virtual care to existing ones.</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 col-12 p-4" style={{ borderRight: '1px solid #00000010' }}>
            <div className="feature-card text-left">
                <div className=" d-inline-block">
                  <Icon icon={uploadImageIcon} className="h2 text-primary" />
                </div>
                <div className="content mt-4">
                  <h5 className="title">Asynchronous care</h5>
                  <p className=" mb-2">Exchange text and photos via appointments, notes and in-app messaging.</p>
                </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mt-5 mt-sm-0 p-4" style={{borderRight: '1px solid #00000010'}}>
              <div className="feature-card text-left">
                <div className="d-inline-block">
                  <Icon icon={heartIcon} className="h2 text-primary" />
                </div>
                <div className="content mt-4">
                  <h5 className="title">Enhanced wellness</h5>
                <p className=" mb-2">Provide continuity of care and maintain
                   strong relationships.</p>
                </div>
              </div>
          </div>
          
          <div className="col-md-4 col-12 mt-5 mt-sm-0 p-4">
            <div className="feature-card text-left">
              <div className="d-inline-block">
                <Icon icon={dollarAltIcon} className="h2 text-primary" />
              </div>
              <div className="content mt-4">
                <h5 className="title">Get reimbursed</h5>
                <p className=" mb-2">Frictionless payments to your bank account.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function renderSectionSyncCalendars() {
  return (
    <section className="bg-half-260" style={{borderBottom: '1px solid #00000010'}}>
      <div className="container text-center pb-5">
        <h2 className="display-5">Keep your calendars syncd</h2>
        <p className="lead subheading mb-5">Practice from anywhere, anytime. Available on <mark> web, mobile and tablet.</mark></p>
        {/* <img src="/images/synced-calendars-1.jpg" style={{maxWidth: '100%', border: '1px solid #00000010'}} className="bordered-img"/> */}
        {/* <img src="/images/doctor-dash.jpg" style={{ maxWidth: '100%', border: '1px solid #00000025' }} className="bordered-img" /> */}
        <Image
          src="/images/syncd-calendars.jpg"
          alt="Keep your calendars sync'd"
          height={870}
          width={1440}
          className="bordered-img"
          style={{ maxWidth: '90%', border: '1px solid #00000015' }} 
        />
      </div>
      <div className="text-center mt-5">   
        <a className="btn btn-primary" href="/pricing">Start Free Trial</a>
      </div>
    </section>
  )
}


function renderSectionWhyInstaDR() {
  return (
    <section className="bg-half-260" style={{borderBottom: '1px solid #00000010'}}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 mb-3 text-center">Why InstaDR?</h2>
          <p className="lead subheading mb-4">Connect and stay connected with your existing patients.</p>
        </div>
        <div className="row text-left pb-5">
          <div className="col-lg-7 col-12 pt-4" style={{display: 'flex', alignItems: 'center'}}>
            <div className="saas-feature-shaperight positionrelative">
              <Image 
                src="/images/web-dashboard.jpg"
                className="img-fluid bordered-img"
                alt="InstaDR Doctor Dashboard"
                width={1200}
                height={0}
                style={{
                  maxWidth: "95%",
                  height: "auto"
                }}
              />
            </div>
          </div>
          
          <div className="col-lg-5 col-12 mt-4 pt-2 mt-lg-0 pt-lg-0">
            <div className="section-title mr-lg-4">
              <div className="row">
                <div className="col-12">
                    <div className="d-flex feature-card align-items-center pt-4" style={{gap: "1rem"}}>
                      <Icon icon={videoIcon} className="h1 text-primary align-middle" />
                      <div>
                        <h5>Integrated video-calling</h5>
                        <p className="para mb-0">Built from scratch as a video-first tool. End-to-end encryption and HIPAA-compliance baked-in.</p>
                      </div>
                    </div>
                </div>
                <div className="col-12">
                  <div className="d-flex feature-card align-items-center pt-4" style={{gap: "1rem"}}>
                    <Icon icon={userCheckIcon} className="h2 text-primary  align-middle" />
                    <div>
                      <h5>BYOP (bring your own patients)</h5>
                      <p className="para mb-0">Extend virtual care to your existing patients.</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-center pt-4" style={{gap: "1rem"}}>
                    <Icon icon={chatBubbleIcon} className="h2 text-primary align-middle" />
                    <div className="ml-3">
                      <h5>In-app messaging</h5>
                      <p className="para mb-0">Answer questions. Share tips and articles. Engage patients
                      in their care.</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-center pt-4" style={{ gap: "1rem" }}>
                    <Icon icon={shieldCheckIcon} className="h1 text-primary align-middle" />
                      <div>
                        <h5>Robust security</h5>
                        <p className="para mb-0">Encrypted health information and communications, stored on HIPAA-compliant cloud and servers.</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">   
        <a className="btn btn-primary" href="/pricing">Start Free Trial</a>
      </div>
    </section>
  )
}

function renderGrowPractice() {
  return (  
    <section className="bg-half-260" style={{borderBottom: '1px solid #00000010'}}>
      <div className="container text-center">
        <h2 className="display-5">InstaDR Platform</h2>
        {/* <p className="lead mb-5"><u>Grow your practice</u> on our platform.</p> */}
        <p className="lead subheading mb-5">Control your schedule, get more patients and grow your practice.</p>
        <div className="row justify-content-center mt-4">
          <div className="col-md-8">
            <div className="saas-feature-shape-left position-relative">
              <img src="/images/flip-the-switch@2x.png" style={{maxWidth: "60%", height: "auto"}} className="img-fluid" alt="InstaDR Mobile App" />
            </div>
          </div>
         

          {/* <div className="col-lg-5 mt-4 pt-2 mt-lg-0 pt-lg-0">
            <div className="section-title ml-lg-4">
              <h2 className="display-6 mb-3">Easily manage appointments and availabilty</h2>
              <ul className="list-unstyled ">
                <li style={{ display: 'flex' }} className="mb-0"><h5 className="mr-2"><i className="uil uil-calendar-alt align-middle text-primary"></i></h5><p className="text-muted">View and get notified about new appointments</p></li>
                <li style={{ display: 'flex' }} className="mb-0"><h5 className="mr-2"><i className="uil uil-analytics align-middle text-primary"></i></h5><p className="text-muted">Analyze reports about your calls and revenue</p></li>
                <li style={{ display: 'flex' }} className="mb-0"><h5 className="mr-2"><i className="uil uil-users-alt align-middle text-primary"></i></h5><p className="text-muted">Carry your patients history with you on your phone, tablet or web</p></li>
                <li style={{ display: 'flex' }} className="mb-0"><h5 className="mr-2"><i className="uil uil-android-phone-slash align-middle text-primary"></i></h5><p className="text-muted">Flip the switch to start practicing on the platform.</p></li>
              </ul>    
            </div>
          </div> */}
        </div>
        {/* <div className="text-center mt-5">   
          <a className="btn btn-primary" href="/pricing">Grow your practice</a>
        </div> */}
      </div>
    </section>
  )
}

/**
 * 
 */
function renderSectionHowItWorks() {
  return (
    <section className="bg-half-260" style={{borderBottom: '1px solid #00000010'}}>
      <div className="container profile-submit card pb-5" style={{border: 'none', background: "#f5f6f8"}}>
        <div style={{ marginLeft: '10px'}}>
          <Icon icon={stethoscopeIcon} className="h2 text-primary" />
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title text-center mb-4 pb-2">
              <h2 className="display-5 mb-2">How it works</h2>
              <p className="lead  mb-5">
                In just a few steps start <span className="text-primary">growing</span> your practice on our <span className="underline">platform</span>.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mt-4 pt-2">
            <div className=" features feature-clean work-process bg-transparent processarrow border-0 text-center">
              <div className="icons text-primary text-center mx-auto">
                <Icon icon={selfieIcon} className="h2 text-primary" />
              </div>

              <div className="card-body">
                <h4 className="text-dark">Sign up</h4>
                <p className="mb-2">Select plan and create a profile.</p>
              </div>
            </div>
          </div>
        
          <div className="col-md-4 mt-md-5 pt-md-3 mt-4 pt-2">
            <div className="features feature-clean work-process bg-transparent processarrow border-0 text-center">
              <div className="icons text-primary text-center mx-auto">
                <Icon icon={userCheckIcon} className="h2 text-primary" />
              </div>

              <div className="card-body">
                <h4 className="text-dark">Get verified</h4>
                <p className="mb-2">Provide your credentials to get verified.</p>
              </div>
            </div>
          </div>
        
          <div className="col-md-4 mt-md-5 pt-md-5 mt-4 pt-2">
            <div className=" features feature-clean work-process bg-transparent d-none-arrow border-0 text-center">
              <div className="icons text-primary text-center mx-auto">
                <Icon icon={videoIcon} className="h2 text-primary" />
              </div>

              <div className="card-body">
                <h4 className="text-dark">Start consulting</h4>
                <p className="mb-2">Use it from your computer or mobile devices.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">   
          <a className="btn btn-primary" href="/pricing">Get Started</a>
        </div>
      </div>
    </section>
  )
}

function renderTryToday() {
  return (
    <section className="bg-half-260">
      <div className="container">
        <h2 className="display-5 mb-2 text-center">Get started today</h2>
        <p className="lead subheading mb-5 text-center">Sign up for the platform or start a free trial <span className='text-primary'>(PRO)</span>.</p>

        <div className="mb-4 text-center">
          <div>
            {/* <img src="/images/web-app.jpg" className="img-fluid bordered-img mb-4 mt-4" alt="InstaDR Doctor web app" /> */}
            <Image 
              src="/images/web-app.jpg"
              alt="A gif showing instadr platform in action"
              width={1200}
              height={0}
              style={{
                border: '12px solid black',
                borderRadius: '4px',
                height: "auto",
                maxWidth: "80%",
                display: "block",
                margin: "auto"
              }}
            />
          </div>
          <div className="text-center mt-5 mb-4">   
            <a className="btn btn-primary" href="/pricing">Sign Up</a>
          </div>
        </div>

        <div className="download-apps" style={{display: "none"}}>
          <div className="mb-4 mt-5">
            <h5>Download apps</h5>
            <div style={{display: 'flex'}}>
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                <i className="uil uil-apple h5 mb-0 text-primary"></i>
                <span style={{ marginLeft: '5px' }}>App Store</span>
              </span>
              <span style={{ display: 'flex', alignItems: 'center', marginLeft: '25px' }}>
                <i className="uil uil-android h5 mb-0 text-primary"></i>
                <span style={{ marginLeft: '5px' }}>Google Play Store</span>
              </span>
            </div>
          </div>

          <div className="mb-4 mt-5">
            <h5>Medical groups and organizations? </h5>
            <a className="underline">Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}


export default function Physicians({ }) {
  return (
    <Layout home>
      <Head>
        <title>A telehealth and telemedicine platform built for Physicians.</title>
      </Head>      

      {renderSectionHero()}
      {renderSectionBenefits()}
      {renderGrowPractice()}
      {renderSectionHowItWorks()}
      {renderSectionWhyInstaDR()}
      {renderSectionSyncCalendars()}
      {renderTryToday()}
    </Layout>   
  )
}