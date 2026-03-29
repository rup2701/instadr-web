import NavBar from "@/components/NavBar";
// import Link from "next/link";
// import Logo from '@/components/InstaLogo';
// import Footer from "@/components/Footer";
import Head from "next/head";
// import 'bootstrap/dist/css/bootstrap.css';


export default function Layout({ children, home }) {
  return (
    <div className="show fade">
      <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous" />
        
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v3.0.3/css/line.css" />
        
      </Head>
      <header id="navbar" className="defaultscroll sticky">
        {home ? <NavBar home /> : <NavBar />}
      </header>
      {children}
      <footer>
        {/* <Footer/> */}
      </footer>
    </div>
  )
}