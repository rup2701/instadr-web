'use client';

import Link from "next/link";
import Image from "next/image";
import MegaMenu from "../MegaMenu";

export default function NavBar({  }) {
  
  let mega_menu_visible = false;
  
  function handleMouseOver(value) {
    function hideVisibleMenuItem() {
      let elems = document.getElementsByClassName('show mega-menu');
      if (elems.length > 0) {
        elems[0].classList.add('hide');
        elems[0].classList.remove('show');
      }
    }
    hideVisibleMenuItem();
    
    function showNewMenuItem() {
      document.getElementById(value).classList.remove('hide');
      document.getElementById(value).classList.add('show');
    }
    showNewMenuItem();
    mega_menu_visible = true;
  }
  
  function handleMouseOut() {
    if (mega_menu_visible) {

      const elems = document.getElementsByClassName('mega-menu show');
      if (elems.length === 0) return;
      elems[0].classList.add('hide');
      elems[0].classList.remove('show');
    }
  }

  function renderLogo() {
    return (
      <Link href="./" className="logo-center" style={{marginLeft: 0}}>
        <Image
          src="/images/instaDR-logo.svg"
          height={20}
          width={200}
          alt="InstaDR logo"
        style={{
          height: "24px",
          width: "auto"
        }}
        />
      </Link>
      
    )
  }

  function openMenu(e) {
    // animate the toggle button to open and close 
    document.getElementsByClassName("navbar-toggle")[0].classList.toggle("open");
    document.getElementsByClassName("nav-submenu")[0].classList.toggle("open");
  }

  function renderToggleMenu() {
    return (
      <div className="menu-extras">
        <div className="menuitem" style={{zIndex: 9999}}>
          <a className="navbar-toggle" onClick={(e) => openMenu(e)}>
            <div className="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
        </div>
      </div>
    )
  }


  function renderMegaMenu() {
    return (
      <div className="container">
        {renderLogo()}   
        {renderToggleMenu()}
        <div className="nav-submenu" id="nav">   
          <ul className="list-unstyled" onMouseLeave={() => handleMouseOut()}>
            <li onMouseOver={() => handleMouseOver('products')} >
              Products
              {renderProducts()}
            </li>
            <li onMouseOver={() => handleMouseOver('resources')}>
              Resources
              {renderResources()}
            </li>
            <li onMouseOver={() => handleMouseOver('company')} >
              Company
              {renderCompany()}
            </li>
            <li href='/pricing'>Pricing</li>
            {/* {home && ( */}
              {/* <Link href="/login">
              <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <div className ="btn btn-primary" style={{color: 'white !important', letterSpacing: 0}}>Sign In</div>
              </li>
              </Link> */}
            {/* )} */}
          </ul>
        </div>
      </div>
    )
  }

  /**
   * 
   */
  function renderProducts() {
   
    return (
      <div id="products" style={{ display: 'flex' }} className='hide mega-menu'>
        <div className="sub-menu">
          <div>
            <h5>PRODUCTS</h5>
            <ul className="list-unstyled">
              <Link href="/"><li>Platform</li></Link> 
              <li>Apps</li>
              <Link href='/security'><li>Data Security and Privacy</li></Link>
            </ul>
          </div>
          <div>
            <h5>SOLUTIONS</h5>
            <ul className="list-unstyled">
              <Link href='/patients'>
                <li>Patients</li>
              </Link>
              <Link href='/solo-practice'><li>Physicians</li></Link>
              <Link href="/medical-groups"><li>Medical groups & Organizations</li></Link>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  function renderResources() {
    return (
      <div id="resources" style={{display: 'flex'}} className="hide mega-menu">
        <div className="sub-menu">
          <div>
            <h5>OUR POLICIES</h5>
            <ul className="list-unstyled">
              <Link href='/hipaa-compliance'>
                <li>HIPAA Compliance</li>
              </Link>
              <Link href='/privacy'>
                <li>Privacy Policy</li>
              </Link>
              <Link href='/service-terms'>
                <li>Service Terms</li>
              </Link>
              {/* <Link href='/cookie-prefs'>
                <li>Cookie Preferences</li>
              </Link> */}
            </ul>
          </div>
          <div>
            <h5>RESEARCH</h5>
            <ul className="list-unstyled">
              <li>Diagnostic Navigator</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  function renderCompany() {
    return (
      <div id="company"  className='hide mega-menu' >
        <div className="sub-menu">
          <div>
            <h5>OUR COMPANY</h5>
            {/* <div tyle={{display: 'flex', justifyContent: 'space-between'}}> */}
            <ul className="list-unstyled">
              <Link href='/about-us'>
                <li>About us</li>
              </Link>
              <Link href='/careers'>
                <li>Careers</li>
              </Link>
              <Link href='/planet-health'>
                <li>Planet Health</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      {/* {renderMegaMenu()} */}
      <Link href='./'>
              <Image
                src="/images/instaDR-logo.svg"
                alt="InstaDR Logo"
                height={24}
                width={24}
          style={{
                  display: "inline",
                  height: "24px",
                  width: "auto",
                  marginRight: "24px",
            // paddingLeft: 0
                  display: "none"
                }}
              />
            </Link>
      <MegaMenu />
    </div>
  )
}