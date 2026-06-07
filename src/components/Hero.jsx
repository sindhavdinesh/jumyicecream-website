import { useState, useCallback, useEffect } from 'react';

const SLIDES = [
  {
    id: 1,
    tag: 'ICE CREAM HEAVEN',
    titleLines: ['Icy Indulgences:', 'Delight In A Variety', 'Of Ice Cream'],
    desc: 'Indulge in our hand-crafted premium ice cream made with the finest ingredients. Every scoop is a moment of pure happiness.',
    bg: '/hero_icecream_1779851798244.png',
  },
  {
    id: 2,
    tag: 'ICE CREAM HEAVEN',
    titleLines: ['Frosty Delights:', 'Treat Yourself', 'To Creamy Joy'],
    desc: 'From classic scoops to artisan sundaes — discover flavors that bring smiles to every face, every single day.',
    bg: '/promo_icecream_1779851829691.png',
  },
  {
    id: 3,
    tag: 'ICE CREAM HEAVEN',
    titleLines: ['Cool Confections:', 'Discover The Magic', 'Of Ice Cream'],
    desc: 'Premium ingredients, artisan recipes, and a passion for frozen perfection in every bite you take.',
    bg: '/summer_icecream_1779851815380.png',
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((idx) => {
    setCurrent(idx);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000); // Auto change every 5 seconds
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero-full" id="home" aria-label="Hero section">
      {/* Background layer */}
      <div className="hero-bg-layer" />

      {/* Slides container */}
      <div className="hero-slides-container">
        {SLIDES.map((slide, i) => {
          const isActive = i === current;
          return (
            <div
              key={slide.id}
              className={`hero-slide${isActive ? ' active' : ''}`}
              aria-hidden={!isActive}
            >
              <div className="hero-full-inner">
                {/* Left Column: Content (45%) */}
                <div className="hero-column-content">
                  {/* Tag label */}
                  <p className="hero-full-tag">{slide.tag}</p>

                  {/* Main title */}
                  <h1 className="hero-full-title">
                    {slide.titleLines.map((line, idx) => (
                      <span key={idx} className="hero-title-line">{line}</span>
                    ))}
                  </h1>

                  {/* Description */}
                  <p className="hero-full-desc">{slide.desc}</p>

                  {/* CTA Buttons */}
                  <div className="hero-full-buttons">
                    <a href="#products" className="btn-hero-primary" id={`hero-shop-btn-${slide.id}`}>
                      Shop Now
                    </a>
                    <a href="#featured" className="btn-hero-secondary" id={`hero-see-btn-${slide.id}`}>
                      See More
                    </a>
                  </div>
                </div>

                {/* Right Column: Image (55%) */}
                <div className="hero-column-image">
                  <div className="hero-image-wrapper">
                    <img
                      src={slide.bg}
                      alt={slide.titleLines.join(' ')}
                      className="hero-img-element"
                      loading={i === 0 ? 'eager' : 'lazy'}
                    />
                    {/* Floating Red Badge */}
                    <img
                      src="/badge_red.png"
                      alt="Get 15% Off"
                      className="hero-badge-red"
                    />
                    {/* Floating Teal Badge */}
                    <img
                      src="/badge_teal.png"
                      alt="GOOD ROOT"
                      className="hero-badge-teal"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Leaves (absolute positioned relative to .hero-slide) */}
              <img
                src="/leaf_top.png"
                alt=""
                className="hero-leaf-top"
                aria-hidden="true"
              />
              <img
                src="/leaf_bottom.png"
                alt=""
                className="hero-leaf-bottom"
                aria-hidden="true"
              />

              {/* Choose Your Favourite Flavour Text */}
              <div className="hero-flavor-label" aria-hidden="true">
                CHOOSE YOUR<br />FAVOURITE FLAVOUR!
              </div>

              {/* Giant Red Counter in bottom-left */}
              <div className="hero-slide-counter-giant" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="hero-dots" role="tablist" aria-label="Slide navigation">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            className={`hero-dot${i === current ? ' active' : ''}`}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}`}
            id={`hero-dot-${i + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        className="hero-arrow hero-arrow-prev"
        id="hero-prev-btn"
        aria-label="Previous slide"
        onClick={() => goTo((current - 1 + SLIDES.length) % SLIDES.length)}
      >
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7"/>
        </svg>
      </button>
      <button
        className="hero-arrow hero-arrow-next"
        id="hero-next-btn"
        aria-label="Next slide"
        onClick={() => goTo((current + 1) % SLIDES.length)}
      >
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </section>
  );
};

export default Hero;
