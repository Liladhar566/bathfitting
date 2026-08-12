import { Link } from 'react-router-dom';
import Hero3DAnimation from '../components/Hero3DAnimation/Hero3DAnimation';
import { clientConfig } from '../config/clientConfig';
import { productCategories, products } from '../data/products';
import styles from './Home.module.css';

export default function Home() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.heroSection} data-hero-section>
        <div className={styles.heroSticky}>
          <Hero3DAnimation />
          <div className={styles.heroContent}>
            <div className="container">
              <h1 className="animate-fadeInUp">{clientConfig.tagline}</h1>
              <p className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                {clientConfig.subTagline}
              </p>
              <div className={styles.heroCtas} style={{ animationDelay: '0.4s' }}>
                <Link to="/products" className="btn btn-primary animate-fadeInUp">
                  Explore Collection
                </Link>
                <Link to="/contact" className="btn btn-outline animate-fadeInUp">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Craftsmanship */}
      <section className="section-pad">
        <div className="container">
          <div className={styles.craftsmanship}>
            <div className={styles.craftText}>
              <span className="section-label">Our Philosophy</span>
              <h2>Premium Craftsmanship, Timeless Design</h2>
              <div className="gold-divider"></div>
              <p>{clientConfig.about.philosophy}</p>
              <p>{clientConfig.about.qualityText}</p>
              <Link to="/about" className="btn btn-outline-dark" style={{ marginTop: '1.5rem' }}>
                Discover Our Story
              </Link>
            </div>
            <div className={styles.craftImage}>
              <img src="https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80" alt="Premium Craftsmanship" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className={`${styles.categoriesSection} section-pad`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="section-label">Collections</span>
            <h2>Curated Elegance</h2>
            <div className="gold-divider center"></div>
          </div>
          
          <div className={styles.categoryGrid}>
            {productCategories.slice(0, 4).map((category, idx) => {
              const catProduct = products.find(p => p.category === category);
              return (
                <Link to={`/products?category=${encodeURIComponent(category)}`} key={category} className={styles.categoryCard}>
                  <div className={styles.categoryImgWrapper}>
                    <img src={catProduct?.image || 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80'} alt={category} />
                  </div>
                  <div className={styles.categoryContent}>
                    <h3>{category}</h3>
                    <span>Explore &rarr;</span>
                  </div>
                </Link>
              );
            })}
          </div>
          
          <div className={styles.centerBtn}>
             <Link to="/products" className="btn btn-primary">View All Collections</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-pad">
        <div className="container">
           <div className={styles.featuresGrid}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h3>Uncompromising Quality</h3>
                <p>Manufactured with premium grade materials ensuring decades of reliable performance.</p>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
                  </svg>
                </div>
                <h3>European Design</h3>
                <p>Minimalist, elegant aesthetics designed to elevate modern architectural spaces.</p>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <h3>Pan-India Support</h3>
                <p>Comprehensive warranty and dedicated after-sales service across the country.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Upgrade Your Bathroom.</h2>
            <p>Experience the perfect blend of form and function.</p>
            <Link to="/contact" className="btn btn-primary">Book a Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
