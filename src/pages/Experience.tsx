import { clientConfig } from '../config/clientConfig';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <div className={styles.experiencePage}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div className="container">
          <span className="section-label">Inspiration</span>
          <h1>The {clientConfig.businessName} Experience</h1>
          <p>Discover how our premium fittings transform everyday spaces into personal sanctuaries.</p>
        </div>
      </div>

      {/* Showcase Grid */}
      <section className="section-pad">
        <div className="container">
          <div className={styles.showcaseGrid}>
            <div className={styles.showcaseItem}>
              <img src="https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80" alt="Minimalist Bathroom" />
              <div className={styles.showcaseContent}>
                <h3>Minimalist Harmony</h3>
                <p>Clean lines and understated elegance for the modern home.</p>
              </div>
            </div>
            
            <div className={`${styles.showcaseItem} ${styles.large}`}>
              <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=80" alt="Luxury Spa Bathroom" />
              <div className={styles.showcaseContent}>
                <h3>The Spa Retreat</h3>
                <p>Transform your daily routine with our immersive rain shower systems.</p>
              </div>
            </div>
            
            <div className={styles.showcaseItem}>
              <img src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80" alt="Classic Elegance" />
              <div className={styles.showcaseContent}>
                <h3>Classic Elegance</h3>
                <p>Timeless designs that blend seamlessly with traditional aesthetics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className={styles.featureSection}>
        <div className="container">
          <div className={styles.featureGrid}>
             <div className={styles.featureText}>
               <span className="section-label">Design Language</span>
               <h2>Form Follows Feeling</h2>
               <div className="gold-divider"></div>
               <p>
                 We believe that good design should be felt as much as it is seen. The smooth turn of a handle, the perfect arc of water, the solid feel of premium brass — every detail is considered to create a sense of effortless luxury.
               </p>
             </div>
             <div className={styles.featureImage}>
               <img src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80" alt="Faucet Detail" />
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
