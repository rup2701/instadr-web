import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';

import { Icon } from "@iconify/react";
import heartIcon from "@iconify-icons/uil/heart";
import searchIcon from "@iconify-icons/uil/search";
import scheduleIcon from "@iconify-icons/uil/schedule";
import videoIcon from "@iconify-icons/uil/video";

import uploadImageIcon from "@iconify-icons/uil/upload";
import commentIcon from "@iconify-icons/uil/comment";
import bellIcon from "@iconify-icons/uil/bell";

import codeBranchIcon from "@iconify-icons/uil/code-branch";
import padlockIcon from "@iconify-icons/uil/padlock";
import analyticsIcon from "@iconify-icons/uil/analytics";
import userCheckIcon from "@iconify-icons/uil/user-check";
import shieldPlusIcon from "@iconify-icons/uil/shield-plus";
import shieldSlashIcon from "@iconify-icons/uil/shield-slash";
import shieldCheckIcon from "@iconify-icons/uil/shield-check";
import cloudShieldIcon  from "@iconify-icons/uil/cloud-shield";
import secureArchIcon from "@iconify-icons/uil/data-sharing";
import creditCardIcon from "@iconify-icons/uil/credit-card";
import cloudDataConnectionIcon from "@iconify-icons/uil/cloud-data-connection";
import fileCheckAltIcon from "@iconify-icons/uil/file-check-alt"

import dollarAltIcon from "@iconify-icons/uil/dollar-alt";
import clockTenIcon from "@iconify-icons/uil/clock-ten";
import stethoscopeIcon from "@iconify-icons/uil/stethoscope-alt";
import rocketIcon from "@iconify-icons/uil/rocket";


import cloudDownloadIcon from "@iconify-icons/uil/cloud-download";
import selfieIcon from "@iconify-icons/uil/selfie";

// import fileCheckAltIcon from "@iconify-icons/uil/file-check-alt";
// import fileCheckAltIcon from "@iconify-icons/uil/file-check-alt";
// import fileCheckAltIcon from "@iconify-icons/uil/file-check-alt";
// import fileCheckAltIcon from "@iconify-icons/uil/file-check-alt";

/**
 * Page cover
 */
const Hero = () => {
  return (
    <section id="cover-med-group" className="bg-half-170">
      <div className="translucent-bg-azure"/>
      <div className="container">
        <div className="row mt-5 align-items-center">
          <div className=" col-md-8 col-12">
            <h1 className="display-1" style={{color: '#ffffff', lineHeight: 0.8}}>Embrace the new, <span className="text-primary">empower</span> your patients and <span className="text-primary">doctors.</span></h1>
            <p className="lead subheading mt-5" style={{color: 'white', fontWeight: '800'}}>Meet patients and families where they are ...</p>
          </div>
        </div>
      </div>
    </section>
  )
}


const Benefits = () => {
  return (
    <section className="section bg-half-170">
      <div className="container ">
        <h5 className="sub-heading">Telehealth Benefits</h5>
        <div className="row ">
          <div className="col-md-4 col-12 p-4" style={{borderBottom: '1px solid #00000010', borderRight: '1px solid #00000010', }}>
            <div className="features text-left">
              <div className="position-relative d-inline-block">
                <Icon icon={videoIcon} className="h2 text-primary" />
              </div>

              <div className="content mt-4">
                <h5>Virtual care</h5>
                <p className=" mb-0">Reduce burden and cost of care. Increase accessibility and quality of care using video visits.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-12 mt-5 mt-sm-0 p-4" style={{ borderBottom: '1px solid #00000010',  borderRight: '1px solid #00000010',}}>
            <div className="features text-left">
              <div className="position-relative d-inline-block">
              <Icon icon={fileCheckAltIcon} className="h2 text-primary mb-4" />
              </div>
              <div className="content mt-4">
                <h5>Continuity of care</h5>
                <p className=" mb-0">Stay competitive. Curb patient no-shows for follow-up and urgent care cases.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-12 mt-5 mt-sm-0 p-4" style={{ borderBottom: '1px solid #00000010', }}>
            <div className="features text-left">
              <div className="position-relative d-inline-block">
                <Icon icon={stethoscopeIcon} className="h2 text-primary" />
              </div>
              <div className="content mt-4">
                <h5>Better outcomes</h5>
                <p className=" mb-0">Provide higher quality care by humanizing patient-physician interactions.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-12 mt-5 mt-sm-0 p-4" style={{ borderRight: '1px solid #00000010',}}>
            <div className="features text-left">
              <div className="position-relative d-inline-block">
              <Icon icon={rocketIcon} className="h2 text-primary" />
              </div>

              <div className="content mt-4">
                <h5>Drive innovation</h5>
                <p className="">Develop new virtual care models for specific patient populations.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mt-5 mt-sm-0 p-4"  style={{ borderRight: '1px solid #00000010',}}>
            <div className="features text-left">
              <div className="position-relative d-inline-block">
                <Icon icon={dollarAltIcon} className="h2 text-primary" />
              </div>

              <div className="content mt-4">
                <h5>Economy of scale</h5>
                <p className="">Turn on-call hours to billable hours, attract new patients.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mt-5 mt-sm-0 p-4">
            <div className="features text-left">
              <div className="position-relative d-inline-block">
              <Icon icon={clockTenIcon} className="h2 text-primary" />
              </div>
              <div className="content mt-4">
                <h5>Flexibility</h5>
                <p className="">Reduce overhead for physicians with a flexible work-from-home model.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function renderStats() {
  return (
    <section  className="section bg-half-170">
      <div className="container">
        <h5 className="sub-heading mb-4">By the numbers</h5>
        <div className="row align-items-center pt-4 ">
          <div className="col-12 col-md-5 offset-md- order-2 order-lg-2 mt-2 card" style={{padding: 0, background: "#f5f6f8", border: "1px solid #000000"}}>
            <div className="section-title mr-lg-4">
              <div className="row">
                <div className=" col-12">
                  <div className="d-flex feature-card align-items-center pt-4">
                    <div className="ml-3">
                      <h5>Costs</h5>
                      <p className="lead mt-2">
                        <span className="underline">Virtual visits saved patients</span> a median of <u>88 minutes</u> and <u>33 miles</u> compared to usual care, this according to a random trial
                        done on Parkinson&apos;s patients.</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 mt-5">
                  <div className="d-flex feature-card align-items-center pt-4">
                    <div className="ml-3">
                      <h5>No-show</h5>
                      <p className="lead mt-2">
                        Of the ~23k scheduled visits <span className="underline">20% of patients</span> missed their appointments.
                        <em>Thus increasing the burden of care and healthcare costs.</em> Medicaid missed appts (28%). Medicare missed appts (15.3%).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 offset-md-1 order-lg-2" >
            <img src="/images/stats.jpg" style={{borderRadius: '12px'}} className="img-fluid bordered-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

function renderPracticeFromAnywhere() {
  return (  
    <section className="bg-half-170" style={{background: '#003f8415', width: '90vw', margin: 'auto'}}>
      <div className="container ">
        <div className="row justify-content-center mt-4">
          <div className="col-md-6">
            <div className="saas-feature-shape-left position-relative">
              <img src="/images/flip-the-switch@2x.png" style={{maxWidth: "76%"}} className="img-fluid" alt="InstaDR Mobile App" />
            </div>
          </div>
         

          <div className="col-md-6 mt-4 card" style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'center'}}>
            <div className="org-benefits">
              <h6 className="sub-heading">Multiple platforms</h6>
              <h2 className="display-4">Practice from anywhere</h2>
              <p className="lead subheading mb-4 mt-4">Give your clinicians the flexibility to practice securely from anywhere. Available on web, mobile and tablet.</p>
              <ul className='list-unstyled' >
                <li className="mb-0"><i className="uil uil-schedule  text-primary"></i><span>View and get notified about new appointments</span></li>
                <li className="mb-0"><i className="uil uil-analytics  text-primary"></i><span>Analyze reports about your calls and revenue</span></li>
                <li  className="mb-0"><i className="uil uil-users-alt  text-primary"></i><span>Bring patients history with you on the go</span></li>
                <li  className="mb-0"><i className="uil uil-android-phone-slash text-primary"></i><span>Easily modify your availabilty</span></li>
              </ul>    
            </div>
          </div>
        </div>
        {/* <div className="text-center mt-5">   
          <a className="btn btn-primary" href="/pricing">Grow your practice</a>
        </div> */}
      </div>
    </section>
  )
}

function renderSectionDashboard() {
  return (
    <section id="med-group--dashboard" className="bg-half-170">
      <div className="container text-center">
        <h2 className="display-4 mb-3">Simple workflow. <span style={{display: "block", opacity: "0.6"}}> Built for scale.</span></h2>
        <p className="lead subheading mb-5 mt-4 narrow">Secure multi-cloud architecture, integrated full-service solution
        to keep doctors, patients and the whole organization connected.</p>
        
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div className="mb-5">
            <img src="/images/slideshow/slide-1.jpg" className="img-fluid bordered-img"  alt="InstaDR clinical dashboard and workflow" />
          </div>
        </div>

        {/* <div> */}
          <ul className="mt-5 list-unstyled" style={{listStyle: "disc !important"}}>
            <li><Icon icon={videoIcon} className="h2 text-primary m-2" />HD video calling</li>
            <li><Icon icon={userCheckIcon} className="h2 text-primary m-2" />Signup and Onboarding</li>
            <li><Icon icon={shieldPlusIcon} className="h2 text-primary m-2" />HIPAA compliance</li>
            <li><Icon icon={scheduleIcon} className="h2 text-primary m-2" />Intelligent scheduler</li>
            <li><Icon icon={commentIcon} className="h2 text-primary m-2" />In-app messaging</li>
            <li><Icon icon={creditCardIcon} className="h2 text-primary m-2" />Payments</li>
            <li><Icon icon={selfieIcon} className="h2 text-primary m-2" />Mobile and desktop apps</li>
            <li><Icon icon={cloudDownloadIcon} className="h2 text-primary m-2" />Data sync</li>
            <li><Icon icon={analyticsIcon} className="h2 text-primary m-2" />Data analytics and dashboard</li>
            <li><Icon icon={codeBranchIcon} className="h2 text-primary m-2" />Clinical workflows</li>
            <li><Icon icon={codeBranchIcon} className="h2 text-primary m-2" />API Integrations</li>
            <li><Icon icon={fileCheckAltIcon} className="h2 text-primary m-2" />Licensure</li>
          </ul>
        {/* </div> */}
      </div>
    </section>
  )
}

function renderTelehealthROI() {
  return (
    <section className="bg-half-170 org-benefits ">
      <div className="container" >
        <div style={{ maxWidth: "60%" }}>
            <h6 className="sub-heading">telehealth ROI</h6>
            <h2 className="display-5">Reap powerful organization-wide benefits.</h2>
          <p className="lead subheading mt-4 mb-4" >
            Improve patient outcomes and ensure financial
            stability of your practice or organization. </p>
        </div>
      
        <div className="row d-flex" style={{alignItems: "center"}} >
          <div className="col-md-5 order-md-2 offset-md1 " style={{ display: 'flex', alignItems: "center"}}>
            <img src="/images/telehealth-roi.jpg" className="img-fluid bordered-img" style={{borderRadius: '16px', maxWidth: "90%"}} alt="Telehealth ROI"/>
          </div>
          <div className="col-md-7 order-md-1 ">
            <ul className='pr-8'>
              <li>
                <i className="uil uil-dollar-alt  text-primary mb-0" ></i>
                <span className="">Introduce a new revenue stream with expanded access to care.</span>
              </li>
              <li>
                <i className="uil uil-file-check-alt text-primary mb-0" ></i>
                <span className="">Help fulfill quality measures</span>
              </li>
              <li>
                <i className="uil uil-chart-line  text-primary mb-0" ></i>
                <span className="">Improve efficiency.</span>
              </li>
              <li>
                <i className="uil uil-award text-primary mb-0" ></i>
                <span className="">Increase patient retention and loyalty.</span>
              </li>
              <li>
                <i className="uil uil-analytics text-primary mb-0"></i>
                <span className="">Increase data-driven care.</span>
              </li>
              <li>
                <i className="uil uil-chart-pie-alt text-primary mb-0"></i>
                <span className="">Expand telehealth programs through access and referrals.</span>
              </li>
              <li>
                <i className="uil uil-robot text-primary mb-0" ></i>
                <span className="">Be on the cutting-edge of technology and innovation.</span>
              </li>
              <li>
                <i className="uil uil-bell text-primary mb-0"></i>
                <span className="">Appointment reminders (sms, in-app, text) to reduce no-shows and missed-appointments</span>
              </li>
              <li>
                <i className="uil uil-schedule text-primary mb-0"></i>
                <span className="">Intelligent appointment scheduler with 30-minutes (configurable) availabilty windows.</span>
              </li>
            </ul>
          </div>
        </div>
        <div>        
        </div>
        <div className="mt-5 d-flex justify-content-center">
          <a className="btn btn-primary mt-5" href='https://calendly.com/instadr/telehealth-demo'>Schedule a Demo</a>
        </div>
      </div>
    </section>
  )
}


export default function MedGroups() {
  return (
    <Layout home>
      <Head>
        <title>A telehealth platform to powers medical groups and organizations.</title>
      </Head>
      <Hero />
      <Benefits />
      {renderStats()}
      {renderPracticeFromAnywhere()}
      {renderSectionDashboard()}
      {renderTelehealthROI()}
    </Layout>
  )
}