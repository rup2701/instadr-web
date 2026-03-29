'use client'
import Head from 'next/head';
import Layout from '@/components/Layout';
import Link from 'next/link';
// import { useEffect } from 'react';


export default function Pricing() {

const PatientPricing = () => {
  return (
      <section style={{padding: "6rem 0"}}>
        <div className="container">
          <h3 className="mt-5 mb-4">Patients</h3>
          <div className="row mb-5 mt-5">
            <div className="col-12 col-md-4">
              <div className="price-option border-gray">
                <div className="price-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3>
                    Video Consultation</h3>
                  <h3 style={{ color: '#0080ff', fontWeight: 'bold' }}>$79</h3> </div>
                  <h6 className="mt-4">What&apos;s included:</h6>
                  <ul className="list-unstyled mb-0 pl-0">
                    <li>Video consultation with a follow-up call</li>
                    <li>Message your doctor</li>
                    <li><mark>Add family members</mark></li>
                    <li>Refill prescriptions</li>
                    <li>All your treatment history, in one place.</li>
                    <li>100% refundable</li>
                    <li>Cancel/reschedule (2 hrs before) to avoid a fee</li>
                  </ul>
                  <Link  href="/">
                    <div className="btn btn-primary mt-4">Coming Soon</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  /**
   * 
   */
  function renderPhysicianPlans() {
    return (
      <div className="container" style={{paddingBottom: '170px'}}>
        <h3 className="mt-5 mb-5">Doctors</h3>
        <div className="row mb-5 mt-4">
          <div className="col-12 col-md-4 pb-4 pt-2">
            <div className="price-option border-gray">
              <div>
                <h3>Platform-only</h3>
                <span style={{ display: 'block', opacity: '0.4', fontSize: '0.9rem', fontWeight: 'bold' }} className="mt-4 mb-2">Single sign-on</span>
                <h5 className="mt-">Platform fee (17%) per booking</h5>
              </div>
              <div>
                <h6 className="mt-4">What&apos;s included:</h6>
                <ul className="list-unstyled mb-0 pl-0">
                  <li>Get matched with people looking to triage
                  or get treatment</li>
                  <li><mark>Seamless video calling experience</mark></li>
                  <li>In-app messaging</li>
                  <li>Control your availability</li>
                  <li>Practice from anywhere/anytime</li>
                </ul>
              </div>
              <div className="pt-4">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfhE6OuGSmqMP4DnmnsvJlS19-nFq3gHf16b-Fu5wmamQnb4g/viewform"
                  className="btn btn-primary ">
                  Join Early Access
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 pb-4 pt-2">
            <div className="price-option border-azure">
              <div>
                <h3 className="display-">Standard</h3>
                <span style={{ display: 'block', opacity: '0.4', fontSize: '0.9rem', fontWeight: 'bold' }} className="mt-4 mb-2">Solo Practitioner</span>
                <h5 className="mt-">$79/mo</h5>
              </div>
              <div>
                <h6 className="mt-4">What&apos;s included:</h6>
                <ul className="list-unstyled mb-0 pl-0">
                  <li>Practice on the platform or off the platform</li>
                  <li>Unlimited video-calling and in-app messaging</li>
                  <li>Built-in mini-EHR</li>
                  <li>Dedicated webpage to promote telehealth option</li>
                  <li>Schedule follow-up appts</li>
                  <li>Cancel anytime</li>
                </ul>
              </div>
              <div className="pt-4">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfhE6OuGSmqMP4DnmnsvJlS19-nFq3gHf16b-Fu5wmamQnb4g/viewform"
                 className="btn btn-primary mt-4">
                  Practice 3 months free
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 pb-4 pt-2">
            <div className="price-option">
              <div>
                <h3 className="text-primary display6">Pro</h3>
                <span style={{ display: 'block', opacity: '0.4', fontSize: '0.9rem', fontWeight: 'bold' }} className="mt-4 mb-2">Clinics and Medical groups</span>
                <h5 className="mt-">10+ physicians</h5>
              </div>
              <div>
                {/* <h6 className="mt-4">What&apos;s included</h6> */}
                <p style={{ fontSize: '20px' }}>Contact us to learn more about how InstaDR platform can power your organization or medical group.</p>
              </div>
              <div className="pt-4">
                <a href="/contact-us" className="btn btn-outline-primary mt-4">Get in touch</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const Demo = () =>  {
    return (
      <section className="bg-half-260" style={{borderTop: '1px solid #00000004', background: '#d8d8d815'}}>
        <div className="container text-center">
          <h5 className="sub-heading">LIVE DEMO</h5>
          <h2 className="display-6 mb-4">Schedule a Demo.</h2>
          <p className="lead subheading">Experience <span style={{color: '#0080ff', fontWeight: '600'}}>live</span>, the power of InstaDR Telehealth Platform and Apps.</p>
          <div className="calendly-inline-widget mb-4" data-url="https://calendly.com/instadr/telehealth-demo?background_color=f6f7fb&primary_color=0080ff" style={{ minWidth: '320px', height: '840px' }}></div>
        </div>
      </section>
    )
  }

  // useEffect(() => {
  //   const head = document.querySelector('head');
  //   const script = document.createElement('script');
  //   script.setAttribute(
  //     'src',
  //     'https://assets.calendly.com/assets/external/widget.js'
  //   );
  //   head.appendChild(script);
  // }, []);

  return (
    <Layout home>
      <Head>
        <title>InstaDR, pricing and plans</title>
      </Head>
      <div style={{padding: "0"}}>

        <h1 className="display-4 mt-5 text-center">
          Pricing and Plans
        </h1>
      </div>
      <PatientPricing />
      {renderPhysicianPlans()}
      <Demo />
    </Layout>   
  )
}