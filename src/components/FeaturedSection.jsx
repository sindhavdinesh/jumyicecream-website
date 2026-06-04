const FeaturedSection = () => {
  const cards = [
    {
      id: 'featured-summer',
      image: '/summer_icecream_1779851815380.png',
      tag: 'hello',
      title: 'SUMMER!',
      alt: 'Hello Summer ice cream collection with colorful scoops',
    },
    {
      id: 'featured-promo',
      image: '/promo_icecream_1779851829691.png',
      tag: '',
      title: '',
      alt: 'Promotional gelato with -30% discount badge',
      showDiscount: true,
    },
    {
      id: 'featured-creamy',
      image: '/creamy_icecream_1779851856731.png',
      tag: 'enjoy',
      title: 'CREAMY',
      alt: 'Creamy indulgent ice cream scoops in waffle bowl',
    },
  ];

  return (
    <section className="featured-section" id="featured" aria-label="Featured ice cream collection">
      <div className="container">
        <div className="featured-grid">
          {cards.map((card) => (
            <div key={card.id} className="featured-card" id={card.id} role="button" tabIndex={0}
              aria-label={`View ${card.title || 'promo'} collection`}>
              <img src={card.image} alt={card.alt} loading="lazy" />
              <div className="featured-card-overlay">
                {(card.tag || card.title) && (
                  <div className="featured-card-text">
                    {card.tag && <span className="tag">{card.tag}</span>}
                    {card.title && <span className="title">{card.title}</span>}
                  </div>
                )}
              </div>
              {card.showDiscount && (
                <div className="discount-badge" aria-label="30% discount">-30%</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
