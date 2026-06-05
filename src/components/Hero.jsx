import { useState, useCallback, useEffect } from 'react';

const SLIDES = [
  {
    id: 1,
    tag: 'Flavors of Summer',
    titleLines: ['Icy Indulgences:', 'Delight In A Variety', 'Of Ice Cream'],
    desc: 'Indulge in our hand-crafted premium ice cream made with the finest ingredients. Every scoop is a moment of pure happiness.',
    bg: '/hero_icecream_1779851798244.png',
    // Deep strawberry-red cinematic gradient
    gradientBg: 'linear-gradient(135deg, #1a0508 0%, #3d0c14 25%, #7a1e2e 55%, #b5334a 80%, #d4596b 100%)',
    rating: '★ 4.9',
    genre: 'Signature Classic',
    year: '2026',
    badge: '15%',
    badgeLabel: 'Get',
  },
  {
    id: 2,
    tag: 'Sundaes & Smiles',
    titleLines: ['Frosty Delights:', 'Treat Yourself', 'To Creamy Joy'],
    desc: 'From classic scoops to artisan sundaes — discover flavors that bring smiles to every face, every single day.',
    bg: '/promo_icecream_1779851829691.png',
    // Rich teal-midnight cinematic gradient
    gradientBg: 'linear-gradient(135deg, #010d10 0%, #042a35 25%, #0a5c6e 55%, #1899a6 80%, #3fc0cc 100%)',
    rating: '★ 4.8',
    genre: 'Artisan Sundae',
    year: '2026',
    badge: '30%',
    badgeLabel: 'Get',
  },
  {
    id: 3,
    tag: 'Cool Confections',
    titleLines: ['Discover The Magic', 'Of Handcrafted', 'Ice Cream'],
    desc: 'Premium ingredients, artisan recipes, and a passion for frozen perfection in every bite you take.',
    bg: '/summer_icecream_1779851815380.png',
    // Warm amber-sunset cinematic gradient
    gradientBg: 'linear-gradient(135deg, #100800 0%, #35190a 25%, #7a3d12 55%, #c46a20 80%, #e8973e 100%)',
    rating: '★ 5.0',
    genre: 'Premium Craft',
    year: '2026',
    badge: '20%',
    badgeLabel: 'Get',
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((idx) => {
    if (animating || idx === current) return;
    setAnimating(true);
    setTimeout(() => { setCurrent(idx); setAnimating(false); }, 380);
  }, [animating, current]);

  useEffect(() => {
    const t = setInterval(() => goTo((current + 1) % SLIDES.length), 5500);
    return () => clearInterval(t);
  }, [current, goTo]);

  const slide = SLIDES[current];

  return (
    <section className="hero-full" id="home" aria-label="Hero section">
      {/* Cinematic full-bleed backgrounds */}
      <div className="hero-bg-layer">
        {SLIDES.map((s, i) => (
          <div
            key={s.id}
            className={`hero-bg-slide${i === current ? ' active' : ''}`}
            style={{ background: s.gradientBg }}
            aria-hidden={i !== current}
          >
            {/* PNG image layered on top of the gradient, positioned to the right */}
            <div
              className="hero-bg-img"
              style={{ backgroundImage: `url(${s.bg})` }}
            />
          </div>
        ))}
        {/* Dark gradient overlay for text readability — fades from opaque dark on left to transparent */}
        <div className="hero-overlay" />
        {/* Subtle bottom vignette */}
        <div className="hero-bottom-vignette" />
      </div>

      {/* Left-side text overlay content */}
      <div className="hero-full-inner">
        <div className={`hero-full-content${animating ? ' slide-out' : ' slide-in'}`}>
          {/* Tag label */}
          <p className="hero-full-tag">{slide.tag}</p>

          {/* Main title */}
          <h1 className="hero-full-title">
            {slide.titleLines.map((line, i) => (
              <span key={i} style={{ display: 'block' }}>{line}</span>
            ))}
          </h1>

          {/* Rating / meta row */}
          <div className="hero-meta-row">
            <span className="hero-rating">{slide.rating}</span>
            <span className="hero-meta-dot">•</span>
            <span className="hero-genre">{slide.genre}</span>
            <span className="hero-meta-dot">•</span>
            <span className="hero-year">{slide.year}</span>
            <span className="hero-badge-inline">{slide.badge} OFF</span>
          </div>

          {/* Description */}
          <p className="hero-full-desc">{slide.desc}</p>

          {/* CTA Buttons */}
          <div className="hero-full-buttons">
            <a href="#products" className="btn-hero-primary" id={`hero-shop-btn-${slide.id}`}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 6.00067L21 6.00139M8 12.0007L21 12.0015M8 18.0007L21 18.0015M3.5 6H3.51M3.5 12H3.51M3.5 18H3.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Shop Now
            </a>
            <a href="#featured" className="btn-hero-ghost" id={`hero-see-btn-${slide.id}`}>
              Explore More
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Slide counter top-right */}
      <div className="hero-slide-counter" aria-hidden="true">
        <span className="hero-counter-current">{String(current + 1).padStart(2, '0')}</span>
        <span className="hero-counter-sep">/</span>
        <span className="hero-counter-total">{String(SLIDES.length).padStart(2, '0')}</span>
      </div>

      {/* Dots */}
      <div className="hero-dots" role="tablist" aria-label="Slide navigation">
        {SLIDES.map((s, i) => (
          <button key={s.id} className={`hero-dot${i === current ? ' active' : ''}`}
            onClick={() => goTo(i)} role="tab" aria-selected={i === current}
            aria-label={`Slide ${i + 1}`} id={`hero-dot-${i + 1}`} />
        ))}
      </div>

      {/* Arrows */}
      <button className="hero-arrow hero-arrow-prev" id="hero-prev-btn" aria-label="Previous slide"
        onClick={() => goTo((current - 1 + SLIDES.length) % SLIDES.length)}>
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7"/>
        </svg>
      </button>
      <button className="hero-arrow hero-arrow-next" id="hero-next-btn" aria-label="Next slide"
        onClick={() => goTo((current + 1) % SLIDES.length)}>
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </section>
  );
};

export default Hero;
