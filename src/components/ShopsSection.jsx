const ShopsSection = () => {
  const shops = [
    {
      id: 'shop-premium',
      title: 'Shops',
      subtitle: 'Premium Ice Cream',
      desc: 'Discover our curated selection of handcrafted premium flavors made fresh daily with local ingredients.',
      icon: (
        <svg className="shop-icon" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="26" r="18" stroke="#E31E24" strokeWidth="2.5" strokeDasharray="5 3"/>
          <path d="M28 44 Q40 58 52 44" stroke="#E31E24" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <line x1="40" y1="44" x2="40" y2="62" stroke="#E31E24" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M30 62 Q40 58 50 62" stroke="#E31E24" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <circle cx="40" cy="26" r="6" fill="#E31E24" opacity="0.15"/>
          <circle cx="40" cy="26" r="3" fill="#E31E24"/>
        </svg>
      ),
    },
    {
      id: 'shop-seasonal',
      title: 'Shops',
      subtitle: 'Seasonal Specials',
      desc: 'Enjoy limited-edition seasonal flavors crafted to celebrate every moment with something extraordinary.',
      icon: (
        <svg className="shop-icon" viewBox="0 0 80 80" fill="none">
          <rect x="20" y="38" width="40" height="22" rx="4" stroke="#E31E24" strokeWidth="2.5"/>
          <path d="M30 38 Q40 18 50 38" stroke="#E31E24" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <path d="M20 48 L60 48" stroke="#E31E24" strokeWidth="1.5" opacity="0.4"/>
          <circle cx="32" cy="54" r="3" fill="#E31E24" opacity="0.5"/>
          <circle cx="44" cy="54" r="3" fill="#E31E24" opacity="0.5"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="shops-section" id="shops" aria-label="Shops section">
      <div className="container">
        <div className="shops-grid">
          {shops.map((shop) => (
            <div key={shop.id} className="shop-card" id={shop.id} role="button" tabIndex={0}>
              <div className="shop-card-content">
                <h3>{shop.title}</h3>
                <div className="shop-divider" aria-hidden="true"></div>
                <p style={{ fontSize: '14px', color: 'var(--text-light)', marginBottom: '20px' }}>
                  {shop.desc}
                </p>
                <a href="#products" className="read-more-link" aria-label={`Read more about ${shop.subtitle}`}>
                  Read More
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              {shop.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopsSection;
