import { clientConfig } from '../config/clientConfig';
import styles from './About.module.css';

export default function About() {
  const { about, businessName } = clientConfig;

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroOverlay}>
          <div className="container">
            <h1 className="animate-fadeInUp">{about.storyTitle}</h1>
          </div>
        </div>
        <img 
          src={about.aboutImage || 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1600&q=80'} 
          alt="About Us" 
          className={styles.heroImg}
        />
      </div>

      {/* Story Section */}
      <section className={`${styles.storySection} section-pad`}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyText}>
              <span className="section-label">Our Story</span>
              <h2>A Legacy of Elegance</h2>
              <div className="gold-divider"></div>
              {about.story.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <div className={styles.storyStats}>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>{clientConfig.established}</span>
                <span className={styles.statLabel}>Established</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Quality Tested</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom Section */}
      <section className={`${styles.showroomSection} section-pad`}>
        <div className="container">
          <div className={styles.showroomHeader}>
            <span className="section-label">Experience Center</span>
            <h2>Visit Our Showroom</h2>
            <div className="gold-divider center"></div>
            <p className={styles.showroomDesc}>
              Immerse yourself in the world of {businessName}. Experience our products firsthand in our state-of-the-art design center.
            </p>
          </div>
          <div className={styles.showroomImageWrapper}>
            <img 
              src={about.showroomImage || 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1600&q=80'} 
              alt="Showroom" 
            />
          </div>
        </div>
      </section>
    </div>
  );
}
