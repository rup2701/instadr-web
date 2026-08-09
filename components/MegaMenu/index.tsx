'use client';

import Link from 'next/link';
import styles from './MegaMenu.module.scss';
import { useState } from 'react';
import { InstaDRLogo } from '../InstaDRLogo';


const MegaMenu = () => {

  const content = [
    {
      title: 'Platforms',
      link: '#',
      subMenu: [
        { title: ' InstaRoom', link: '/' },
        { title: 'Zenspace', link: '#' },
        { title: 'Marketplace', link: '/marketplace' },
      ],
    },
    {
      title: 'Engines',
      link: '#',
      subMenu: [
        { title: 'MediaDance WebRTC', link: '/' },
        { title: 'VaultID Zero-Knowledge', link: '#' },
        { title: 'AI Workflow Layer', link: '#' },
      ],
    },
     {
      title: 'Managed AI',
      link: '#',
      subMenu: [
        { title: 'AI Scribes', link: '/' },
        { title: 'Custom Models', link: '#' },
      ],
    },
    {
      title: 'Solutions',
      link: '#',
      subMenu: [
        { title: 'Telehealth & Practice', link: '/' },
        { title: 'Enterprise Compliance', link: '/' },
        { title: 'White-Label', link: '#' },
      ],
    },
    {
      title: 'Company',
      link: '#',
      subMenu: [
        { title: 'About us', link: '/about-us' },
        { title: 'Careers', link: '/careers' },
        { title: 'Planet Health', link: '/planet-health' },
      ],
    },
  ];

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
        
        {content.map((item, index) => (
          <li key={index} className={styles.menuItem}>
            <Link href={item.link}>{item.title}</Link>
            {item.subMenu && (
              <div className={styles.megaDropdown}>
                <div className={styles.menuColumn}>
                  <ul>
                    {item.subMenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link href={subItem.link}>{subItem.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MegaMenu;