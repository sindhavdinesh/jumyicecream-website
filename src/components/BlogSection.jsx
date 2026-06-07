const BlogSection = () => {
  const posts = [
    { id: 'blog-best-ice-cream', image: '/blog1_1779852061363.png', category: 'Business Tips', date: 'July 30, 2024', title: "The Best Ice Cream You'll Never Eat", excerpt: "Exploring the most exotic and rare ice cream flavors from around the world that you might never get to taste — but should dream about.", alt: 'Colorful ice cream scoops overhead view' },
    { id: 'blog-fancy-figs', image: '/blog2_1779852081992.png', category: 'Recipes', date: 'July 28, 2024', title: 'Fancy Figs? Make This Ice Cream', excerpt: "Discover how the rich sweetness of fresh figs transforms into the most luxurious, silky ice cream you've ever had the pleasure of tasting.", alt: 'Elegant ice cream sundae in tall glass' },
    { id: 'blog-crafting-gourmet', image: '/blog3_1779852097929.png', category: 'Behind The Scenes', date: 'July 25, 2024', title: 'The Art Of Crafting Gourmet Ice Cream', excerpt: "From sourcing premium milk to perfecting the churn — join us behind the scenes to see how artisanal ice cream is made with love.", alt: 'Artisanal waffle cones with premium ice cream' },
  ];

  return (
    <section className="blog-section" id="blog" aria-label="Latest news and blog posts">
      <div className="container">
        <div className="blog-header">
          <span className="script-tag">Our News</span>
          <h2>Tastiest Updates</h2>
        </div>
        <div className="blog-grid">
          {posts.map(post => (
            <article key={post.id} className="blog-card" id={post.id}>
              <div className="blog-image-wrap">
                <img src={post.image} alt={post.alt} loading="lazy" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-meta-dot">•</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
              </div>
            </article>
          ))}
        </div>
        <div className="blog-cta">
          <button className="btn-primary" id="blog-read-more-btn">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

