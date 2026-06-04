import { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="newsletter-section" id="newsletter" aria-label="Newsletter signup">
      <div className="newsletter-inner">
        <span className="section-tag" style={{ color: 'rgba(255,255,255,0.4)' }}>Stay Connected</span>
        <h2>Sign Up To Our Newsletter!</h2>
        <p>Be the first to know about new flavors, exclusive deals & sweet updates.</p>

        {submitted ? (
          <div style={{ background: 'rgba(42,191,191,0.12)', border: '1px solid var(--teal)', borderRadius: '50px', padding: '14px 32px', color: 'var(--teal)', fontWeight: 600, fontSize: '14px' }} role="status">
            🎉 Thank you! Sweet news coming your way.
          </div>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit} id="newsletter-form" noValidate>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input id="newsletter-email" type="email" placeholder="Enter your email address..."
              value={email} onChange={e => setEmail(e.target.value)} aria-required="true" />
            <button type="submit" id="newsletter-signup-btn">Sign Up</button>
          </form>
        )}
        {error && <p style={{ color: '#ff7070', marginTop: '10px', fontSize: '13px' }} role="alert">{error}</p>}
      </div>
    </section>
  );
};

export default NewsletterSection;
