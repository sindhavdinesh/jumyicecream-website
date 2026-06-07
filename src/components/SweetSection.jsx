const SweetSection = () => {
  const features = [
    {
      id: 'feature-delivery',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <line x1="12" y1="2" x2="12" y2="22"></line>
          <path d="M20 16l-4-4 4-4"></path>
          <path d="M4 8l4 4-4 4"></path>
          <path d="M16 4l-4 4-4-4"></path>
          <path d="M8 20l4-4 4 4"></path>
        </svg>
      ),
      text: 'Guaranteed Frozen Delivery',
    },
    {
      id: 'feature-shipping',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      ),
      text: 'Flat-Rate Shipping Nationwide',
    },
    {
      id: 'feature-unboxing',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
      text: 'Instagram-Worthy Unboxing',
    },
  ];

  return (
    <section className="sweet-section" id="sweet-day" aria-label="Why choose Jumys Ice Cream">
      {/* Decorative corner elements */}
      <img src="/sweet_top_left_blob.png" alt="" className="sweet-decor-top-left" aria-hidden="true" />
      <img src="/sweet_left_leaf.png" alt="" className="sweet-decor-left-leaf" aria-hidden="true" />
      <img src="/sweet_grapefruit.png" alt="" className="sweet-decor-grapefruit" aria-hidden="true" />
      <img src="/sweet_right_leaves.png" alt="" className="sweet-decor-right-leaves" aria-hidden="true" />
      
      {/* Concentric circles in bottom right */}
      <div className="sweet-decor-concentric" aria-hidden="true">
        <div className="circle-1">
          <div className="circle-2">
            <div className="circle-3" />
          </div>
        </div>
      </div>

      <div className="sweet-inner">
        {/* Left Column: Content */}
        <div className="sweet-content">
          <h2 className="sweet-title">
            Make Every Day A<br />Sweet Day
          </h2>
          <p className="sweet-desc">
            But Incorporating Liquor Into Ice Cream Seems Like Nothing When You Consider How Inventive...
          </p>

          <div className="sweet-features">
            {features.map((feature) => (
              <div key={feature.id} className="sweet-feature" id={feature.id}>
                <div className="sweet-feature-icon" aria-hidden="true">
                  {feature.icon}
                </div>
                <span className="sweet-feature-text">{feature.text}</span>
              </div>
            ))}
          </div>

          <a href="#products" className="btn-sweet-more" id="sweet-view-more-btn">
            View More →
          </a>
        </div>

        {/* Right Column: Showcase */}
        <div className="sweet-image-area">
          <div className="sweet-products-wrapper">
            <img
              src="/sweet_products.png"
              alt="Two floating donut popsicles (red and green) with a red blob behind them"
              className="sweet-products-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SweetSection;
