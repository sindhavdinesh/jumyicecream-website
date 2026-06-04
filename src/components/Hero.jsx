import { useState, useCallback, useEffect } from 'react';

const SLIDES = [
  {
    id: 1,
    tag: 'Flavors of Summer',
    titleLines: ['Icy Indulgences:', 'Delight In A Variety', 'Of Ice Cream'],
    desc: 'Indulge in our hand-crafted premium ice cream made with the finest ingredients. Every scoop is a moment of pure happiness.',
    bg: '/hero_icecream_1779851798244.png',
    badge: '15%',
    badgeLabel: 'Get',
  },
  {
    id: 2,
    tag: 'Sundaes & Smiles',
    titleLines: ['Frosty Delights:', 'Treat Yourself', 'To Creamy Joy'],
    desc: 'From classic scoops to artisan sundaes — discover flavors that bring smiles to every face, every single day.',
    bg: '/promo_icecream_1779851829691.png',
    badge: '30%',
    badgeLabel: 'Get',
  },
  {
    id: 3,
    tag: 'Cool Confections',
    titleLines: ['Discover The Magic', 'Of Handcrafted', 'Ice Cream'],
    desc: 'Premium ingredients, artisan recipes, and a passion for frozen perfection in every bite you take.',
    bg: '/summer_icecream_1779851815380.png',
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
      {/* Backgrounds */}
      <div className="hero-bg-layer">
        {SLIDES.map((s, i) => (
          <div key={s.id} className={`hero-bg-img${i === current ? ' active' : ''}`}
            style={{ backgroundImage: `url(${s.bg})` }} aria-hidden={i !== current} />
        ))}
        <div className="hero-overlay" />
        <div className="hero-wave" />
      </div>

      {/* Content */}
      <div className="hero-full-inner">
        <div className={`hero-full-content${animating ? ' slide-out' : ' slide-in'}`}>
          <p className="hero-full-tag">{slide.tag}</p>
          <h1 className="hero-full-title">
            {slide.titleLines.map((line, i) => (
              <span key={i} style={{ display: 'block' }}>{line}</span>
            ))}
          </h1>
          <p className="hero-full-desc">{slide.desc}</p>
          <div className="hero-full-buttons">
            <a href="#products" className="btn-primary" id={`hero-shop-btn-${slide.id}`}>
              Shop Now
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
            <a href="#featured" className="btn-hero-outline" id={`hero-see-btn-${slide.id}`}>
              See More
            </a>
          </div>
        </div>

        {/* Floating deco */}
        <div className="hero-right-deco" aria-hidden="true">
          <div className="badge-starburst">
            <span style={{ fontSize: '10px' }}>{slide.badgeLabel}</span>
            <span className="pct">{slide.badge}</span>
            <span style={{ fontSize: '10px' }}>Off</span>
          </div>
          <div className="badge-teal">
            <span>GOOD</span>
            <span>ROOT</span>
          </div>
        </div>
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
