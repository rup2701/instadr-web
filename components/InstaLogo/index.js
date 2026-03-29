'use strict';
import Link from 'next/link';

export default function Logo() {

  return (
    <span className="logo">
      <Link href="/">
        <span style={{ display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
          {/* <img src="/images/instadr_logo.svg" height="24" alt="" /> */}
          {/* <img src="/images/insta-logo-alt-white.svg" alt="" /> */}
          <img src="/images/instaDR-logo-alt.svg" alt="" />
          </span>
      </Link>
    </span>
  );
}