const SweetSection = () => {
  const features = [
    {
      id: 'feature-delivery',
      icon: '🧊',
      text: 'Guaranteed Frozen Delivery',
    },
    {
      id: 'feature-shipping',
      icon: '📦',
      text: 'Flat Rate Shipping Nationwide',
    },
    {
      id: 'feature-unboxing',
      icon: '📸',
      text: 'Instagram-Worthy Unboxing',
    },
  ];

  return (
    <section className="sweet-section" id="sweet-day" aria-label="Why choose Jumys Ice Cream">
      <div className="sweet-inner">
        <div className="sweet-content">
          <p className="section-tag">🍩 Why Choose Jumys</p>
          <h2>Make Every Day<br />A Sweet Day</h2>
          <p>
            Our handcrafted ice cream feels like nothing when you consider how
            exciting new flavors arrive each season. Discover what makes us different.
          </p>

          <div className="sweet-features">
            {features.map((feature) => (
              <div key={feature.id} className="sweet-feature" id={feature.id}>
                <div className="sweet-feature-icon" aria-hidden="true">
                  {feature.icon}
                </div>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          <a href="#products" className="btn-primary" id="sweet-view-more-btn">
            View More
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="sweet-image-area">
          <img
            src="/donut_icecream_1779851870977.png"
            alt="Colorful donut-shaped ice cream bars on sticks - Jumys novelty treats"
            loading="lazy"
          />
          {/* Decorative blob behind */}
          <div style={{
            position: 'absolute',
            width: '340px',
            height: '340px',
            background: 'var(--pink-light)',
            borderRadius: '60% 40% 70% 30% / 40% 60% 30% 70%',
            zIndex: -1,
            opacity: 0.8,
          }} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default SweetSection;
