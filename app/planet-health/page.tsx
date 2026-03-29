import Head from 'next/head';
import Layout from '@/components/Layout';
// import Image from 'next/image';
// import Link from 'next/link';

function renderSectionHero() {
  return (
    <section className="section bg-half-170" style={{ borderBottom: '1px solid #97979725' }}>
      <div className="bg-overlay bg-overlay-white"></div>
      <div className="container position-relative" >
        <div className="row mt-md-5 pt-md-3 mt-4 pt-2 mt-sm-0 pt-sm-0 justify-content-center">
          <div className="col-lg-5 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div className="classic-saas-image position-relative">
              <div className="bg-saas-shap position-relative">
                <img src="/images/charities.png" style={{ maxWidth: '100%' }} className="mx-auto d-block" alt="" />
              </div>
            </div>
          </div>
          <div className="col-12 text-center">
            <div className="section-title">
              <p className="lead mx-auto mt-2" style={{ maxWidth: '60%' }}>
                <mark>We pledge</mark> to donate 1% of our total sales to bring health services and care
               to the underserved places around the world.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function renderSectionVolunteer() {
  return (

    <section className="bg-half-260 d-table w-100 overflow-hidden" id="home">
      <div className="container">
        <div className="row align-items-center" style={{ minHeight: '50vh' }}>
          <div className="col-lg-6 col-md-6">
            <div className="title-heading mt-4">
              {/* <h3 className="display-4 my-3">Spare an hour <span class="text-primary">or two</span></h3> */}
              <p className="lead">Calling all medical professionals</p>
              <div className="watch-video mt-4 pt-2">
                <a href="javascript:void(0)" className="btn btn-primary m-1">Volunteer</a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div className="classic-app-image position-relative">
              <div className="bg-saas-shape saas-feature-shape-right position-relative">
                {/* <img src="/images/volunteer-hero.png" class="img-fluid mover mx-auto d-block " alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function PlanetHealth() {
  return (
    <Layout home>
      <Head>
        <title>Planet Health</title>
      </Head>
      {renderSectionHero()}
      {renderSectionVolunteer()}
    </Layout>
  )
}