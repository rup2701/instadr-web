import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';

import { Icon } from "@iconify/react";
import padlockIcon from "@iconify-icons/uil/padlock";
import analyticsIcon from "@iconify-icons/uil/analytics";
import userCheckIcon from "@iconify-icons/uil/user-check";
import shieldPlusIcon from "@iconify-icons/uil/shield-plus";
import shieldSlashIcon from "@iconify-icons/uil/shield-slash";
import shieldCheckIcon from "@iconify-icons/uil/shield-check";
import cloudShieldIcon  from "@iconify-icons/uil/cloud-shield";
import secureArchIcon from "@iconify-icons/uil/data-sharing";
import cloudLockIcon from "@iconify-icons/uil/cloud-lock";
import cloudDataConnectionIcon from "@iconify-icons/uil/cloud-data-connection";

import cloudDownloadIcon from "@iconify-icons/uil/cloud-download";
import databaseIcon from "@iconify-icons/uil/database";
import videoIcon from "@iconify-icons/uil/video";

const Hero = () => {
  return (
    <section className="bg-half-170 bg-teal" style={{borderBottom: '1px solid #00000010'}}>
      <div className="container">
        <div className="row align-items-center pt-5">
          <div className="col-lg-7 col-md-6 order-2 order-md-1">
            <div className="title-heading">
              <h1 className="display-2" style={{lineHeight: 1.0}}>A trustworthy partner at <span className="text-primary">safeguarding</span> your health information. </h1>
              <p className="lead mt-4">InstaDR is a <mark>HIPAA-compliant</mark>company.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 pt-2 order-1 order-md-2 mt-sm-0 pt-sm-0 mb-5">
            <div className="classic-saas-image position-relative">  
              <Image
                alt="Secure Cloud"
                src="/images/secure-cloud-blue.svg"
                style={{ width: '70%', display: "block", margin: "auto" }} className="img-fluid d-block="  />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const  Highlights = () =>  {
  return (
    <section className="bg-half-170" style={{borderBottom: '1px solid #00000010'}}>
      <div className="container pb-5 pt-5">
        <div className="row">
          <div className="col-md-4 col-12 p-3">
            <div className="feature-card text-left">
              <div className="d-inline-block">
                {/* <img src="/images/end_to_end_encryption.svg" height="25px" /> */}
                <Icon icon={secureArchIcon} className="h1 text-primary mb-4 mr-4" />
              </div>

              <div className="content mt-4">
                <h4 className="title">Encrypted Data Transmission</h4>
                <p className=" mb-0">
                All video calls are automatically protected with strong encryption. Any additional ways the system sends data must also use secure encryption to protect patient privacy.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-12 mt-5 mt-sm-0 p-3">
            <div className="feature-card text-left">
              <div className="d-inline-block">
                <Icon icon={cloudLockIcon} className="h1 text-primary mb-4 mr-4" />
              </div>

              <div className="content mt-4">
                <h4 className="title">Secure Data Management</h4>
                <p className=" mb-0">
                All patient-related data requires encryption both during storage and transmission.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-12 mt-5 mt-sm-0 p-3">
            <div className="feature-card text-left">
              <div className="d-inline-block">
                {/* <img src="/images/data_privacy.svg" height="25px" /> */}
                <Icon icon={shieldSlashIcon} className="h1 text-primary mb-4 mr-4" />
              </div>

              <div className="content mt-4">
                <h4 className="title">Access Management</h4>
                <p className=" mb-0">
                
                Implementation of strict access controls and comprehensive audit logging for all platform users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const AppSecurity = () => {
  return (
    <section className="section bg-half-170" style={{borderBottom: '1px solid #00000010', background: "#d8d8d825"}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 mt-4 pt-2 mt-lg-0 pt-lg-0">
            <div className="section-title ml-lg-4">
              <h2 className="display-5 mb-5">App and Data Security.</h2>
              <ul className="list-unstyled">
                
                <li style={{ display: 'flex', gap: "16px", alignItems: "center" }} className="mb-0"><h5 className="mr-2">
                <Icon icon={shieldSlashIcon} className="h1 text-primary mb-4 mr-4" /></h5>
                  <p className='lead'>We never analyze, sell or share ePHI with a third-party. It is also not feasible since any identifiable data is encrypted.</p></li>
                <li style={{ display: 'flex', gap: "16px", alignItems: "center"}} className="mb-0">
                  <h6 className="mr-2">
                    <Icon icon={analyticsIcon} className="h1 text-primary mb-4 mr-4" />
                  </h6>
                  <p className='lead'>Any information used for research purposes is first sufficiently stripped of details that can trace back to its owner.</p></li>
                
                <li style={{ display: 'flex', gap: "16px",alignItems: "center" }} className="mb-0">
                  <h5 className="mr-2">
                    <Icon icon={userCheckIcon} className="h1 text-primary mb-4 mr-4" />
                  </h5>
                  <p className='lead'>We get your permission prior to sending any kind of marketing communications.</p></li>
                
                <li style={{ display: 'flex', gap: "16px",alignItems: "center" }} className="mb-0"><h5 className="mr-2">
                  <Icon icon={shieldPlusIcon} className="h1 text-primary mb-4 mr-4" />
                </h5>
                  <p className='lead'>We fully adhere to and compliant with <mark>HIPAA Security and Privacy rules</mark> specifications as per
                   <Link href='https://www.law.cornell.edu/cfr/text/45/164.306'> HIPAA by-laws.</Link></p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5  col-md-6  col-md-5 order-1 order-md-2">
            <div className="app-fature-shape-right position-relative">
              <div className="text-center text-md-right">
                <img src="images/app-data-security.svg" style={{ width: '50%' }} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function renderPlatformSecurity() {
  return (
    <section className="section bg-half-170" style={{borderBottom: '1px solid #00000010'}}>
      <div className="container platform-security ">
        {/* <div>
          <h2><i className="uil uil-lock-alt d-block rounded h2 text-primary mb-0"></i></h2>
        </div> */}
        <div className="row align-items-center mt-4">
          <div className="col-12 order-2 order-lg-1 mt-4 pt-2 mt-lg-0 pt-lg-0">
            <div className="section-title mr-lg-4">
              <h2 className="display-5 mb-4">Platform Security</h2>

              <div className="row">
                <div className="col-lg-6  col-12 p-3"  style={{borderBottom: '1px solid #00000010', borderRight: '1px solid #00000010'}}>
                  <div className="d-flex feature-card align-items-center pt-4" style={{ boxShadow: 'none !important', border: 'none !important', columnGap: "20px" , alignItems: "center"}}>
                    <h2>
                      <Icon icon={shieldCheckIcon} className="h3 text-primary" />
                    </h2>
                    <div className="ml-3">
                      <h5>Full HIPAA compliance</h5>
                      <p className="mb-0">ePHI and communications is stored on HIPAA-compliant cloud and servers.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-12 p-3" style={{borderBottom: '1px solid #00000010'}}>
                  <div className="d-flex feature-card align-items-center pt-4" style={{ boxShadow: 'none !important', border: 'none !important', columnGap: "20px", alignItems: "center" }}>
                    <h2>
                    <Icon icon={cloudShieldIcon} className="h3 text-primary  mr-5" />
                    </h2>
                    <div className="ml-3">
                      <h5>Database security</h5>
                      <p className="mb-0">Any stored ePHI or communications is first encrypted using multiple layers of
                      encryption.</p>
                    </div>
                  </div>
                </div>
              
              
                <div className="col-lg-6  col-12 p-3" style={{borderRight: '1px solid #00000010'}}>
                  <div className="d-flex feature-card align-items-center pt-4" style={{ boxShadow: 'none !important', border: 'none !important', columnGap: "20px" }}>
                    <h2>
                    <Icon icon={databaseIcon} className="h3 text-primary  mr-5" />
                    </h2>
                    <div className="ml-3">
                      <h5>De-centralized storage</h5>
                      <p className="mb-0">NO <mark>single-source-of-truth</mark>. Any ePHI, appointments and communications are stored on different
                       databases. </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-12 p-3">
                  <div className="d-flex feature-card align-items-center pt-4" style={{ boxShadow: 'none !important', columnGap: "20px", alignItems: "center"}}>
                    <h2>
                    <Icon icon={videoIcon} className="h3 text-primary  mr-5" />
                    
                    </h2>
                    <div className="ml-3">
                      <h5>Secure communications</h5>
                      <p className="mb-0">[256-bit] end-to-end encryption for video calling.</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function renderHipaaCompliance() {
  
    return (
      <section className="section overflow-hidden bg-half-170" style={{background: "#d8d8d825"}}>
        <div className="container platform-security ">
          <div className="row align-items-center mt-4">
            <div className="col-12 order-2 order-lg-1 mt-4 pt-2 mt-lg-0 pt-lg-0">
              <div className="section-title mr-lg-4">
                <h2 className="display-5 mb-4">HIPAA Compliance</h2>
                <p className='lead'>
                  We have implemented <mark>HIPAA Privacy and Security rules</mark> to ensure ePHI is protected and secured at all times.
                </p>
                <div className="row mb-4">
                  <div className="col-lg-6  col-12 p-3"  style={{borderBottom: '1px solid #00000010', borderRight: '1px solid #00000010'}}>
                    <div className="d-flex feature-card align-items-center pt-4" style={{ boxShadow: 'none !important', border: 'none !important' , columnGap: "20px"}}>
                      <Icon icon={secureArchIcon} className="h3 text-primary mr-5" />
                      <div className="ml-3">
                        <h5>Transport Encryption</h5>
                        <p className="mb-0">Data is encrypted before it is transmitted using 256-bit encryption.</p>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-6 col-12 p-3"  style={{borderBottom: '1px solid #00000010'}}>
                    <div className="d-flex feature-card align-items-center pt-4" style={{ boxShadow: 'none !important', border: 'none !important' , columnGap: "20px" }}>
                      
                      <Icon icon={cloudLockIcon} className="h3 text-primary  mr-5" />
                      <div className="ml-3">
                        <h5>Backup</h5>
                        <p className="mb-0">Data is backed up daily and retrieveable.</p>
                      </div>
                    </div>
                  </div>
               
                  <div className="col-lg-6  col-12 p-3"  style={{borderBottom: '1px solid #00000010', borderRight: '1px solid #00000010'}}>
                    <div className="d-flex feature-card align-items-center pt-4" style={{ boxShadow: 'none !important', border: 'none !important' , columnGap: "20px" }}>
                      
                      <Icon icon={padlockIcon} className="h3 text-primary  mr-5" />
                      <div className="ml-3">
                        <h5>Authorization</h5>
                        <p className="mb-0">Data can only ever be accessed by authorized personnel. </p>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-6 col-12 p-3"  style={{borderBottom: '1px solid #00000010'}}>
                    <div className="d-flex feature-card align-items-center pt-4" style={{ boxShadow: 'none !important', border: 'none !important', columnGap: "20px"}}>
                      
                      <h4><Icon icon={cloudDataConnectionIcon} className="h3 text-primary  " /></h4>
                      <div className="ml-3">
                        <h5>Integrity</h5>
                        <p className="mb-0">Data is transmitted using TLS and 256-bit End-to-End Encryption and cannot me tampered with in-flight.</p>
                      </div>
                    </div>
                  </div>
               
                  <div className="col-lg-6  col-12 p-3" style={{borderRight: '1px solid #00000010'}}>
                    <div className="d-flex feature-card align-items-center pt-4" style={{ boxShadow: 'none !important', border: 'none !important', columnGap: "20px"}}>
                      <h4>
                      <Icon icon={databaseIcon} className="h3 text-primary  mr-5" />
                      </h4>
                      <div className="ml-5">
                        <h5>Storage Encryption</h5>
                        <p className="mb-0">Data (ePHI and communications) is first encrypted and then stored.</p>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-lg-6 col-12 p-3">
                    <div className="d-flex feature-card align-items-center pt-4" style={{ boxShadow: 'none !important', border: 'none !important', columnGap: "20px" }}>
                      <h5><Icon icon={cloudDownloadIcon} className="h3 text-primary  mr-4" /></h5>
                      <div className="ml-3">
                        <h5>Sharing</h5>
                        <p className="mb-0">Data is stored on HIPAA-compliant cloud/servers. Legal agreements with our technology partners to ensure they meet security standards</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="mt-5 text-center">
              <Link href="/hipaa-compliance">
                <button className="btn btn-primary mt-2 mr-2">Read More</button>
              </Link>
				    </div>
          </div>
        </div>
      </section>
  )
}


export default function Security() {
  return (
    <Layout home>
      <Hero/>
      <Highlights />
      <AppSecurity />
      {renderPlatformSecurity()}
      {renderHipaaCompliance()}
    </Layout>
  )
}