const ShopsSection = () => {
  const shops = [
    {
      id: 'shop-premium',
      title: 'Best Ice Cream Shops',
      desc: 'It\'s Quite Possible That We Are Living In The Golden Age Of Ice Cream Innovation. Old-School Creameries Are Churning Out Vanilla Bean Masterpieces Honed Over Generations While New Shops Are Tossing The Term "Chef"',
      icon: null,
    },
    {
      id: 'shop-seasonal',
      title: 'Wave Artisan Shops',
      desc: 'These Ice Cream Shops Represent Everything That Is Well And Good: New-Wave Artisan Shops Challenging The Very Notion Of What Should Be Placed On A Cone (Or Stick, Or Between Cookies). Old-School Parlors Learning...',
      icon: (
        <svg className="shop-icon" viewBox="0 0 80 80" fill="none">
          <path d="M20 30 L30 70 L50 70 L60 30 Z" stroke="#E31E24" strokeWidth="2" fill="none"/>
          <ellipse cx="40" cy="30" rx="20" ry="5" stroke="#E31E24" strokeWidth="2" fill="none"/>
          <ellipse cx="40" cy="30" rx="20" ry="5" stroke="#E31E24" strokeWidth="2" fill="none"/>
          <path d="M40 25 Q 50 15 60 25" stroke="#E31E24" strokeWidth="2" fill="none"/>
          <circle cx="50" cy="15" r="4" stroke="#E31E24" strokeWidth="2" fill="none" strokeDasharray="1 2"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="shops-section" id="shops" aria-label="Shops section">
      <div className="container">
        <div className="shops-grid custom-shops-grid">
          {shops.map((shop) => (
            <div key={shop.id} className="shop-card custom-shop-card" id={shop.id} role="button" tabIndex={0}>
              <div className="shop-card-title-wrap">
                <h3 className="shop-card-title">
                  {shop.title}
                </h3>
              </div>
              <div className="shop-card-content custom-shop-card-content">
                <p className="shop-card-desc">
                  {shop.desc}
                </p>
                <a href="#products" className="read-more-link shop-read-more" aria-label={`Read more about ${shop.title}`}>
                  Read More
                </a>
              </div>
              {shop.icon}
              <div className="shop-card-divider-dashed"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopsSection;

