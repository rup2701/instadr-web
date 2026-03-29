import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';

function renderSectionHero() {
  return (
    <section className="bg-half-260" id="cover-about-us">
      {/* <div className="translucent-bg" /> */}
      <div className="container p-3">
        <img src="/images/insta-logo-icon.svg" width="32px"/>
        <h4 className="mt-4">
          We are a security co.
        </h4>
        <h3>
          We are a healthcare co.
        </h3>
        <h2>
          We are a telehealth and telemedicine platform.
        </h2>
        <h1>
          <span className="primary-text"> But</span> above all we are in the business of making life better.
        </h1>
      </div>
    </section>
  )
}

function renderEmpoweringBusineses() {
  return (
    <section  className="bg-half-170" style={{borderBottom: '1px solid #00000010'}}>
      <div className="container pt-5 pb-5 crd">
      <h6 className="sub-heading">OUR DNA</h6>
        <div className="row">
          {/* <h6>What we are building</h6> */}
          <div className="col-md-5 col-12">
            <h2 className="display-6">Fostering relationships</h2>
            <p className="lead">
              Redefining patient-physician interaction with a 
              modern and intutive user-experience.
            </p>
          </div>
          <div className="col-md-5 offset-md-1 col-12">
          <h2 className="display-6">Safeguarding data</h2>
            <p className="lead">
              We work hard to ensure you personal
              health data is secured and protected at all times.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function renderSectionMission() {
  return (
    <section className="bg-half-260">
      <div className="container pt-5 pb-5">
        <div className="row" style={{alignItems: "center"}}>
          <div className="col-md-5 offset-md- col-12" style={{display: 'flex', alignItems: 'center'}}>
            <img className='img-fluid' src="/images/insta-mission.png" style={{maxWidth: '75%', display: 'block', margin: 'auto'}} />
          </div>
          <div className="col-md-6 offset-md-1 col-12 p-3">
            <h6 className="sub-heading">ON A MISSION</h6>
            {/* <h2>To make it effortless for doctors to help and stay connected with patients.</h2> */}
            <h2 className="mb-2 display-6">At InstaDR we are focussed on simplifyling how doctor and patients connect, and stay connected ...
            </h2>
            {/* <p className="lead mt-2">
              We want to make it effortless and seamless to connect patients 
              and physicians. <br /> 
              We are also striving to make physicians connect with their existing patients
              in a virtual setting eliminating in-accessiblity, travel, time and costs.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  )
}

function renderSectionValues() {
  return (
    <section>
      <div className="container pt-5 pb-5">
      <h5>VALUES AND BELIEFS</h5>
      </div>
    </section>
  )
}

export default function AboutUs() {
  return (
    <Layout home>
      <Head>
        <title>About InstaDR</title>
      </Head>
      {renderSectionHero()}
      {renderEmpoweringBusineses()}
      {renderSectionMission()}
      {/* {renderSectionValues()} */}
    </Layout>
  )
}