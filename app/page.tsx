import Layout from '@/components/Layout';
import styles from './page.module.scss';
import Image from 'next/image';
function Hero() {
  return (
   <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroLeft}> 
          <div className={styles.eyebrow}>
            Clinical Infrastructure
          </div>

          <h1 className={styles.headline}>
            The infrastructure layer
            for modern clinical care.
          </h1>

          <p className={styles.sub}>
            From proprietary WebRTC video to zero-knowledge 
            encryption to ambient AI scribing — InstaDR builds 
            the foundation independent practitioners and 
            enterprises build on.
          </p>

          <div className={styles.ctaGroup}>
            <a href="/instaroom" className={styles.btnPrimary}>
              Explore Platforms 
            </a>
            <a href="mailto:hello@instaroom.link" className={styles.btnSecondary}>
              Contact Sales
            </a>
          </div>
        </div>
        <div className={styles.heroRight}>
          {/* your image goes here */}
          <Image
            src="/images/medical-group-telehealth.jpg"
            alt="Hero Image"
            width={600}
            height={600}
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {

    return (
      <Layout home>
        
        <Hero />
      </Layout>  
  )
}