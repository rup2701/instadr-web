'use client';

import Link from 'next/link';
import styles from './MegaMenu.module.scss';
import { useState } from 'react';
import { InstaDRLogo } from '../InstaDRLogo';


const MegaMenu = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className={styles.megaMenu}>
      <div className={styles.mobileHeader}>
        <Link href='/'>
          <InstaDRLogo />
        </Link>
        <button className={styles.hamburger} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </button>
      </div>
      <ul className={`${styles.menuItems} ${mobileMenuOpen ? styles.open : ''}`}>
        <Link href='/'>
          <InstaDRLogo />
        </Link>
        <li className={styles.menuItem}>
          <Link href="#">Products</Link>
          <div className={styles.megaDropdown}>
            <div className={styles.menuColumn}>
              <h3>PRODUCTS</h3>
              <ul>
              <Link href="/"><li>Platform</li></Link> 
            <li>Apps</li>
              </ul>
            </div>
            <div className={styles.menuColumn}>
              <h3>SOLUTIONS</h3>
              <ul>
              <Link href='/patients'>
              <li>Patients</li>
            </Link>
            <Link href='/solo-practice'><li>Solo Practitioner</li></Link>
            <Link href="/medical-groups"><li>Clinics and Medical groups</li></Link>
              </ul>
            </div>
          </div>
        </li>
      <li className={styles.menuItem}><Link href="#">Resources</Link>
      <div className={styles.megaDropdown}>
            <div className={styles.menuColumn}>
            <h3>OUR POLICIES</h3>
            <ul>
                <li>
                  <Link href='/hipaa-compliance'>
                    HIPAA Compliance
                  </Link>
                </li>
                <li>

                <Link href='/security'>
                  Data Security and Privacy</Link>
                </li>
              </ul>
            </div>
            <div className={styles.menuColumn}>
              <h3>RESEARCH</h3>
              <ul className="list-unstyled">
                <li>Diagnostic Navigator</li>
              </ul>
            </div>
          </div>
      </li>
      <li className={styles.menuItem}><Link href="#">Company</Link>
      <div className={styles.megaDropdown}>
            <div className={styles.menuColumn}>
            <h3>OUR COMPANY</h3>
            <ul>
            <Link href='/about-us'>
              <li>About us</li>
            </Link>
            <Link href='/careers'>
              <li>Careers</li>
            </Link>
            <Link href='/planet-health'>
              <li>Planet Health</li>
            </Link>
            {/* <Link href='/privacy'>
              <li>Privacy Policy</li>
            </Link>
            <Link href='/service-terms'>
              <li>Service Terms</li>
            </Link> */}
            </ul>
            </div>
          </div>
      </li>
        <li className={styles.menuItem}><Link href="./pricing">Pricing</Link></li>
        <li className={styles.authButtons}>
          {/* <button className={styles.signIn}>
            <Link href='/' style={{color: "white !important"}}>
              Sign In
            </Link>
          </button> */}
          <button className={styles.contactUs}>
            <Link href='contact-us' style={{color: "white !important"}}>
              Contact Us
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MegaMenu;
