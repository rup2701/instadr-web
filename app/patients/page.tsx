import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';



import { Icon } from "@iconify/react";
import videoIcon from "@iconify-icons/uil/video";
import shieldCheckIcon from "@iconify-icons/uil/shield-check";

// import heartIcon from "@iconify-icons/uil/heart";
// import searchIcon from "@iconify-icons/uil/search";
// import scheduleIcon from "@iconify-icons/uil/schedule";

// import uploadImageIcon from "@iconify-icons/uil/upload";
// import commentIcon from "@iconify-icons/uil/comment";
// import bellIcon from "@iconify-icons/uil/bell";

// import codeBranchIcon from "@iconify-icons/uil/code-branch";
// import padlockIcon from "@iconify-icons/uil/padlock";
// import analyticsIcon from "@iconify-icons/uil/analytics";
// import userCheckIcon from "@iconify-icons/uil/user-check";
// import shieldPlusIcon from "@iconify-icons/uil/shield-plus";
// import shieldSlashIcon from "@iconify-icons/uil/shield-slash";
// import cloudShieldIcon  from "@iconify-icons/uil/cloud-shield";
// import secureArchIcon from "@iconify-icons/uil/data-sharing";
// import creditCardIcon from "@iconify-icons/uil/credit-card";
// import cloudDataConnectionIcon from "@iconify-icons/uil/cloud-data-connection";
// import fileCheckAltIcon from "@iconify-icons/uil/file-check-alt"

// import dollarAltIcon from "@iconify-icons/uil/dollar-alt";
// import clockTenIcon from "@iconify-icons/uil/clock-ten";

import selfieIcon from "@iconify-icons/uil/selfie";
import cloudUploadIcon from "@iconify-icons/uil/cloud-upload";

function renderSectionHero() {
  return (
    <section className="bg-half-170 d-table w-100 overflow-hidden" style={{ borderBottom: '1px solid #00000010' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-7">
            <div className="title-heading mt-4">
              <h1 className="display-2 mb-3" style={{lineHeight: "1.0"}}>Reclaim your <span className="text-primary">time and health.</span></h1>
              <p className="lead"></p>
              <div className="mt-4 d-flex justify-content-left" style={{columnGap: "10px"}}>
                <a href="javascript:void(0)" className="btn btn-outline-primary mt-2 mr-2"><i className="mdi mdi-apple"></i> App Store</a>
                <a href="javascript:void(0)" className="btn btn-outline-primary mt-2"><i className="mdi mdi-google-play"></i> Play Store</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div className="classic-saas-imag saas-feature-shape-right position-relative">
              <div className="bg-saas-shape position-relative">
                <img src="/images/reclaim-time.png" className="img-fluid mover mx-auto d-block " alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


function renderSectionBenefits() {
  return (
    <section className="section bg-half-170" style={{ borderBottom: '1px solid #00000010' }}>
      <div className="container">
        <h5 className="sub-heading">Benefits</h5>
        <div className="row">
          <div className="col-md-6 col-12 mt-4 pt-2" style={{ borderBottom: '1px solid #00000010', borderRight: '1px solid #00000010' }}>
            <div className="text-left">
              <div className="card-body">
                <div className="d-inline-block">
                  <Icon icon={videoIcon} className="h2 text-primary" />
                </div>
                <div className="mt-4">
                  <h5><a href="javascript:void(0)" className="text-dark">Schedule video consultations</a></h5>
                  <p className=" mt-3 mb-0">HD video calling. Let the doctor call you.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-12 mt-4 pt-2" style={{ borderBottom: '1px solid #00000010' }}>
            <div className="text-left">
              <div className="card-body">
                <div className="d-inline-block">
                  <Icon icon={shieldCheckIcon} className="h2 text-primary" />
                </div>
                <div className="mt-4">
                  <h5><a href="javascript:void(0)" className="text-dark">Data security and privacy</a></h5>
                  <p className=" mt-3 mb-0">For your eyes only. What you share is encrypted with multiple
                  layers of security, and can only be read by your doctor.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 mt-4" style={{ borderRight: '1px solid #00000010' }}>
            <div className="text-left">
              <div className="card-body">
                <div className="d-inline-block">
                <Icon icon={selfieIcon} className="h2 text-primary" />
                </div>
                <div className="mt-4">
                  <h5><a href="javascript:void(0)" className="text-dark">Connect from any device</a></h5>
                  <p className=" mt-3 mb-0">Easily access your information anytime, anywhere.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 mt-4">
            <div className="text-left">
              <div className="card-body">
                <div className="d-inline-block">
                  <Icon icon={cloudUploadIcon} className="h2 text-primary" /> 
                </div>
                <div className="mt-4">
                  <h5><a href="javascript:void(0)" className="text-dark">Upload images and data</a></h5>
                  <p className=" mt-3 mb-0">Easily share vital information with your physician.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


function renderSectionAppScreenshots() {
  return (
    <section className="section overflow-hidden bg-half-170">
      <div className="container mt-100 mt-60">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="app-feature-shape-left position-relative">
              <div className="text-center text-md-left">
                <Image
                  src="/images/app/book-doctor.webp"
                  alt="Image showing book doctor mobile views"
                  height={450}
                  width={450}
                  style={{ maxWidth: '100%' }}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 mt-5 mt-sm-0">
            <div className="org-benefits">
              <h1 className="display-6">Search and book appointments</h1>
              <p className="lead">Stay connected with your GP or find a specialist or any other needs on insta marketplace.</p>
              <ul className="list-unstyled">
                <li className="mb-0"><i className="uil uil-clock  text-primary"></i><span className=" ">Time that works for you.</span></li>
                <li className="mb-0"><i className="uil uil-user-circle text-primary"></i><span className=" ">Search and browse doctor profiles.</span></li>
                <li className="mb-0"><i className="uil uil-calendar-alt text-primary"></i><span className=" ">Book a doctor. Pay with cash or insurance.  Pay with cash or insurance.</span></li>
                <li style={{ display: 'flex' }} className="mb-0"><i className="uil uil-bell  text-primary"></i><span className=" ">Get notified before every appointment</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-100 mt-60">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-7 order-2 order-md-1 mt-5 mt-sm-0">
            <div className="org-benefits">
              <h2 className="display-6">Upload photos and docs</h2>
              <p className="lead">Securely share information with your physician.</p>
              <ul className="list-unstyled">
                <li><i className="uil uil-cloud-lock text-primary"></i><span>Upload images and documents</span></li>
                <li><i className="uil uil-thermometer text-primary"></i><span>Upload data gathered from home blood pressure cuff, home glucose meter, thermometer</span></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6 col-md-5 order-1 order-md-2">
            <div className="app-feature-shape-right position-relative">
              <div className="text-center text-md-right">
                <Image
                  src="/images/app/upload-photos-portrait.webp"
                  height={325}
                  width={325}
                  style={{ maxWidth: '100%' }}
                  className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-100 mt-60">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-5">
            <div className="app-feature-shape-left position-relative">
              <div className="text-center text-md-left">
                <Image src="/images/app/messaging-group.webp"
                  height={450}
                  width={450}
                  style={{ maxWidth: '100%' }} className="img-fluid" alt="" />
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-7 mt-5 mt-sm-0">
            <div className="org-benefits">
              <h2 className="display-6">Easy to stay in touch</h2>
              <p className="lead">Make most of your virtual visit for diagnosis, treatment or follow-up.</p>
              <ul className="list-unstyled">
                <li style={{ display: 'flex' }} className="mb-0">  <i className="uil uil-chat-bubble-user align-middle text-primary"></i><span className=" ">Message and follow up with doctors</span></li>
                <li style={{ display: 'flex' }} className="mb-0">  <i className="uil uil-cloud-lock align-middle text-primary"></i><span className=" ">Securely share images and files</span></li>
                <li style={{ display: 'flex' }} className="mb-0">  <i className="uil uil-check-circle align-middle text-primary"></i><span className=" ">HIPAA-compliant</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function renderSectionAppDownload() {
  return (
    <section className="section  bg-half-170">
      {/* <div className="bg-overlay bg-overlay-white"></div> */}
      <div className="container position-relative">
        <div className="row mt-md-5 pt-md-3 mt-4 pt-2 mt-sm-0 pt-sm-0 justify-content-center">
          <div className="col-lg-5 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0" >
            <div className="classic-saas-image position-relative">
              <div className="bg-saas-shap position-relative">
                {/* <img src="/images/app/download-app.png" style={{ maxWidth: '50%'}} class="mx-auto d-block" alt="" /> */}
              </div>
            </div>
          </div>
          <div className="col-12 text-center">
            <div className="section-title">
              <h3 className="title mb-4">Download the app today.</h3>
              <div className="mt-4 d-flex justify-content-center" style={{columnGap: "10px"}}>
                <a href="javascript:void(0)" className="btn btn-outline-primary mt-2 mr-2"><i className="mdi mdi-apple"></i> App Store</a>
                <a href="javascript:void(0)" className="btn btn-outline-primary mt-2"><i className="mdi mdi-google-play"></i> Play Store</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Patients() {
  return (
    <Layout home={true}>
      <Head>
        <title>A telemedicine platform built from the ground up for patients.</title>
      </Head>

      {renderSectionHero()}
      {renderSectionBenefits()}
      {renderSectionAppScreenshots()}
      {renderSectionAppDownload()}
    </Layout>
  )
}