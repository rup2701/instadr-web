import Link from "next/link";
import { InstaDRLogo } from '../InstaDRLogo';
import Image  from "next/image";
export default function Footer() {
  
  return (
      <div className="footer">
        <div className="container">
          <div className="row" style={{borderTop: '0px solid #d8d8d8', borderBottom: '1px solid #d8d8d850', padding: '100px 0 60px 0'}}>
            <div className="col-lg-4 col-md-12 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                <div>
                  <Link className="logo-footer" href="/">
                    <InstaDRLogo />
                  </Link>
              <span style={{ fontSize: '1rem', opacity: '0.7', marginTop: '8px' , display: "block"}}>
                Doctors at your fingertips.</span>
            </div>
            
            <Link href="./hipaa-compliance">
              <Image 
                src="/images/hipaa-compliant-logo.png"
                alt="Image for hipaa-compliance"
                height={60}
                width={72}
                className="mt-4"
                />
            </Link>
            </div>
            <div className="col-lg-2 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <h6 className="text-dark  mb-4"><b>Solutions</b></h6>
              <ul className="list-unstyled footer-list mt-2">
                <li><a href="/patients" className="text-muted">Patients</a></li>
                <li><a href="/solo-practice" className="text-muted">Solo Practitioner</a></li>
                <li><a href="/medical-groups" className="text-muted">Clinics</a></li>
              </ul>
            </div>    
            <div className="col-lg-2 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <h6 className="text-dark  mb-4"><b>Resources</b></h6>
              <ul className="list-unstyled footer-list mt-2">
                <li><a href="/pricing" className="text-muted">Pricing and Plans</a></li>
                <li><a href="/hipaa-compliance" className="text-muted">HIPAA Compliance</a></li>
                <li><a href="/security" className="text-muted">Data Security and Privacy</a></li>
                {/* <li><a href="/cookie-prefs" className="text-muted">Cookie Preferences</a></li>  */}
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h6 className="text-dark  mb-4"><b>Company</b></h6>
              <ul className="list-unstyled footer-list mt-2">
                <li><a href="/about-us" className="text-muted">About Us</a></li>
                <li><a href="/careers" className="text-muted">Careers</a></li>
                <li><a href="/planet-health" className="text-muted">Planet Health</a></li>
                {/* <li><a href="/privacy" className="text-muted">Privacy Policy</a></li> */}
                {/* <li><a href="/service-terms" className="text-muted">Service Terms</a></li> */}
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <h6 className="text-dark mb-4"><b>Support</b></h6>
                <ul className="list-unstyled footer-list mt-2">
                  <li><a href="/contact-us" className="text-muted">Contact us</a></li>
                {/* <li><a href="/help" className="text-muted">Help</a></li> */}
                {/* <li><a href="/help" className="text-muted">FAQs</a></li> */}
                </ul>
            </div>
          </div>
          <p className="copyright">© 2025 InstaDR Inc. | All Rights Reserved. </p>
        </div>
      </div>
  )

}