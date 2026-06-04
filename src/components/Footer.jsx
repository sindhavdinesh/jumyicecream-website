const Footer = () => {
  const infoLinks = ['About Us', 'Contact Us', 'FAQs', 'Store Locator', 'Careers'];
  const shopLinks = ['Ice Cream Pints', 'Sundaes & Bars', 'Seasonal Specials', 'Gift Cards', 'Bundles'];
  const socials = [
    { id: 'social-facebook', label: 'Facebook', href: '#',
      icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg> },
    { id: 'social-twitter', label: 'Twitter', href: '#',
      icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
    { id: 'social-instagram', label: 'Instagram', href: '#',
      icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
    { id: 'social-tiktok', label: 'TikTok', href: '#',
      icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.79a8.18 8.18 0 004.79 1.53V6.86a4.85 4.85 0 01-1.02-.17z"/></svg> },
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-main">
        {/* Brand */}
        <div className="footer-col">
          <div className="footer-logo">
            <div className="logo-text">JUMYS</div>
            <div className="logo-sub">Ice Cream</div>
          </div>
          <p className="footer-tagline">
            Handcrafted with love using the finest natural ingredients. Every scoop is a moment of pure happiness.
          </p>
          <div className="footer-socials" role="list">
            {socials.map(s => (
              <a key={s.id} href={s.href} id={s.id} className="social-btn"
                aria-label={s.label} role="listitem" target="_blank" rel="noopener noreferrer">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="footer-col">
          <p className="footer-col-title">Information</p>
          <div className="footer-links">
            {infoLinks.map(l => (
              <a key={l} href="#" className="footer-link">
                <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
                </svg>
                {l}
              </a>
            ))}
          </div>
        </div>

        {/* Shop */}
        <div className="footer-col">
          <p className="footer-col-title">Our Shop</p>
          <div className="footer-links">
            {shopLinks.map(l => (
              <a key={l} href="#products" className="footer-link">
                <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
                </svg>
                {l}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-col">
          <p className="footer-col-title">Newsletter</p>
          <p className="footer-newsletter-desc">Subscribe to get the latest flavors, deals & sweet news delivered to your inbox.</p>
          <div className="footer-newsletter-form">
            <input type="email" placeholder="Your email address..." id="footer-newsletter-input" />
            <button type="button" id="footer-newsletter-btn">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p className="footer-copy">© 2024 – JUMYS Ice Cream. All Rights Reserved.</p>
        <div className="footer-pay-icons">
          {['VISA', 'MC', 'AMEX', 'PayPal'].map(p => <span key={p} className="pay-icon">{p}</span>)}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
