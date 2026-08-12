import { Link } from 'react-router-dom';
import { clientConfig } from '../../config/clientConfig';
import styles from './Footer.module.css';

export default function Footer() {
  const { businessName, logoText, contact, social } = clientConfig;
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <span className={styles.brandName}>{logoText}</span>
              <p className={styles.brandDesc}>
                Premium bath fittings crafted for refined spaces, everyday comfort, and lasting performance.
              </p>
              {/* Social */}
              <div className={styles.social}>
                {social.instagram && (
                  <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </a>
                )}
                {social.facebook && (
                  <a href={social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </a>
                )}
                {social.youtube && (
                  <a href={social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                      <polygon fill="#0f0e0c" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>Navigate</h4>
              <ul>
                {[
                  { label: 'Home', to: '/' },
                  { label: 'Products', to: '/products' },
                  { label: 'About Us', to: '/about' },
                  { label: 'Experience', to: '/experience' },
                  { label: 'Contact', to: '/contact' },
                ].map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className={styles.footerLink}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>Products</h4>
              <ul>
                {['Faucets', 'Basin Mixers', 'Showers', 'Health Faucets', 'Bathroom Accessories', 'Sanitaryware'].map((c) => (
                  <li key={c}>
                    <Link to={`/products?category=${encodeURIComponent(c)}`} className={styles.footerLink}>{c}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className={styles.contactCol}>
              <h4 className={styles.colTitle}>Contact</h4>
              <address className={styles.address}>
                <p>{contact.address.line1}</p>
                <p>{contact.address.line2}</p>
                <p>{contact.address.city}, {contact.address.state} — {contact.address.pincode}</p>
              </address>
              <a href={`tel:${contact.phoneRaw}`} className={styles.contactLink}>
                {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className={styles.contactLink}>
                {contact.email}
              </a>
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                className={styles.waLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className="container">
          <p className={styles.copyright}>
            &copy; {year} {businessName}. All rights reserved.
          </p>
          <p className={styles.legal}>
            Crafted with care in India.
          </p>
        </div>
      </div>
    </footer>
  );
}
