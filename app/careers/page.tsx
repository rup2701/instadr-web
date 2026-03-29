import Head from 'next/head';
import Layout from '@/components/Layout';


function renderSectionHero() {
  return (
    <section className="bg-half-170">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-8 col-12 offset-md-2">
            <img src="/images/careers-1.jpg" style={{maxWidth: '80%'}} />
            <p className="lead pt-5">
              We are looking for <span className="underline"> engineers, doctors, data scientists, designers,
              video-specialists. </span> So if you fit the bill send us your resume and a short
              note on why you would like to join us, and what you would like to do. <a href="mailto:careers@instadrapp.com">Send a resume</a>. 
            </p>
            <p>
              Thanks for your interest.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function renderBG() {
  return (
    <section>
      <div className="container-fluid text-center">
        <img src="/images/core-values-bg.jpg" style={{maxWidth: '100%'}} />
      </div>
    </section>
  )
}


function renderCoreValues() {
  return (
    <section className="bg-half-170">
      <div className="container">
        <h6 className="sub-heading mb-4">Core Values</h6>
        <div className="row">
          <div className="col-md-5 col-12">
            <h4>Build timeless products</h4>
            <p className="lead">
              Fight through complexity to continually
              develop simple and intuitive products.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 offset-md-7 col-12">
            <h4>Sweat the details</h4>
            <p className="lead">
              Take care of the details so our users can focus on the essential.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 col-12">
            <h4>Decide not deliberate</h4>
            <p className="lead">
              Move fast, try things, take calculated risks, and when necessary challenge the 
              status quo.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 offset-md-7 col-12">
            <h4>Security in the DNA</h4>
            <p className="lead">
              We are also in the business of security, and safeguarding health data.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 col-12">
            <h4>Think futuristic</h4>
            <p className="lead">
              Continually bring advances and innovations in science and technology to patients
              and physicians.
            </p>
          </div>
        </div>
      </div>
      
    </section>
  )
}


export default function AboutUs() {
  return (
    <Layout home>
      <Head>
        <title>Careers at InstaDR</title>
      </Head>
      {renderSectionHero()}
      {renderBG()}
      {renderCoreValues()}
    </Layout>
  )
}