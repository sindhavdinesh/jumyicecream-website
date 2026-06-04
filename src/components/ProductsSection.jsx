import { useState } from 'react';
import { useCart } from '../CartContext';

const products = [
  {
    id: 'product-darkest-chocolate',
    image: '/product_chocolate_1779851890662.png',
    hoverImage: '/flavor_chocolate_1779852046951.png',
    name: 'Darkest Chocolate',
    category: 'Premium Pint',
    price: 12.00,
    originalPrice: null,
    sale: false,
    isNew: false,
  },
  {
    id: 'product-double-dough',
    image: '/product_doubledough_1779851914385.png',
    hoverImage: '/donut_icecream_1779851870977.png',
    name: 'Double Dough',
    category: 'Cookie Dough',
    price: 14.00,
    originalPrice: 18.00,
    sale: true,
    isNew: false,
  },
  {
    id: 'product-cold-brew',
    image: '/product_coldbrew_1779851931159.png',
    hoverImage: '/creamy_icecream_1779851856731.png',
    name: 'Cold Brew Coconut Cream',
    category: 'Specialty',
    price: 12.00,
    originalPrice: null,
    sale: false,
    isNew: true,
  },
  {
    id: 'product-cookies-cream',
    image: '/product_cookies_1779851951161.png',
    hoverImage: '/flavor_matcha_1779851994305.png',
    name: 'Cookies In Cream',
    category: 'Classic',
    price: 10.00,
    originalPrice: 12.00,
    sale: true,
    isNew: false,
  },
  {
    id: 'product-cream-puff',
    image: '/product_creampuff_1779851978907.png',
    hoverImage: '/flavor_strawberry_1779852011603.png',
    name: 'Cream Puff',
    category: 'Signature',
    price: 11.00,
    originalPrice: null,
    sale: false,
    isNew: false,
  },
];

/* ── Quick View Modal ── */
const QuickViewModal = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  if (!product) return null;

  return (
    <div className="qv-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Quick view">
      <div className="qv-modal" onClick={e => e.stopPropagation()}>
        <button className="qv-close" onClick={onClose} aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
        <div className="qv-content">
          <div className="qv-img-wrap">
            <img src={product.image} alt={product.name} />
            {product.sale && <span className="qv-sale-tag">Sale</span>}
          </div>
          <div className="qv-details">
            <p className="qv-cat">{product.category}</p>
            <h2 className="qv-name">{product.name}</h2>
            <div className="qv-price-row">
              <span className="qv-price">${product.price.toFixed(2)}</span>
              {product.originalPrice && <span className="qv-original">${product.originalPrice.toFixed(2)}</span>}
            </div>
            <p className="qv-desc">
              Indulge in our handcrafted premium {product.name.toLowerCase()} ice cream,
              made with the finest natural ingredients. Every scoop is a moment of pure happiness.
            </p>
            <div className="qv-qty-row">
              <div className="qv-qty">
                <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                <span>{qty}</span>
                <button onClick={() => setQty(qty + 1)}>+</button>
              </div>
            </div>
            <button className="qv-add-btn" onClick={() => {
              for (let i = 0; i < qty; i++) {
                addToCart({ id: product.id, name: product.name, price: product.price, image: product.image });
              }
              onClose();
            }}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Single Product Card ── */
const ProductCard = ({ product, onQuickView, styleType }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const wishlisted = isInWishlist(product.id);
  const [showQuickShop, setShowQuickShop] = useState(false);

  return (
    <div className={`pc-card pc-style-${styleType}`} id={product.id}>
      <div className="pc-img-wrap">
        <img src={product.image} alt={product.name} className="pc-img-primary" loading="lazy" />
        {product.hoverImage && (
          <img src={product.hoverImage} alt={product.name + ' hover view'} className="pc-img-secondary" loading="lazy" />
        )}

        {/* Badges */}
        <div className="pc-badges">
          {product.sale && <span className="pc-badge pc-badge-sale">Sale</span>}
          {product.isNew && <span className="pc-badge pc-badge-new">New</span>}
        </div>

        {/* Hover Action Sidebar (Scale, Slider, Fadein, Zoom, Icons, Info, New) */}
        <div className="pc-hover-actions">
          <button
            className={`pc-action-btn pc-wishlist-icon-btn ${wishlisted ? 'wishlisted' : ''}`}
            onClick={() => toggleWishlist({ id: product.id, name: product.name, price: product.price, image: product.image, category: product.category })}
          >
            <svg width="16" height="16" fill={wishlisted ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            <span className="pc-tooltip">Wishlist</span>
          </button>
          
          <button
            className="pc-action-btn pc-quickview-icon-btn"
            onClick={() => onQuickView(product)}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
            <span className="pc-tooltip">Quick View</span>
          </button>

          <button
            className="pc-action-btn pc-cart-icon-btn"
            onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
            <span className="pc-tooltip">Add to Cart</span>
          </button>
        </div>

        {/* Quick View Centered Button (Style: quick-view-btn) */}
        <button className="pc-center-btn pc-qv-center-btn" onClick={() => onQuickView(product)}>
          Quick View
        </button>
        
        {/* Quick Shop Centered Button (Style: quick-shop-btn) */}
        <button className="pc-center-btn pc-qs-center-btn" onClick={() => setShowQuickShop(true)}>
          Quick Shop
        </button>

        {/* Icon & Add To Cart Row (Style: icon-add-to-cart) */}
        <div className="pc-icon-cart-row">
          <button className="pc-row-cart-btn" onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}>
            Add To Cart
          </button>
          <button className={`pc-row-wish-btn ${wishlisted ? 'wishlisted' : ''}`} onClick={() => toggleWishlist({ id: product.id, name: product.name, price: product.price, image: product.image, category: product.category })}>
            <svg width="18" height="18" fill={wishlisted ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </button>
        </div>

        {/* Dual Button Row (Style: dual-button) */}
        <div className="pc-dual-btn-row">
          <button className="pc-dual-btn" onClick={() => setShowQuickShop(true)}>Quick Shop</button>
          <button className="pc-dual-btn" onClick={() => onQuickView(product)}>Quick View</button>
        </div>

        {/* Standard Add to Cart Bottom Strip */}
        <button className="pc-add-strip" onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}>
          Add To Cart
        </button>

        {/* Quick Shop Size Selector Overlay Panel */}
        {showQuickShop && (
          <div className="pc-qs-overlay">
            <div className="pc-qs-header">
              <span className="pc-qs-title">Select Size</span>
              <button className="pc-qs-close" onClick={(e) => { e.stopPropagation(); setShowQuickShop(false); }}>×</button>
            </div>
            <div className="pc-qs-options">
              <button onClick={() => { addToCart({ id: product.id, name: product.name, price: product.price, image: product.image }); setShowQuickShop(false); }}>
                Pint - ${product.price.toFixed(2)}
              </button>
              <button onClick={() => { addToCart({ id: product.id + '-cup', name: product.name + " (Cup)", price: product.price / 2, image: product.image }); setShowQuickShop(false); }}>
                Cup - ${(product.price / 2).toFixed(2)}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Info Block */}
      <div className="pc-info">
        <p className="pc-cat">{product.category}</p>
        <h3 className="pc-name">{product.name}</h3>
        <div className="pc-price-row">
          <span className="pc-price">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="pc-original">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        
        {/* Wishlist Bottom Text Button (Style: wishlist-bottom) */}
        <button className={`pc-bottom-wishlist ${wishlisted ? 'active' : ''}`} onClick={() => toggleWishlist({ id: product.id, name: product.name, price: product.price, image: product.image, category: product.category })}>
          {wishlisted ? '♥ Saved to Wishlist' : '♡ Add to Wishlist'}
        </button>
      </div>
    </div>
  );
};

/* ── Filter Sidebar ── */
const FilterSidebar = () => {
  return (
    <div className="ps-sidebar">
      <div className="ps-sidebar-widget">
        <h4 className="widget-title">Categories</h4>
        <ul className="widget-links">
          <li><button className="active">All Flavors (12)</button></li>
          <li><button>Premium Pints (5)</button></li>
          <li><button>Cookie Dough (3)</button></li>
          <li><button>Fruit Sorbets (4)</button></li>
        </ul>
      </div>
      <div className="ps-sidebar-widget">
        <h4 className="widget-title">Filter by Price</h4>
        <div className="price-filter-range">
          <input type="range" min="5" max="25" defaultValue="15" className="range-slider" aria-label="Price range filter" />
          <div className="price-label">Price: <span>$5.00 — $25.00</span></div>
        </div>
      </div>
      <div className="ps-sidebar-widget">
        <h4 className="widget-title">Select Size</h4>
        <div className="size-tags">
          <button className="active">Pint</button>
          <button>Cup</button>
          <button>Cone</button>
          <button>Tub</button>
        </div>
      </div>
    </div>
  );
};

/* ── Interactive Detail Showcase ── */
const ProductShowcase = ({ thumbnailPosition }) => {
  const { addToCart } = useCart();
  const [activeImg, setActiveImg] = useState('/product_chocolate_1779851890662.png');
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const imgs = [
    '/product_chocolate_1779851890662.png',
    '/flavor_chocolate_1779852046951.png',
    '/donut_icecream_1779851870977.png',
    '/creamy_icecream_1779851856731.png'
  ];

  return (
    <div className={`ps-showcase-gallery pos-${thumbnailPosition}`}>
      <div className="ps-showcase-images">
        {thumbnailPosition !== 'none' && thumbnailPosition !== 'bottom' && (
          <div className="ps-showcase-thumbs">
            {imgs.map((img, i) => (
              <button key={i} className={`thumb-btn ${activeImg === img ? 'active' : ''}`} onClick={() => setActiveImg(img)} aria-label={`View thumbnail ${i + 1}`}>
                <img src={img} alt="" />
              </button>
            ))}
          </div>
        )}
        <div className="ps-showcase-main-wrap">
          <img src={activeImg} className="ps-showcase-main-img" alt="Darkest Chocolate Ice Cream main view" />
        </div>
        {thumbnailPosition === 'bottom' && (
          <div className="ps-showcase-thumbs thumbs-bottom">
            {imgs.map((img, i) => (
              <button key={i} className={`thumb-btn ${activeImg === img ? 'active' : ''}`} onClick={() => setActiveImg(img)} aria-label={`View thumbnail ${i + 1}`}>
                <img src={img} alt="" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="ps-showcase-details">
        <span className="sc-cat">PREMIUM PINT</span>
        <h2 className="sc-title">Darkest Chocolate Ice Cream</h2>
        <div className="sc-price-row">
          <span className="sc-price">$12.00</span>
          <span className="sc-status">In Stock</span>
        </div>
        <p className="sc-desc">
          Crafted with 72% Belgian dark cacao and organic milk cream, this flavor is an intense, luxurious treat for chocolate lovers. Zero artificial sweeteners or preservatives.
        </p>

        <div className="sc-action-row">
          <div className="qv-qty">
            <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
            <span>{qty}</span>
            <button onClick={() => setQty(qty + 1)}>+</button>
          </div>
          <button className="btn-primary" onClick={() => {
            for(let i = 0; i < qty; i++) {
              addToCart({ id: 'product-darkest-chocolate', name: 'Darkest Chocolate', price: 12.00, image: '/product_chocolate_1779851890662.png' });
            }
          }}>Add to Cart</button>
        </div>

        <div className="sc-tabs-box">
          <div className="sc-tab-headers">
            <button className={activeTab === 'description' ? 'active' : ''} onClick={() => setActiveTab('description')}>Description</button>
            <button className={activeTab === 'shipping' ? 'active' : ''} onClick={() => setActiveTab('shipping')}>Shipping</button>
            <button className={activeTab === 'reviews' ? 'active' : ''} onClick={() => setActiveTab('reviews')}>Reviews</button>
          </div>
          <div className="sc-tab-content">
            {activeTab === 'description' && <p>Premium gourmet chocolate ice cream handcrafted locally in small batches. Made with fair-trade organic ingredients only.</p>}
            {activeTab === 'shipping' && <p>Shipped in insulated dry-ice containers to ensure 100% frozen delivery within 24 hours.</p>}
            {activeTab === 'reviews' && <p>⭐⭐⭐⭐⭐ (48 reviews) — "The richest dark chocolate flavor I have ever had. Absolutely divine!"</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Grouped Product Bundle ── */
const GroupedProduct = () => {
  const { addToCart } = useCart();
  const bundleProducts = [
    { id: 'product-darkest-chocolate', name: 'Darkest Chocolate', price: 12.00, img: '/product_chocolate_1779851890662.png' },
    { id: 'product-double-dough', name: 'Double Dough', price: 14.00, img: '/product_doubledough_1779851914385.png' },
    { id: 'product-cream-puff', name: 'Cream Puff', price: 11.00, img: '/product_creampuff_1779851978907.png' }
  ];
  const totalPrice = 37.00;
  const bundlePrice = 29.99;

  const handleAddBundle = () => {
    bundleProducts.forEach(p => {
      addToCart({ id: p.id, name: p.name, price: p.price, image: p.img });
    });
  };

  return (
    <div className="ps-group-bundle">
      <div className="bundle-header">
        <h3>🎉 Ice Cream Party Bundle Set</h3>
        <p>Grab our top three signature flavors together and save over 18%!</p>
      </div>
      <div className="bundle-items">
        {bundleProducts.map(p => (
          <div key={p.id} className="bundle-item">
            <img src={p.img} alt={p.name} />
            <div className="item-details">
              <h5>{p.name}</h5>
              <span className="price">${p.price.toFixed(2)}</span>
            </div>
            <span className="plus">+</span>
          </div>
        ))}
      </div>
      <div className="bundle-footer">
        <div className="price-row">
          <span className="label">Total Price:</span>
          <span className="old-price">${totalPrice.toFixed(2)}</span>
          <span className="new-price">${bundlePrice.toFixed(2)}</span>
        </div>
        <button className="btn-primary" onClick={handleAddBundle}>Add Bundle to Cart</button>
      </div>
    </div>
  );
};

/* ── Tab / Accordion / Info Showcase ── */
const InfoTabsShowcase = ({ type }) => {
  const [activeTab, setActiveTab] = useState('ingredients');
  const [accordionOpen, setAccordionOpen] = useState({ ingredients: true, nutrition: false, allergen: false });

  const toggleAcc = (tab) => {
    setAccordionOpen(prev => ({ ...prev, [tab]: !prev[tab] }));
  };

  const sections = {
    ingredients: { title: 'Ingredients & Sourcing', content: 'Filtered organic cream, grass-fed organic milk, fair-trade cacao powders, organic cane sugar, natural stabilizer beans sourced ethically from local farms.' },
    nutrition: { title: 'Nutritional Value', content: 'Serving Size: 2/3 Cup (100g). Calories: 240. Fat: 14g (22% DV). Sugar: 18g. Protein: 4g. Calcium: 12% DV.' },
    allergen: { title: 'Allergen Information', content: 'Contains Dairy. Manufactured in a 100% nut-free and gluten-free facility. Soy-free.' }
  };

  if (type === 'tab-information') {
    return (
      <div className="ps-info-showcase style-tabs">
        <div className="tabs-header">
          {Object.keys(sections).map(k => (
            <button key={k} className={activeTab === k ? 'active' : ''} onClick={() => setActiveTab(k)}>{sections[k].title}</button>
          ))}
        </div>
        <div className="tabs-content">
          <p>{sections[activeTab].content}</p>
        </div>
      </div>
    );
  }

  if (type === 'collapsible-tabs-information') {
    return (
      <div className="ps-info-showcase style-accordions">
        {Object.keys(sections).map(k => (
          <div key={k} className="acc-item">
            <button className="acc-trigger" onClick={() => toggleAcc(k)}>
              {sections[k].title}
              <span>{accordionOpen[k] ? '−' : '+'}</span>
            </button>
            {accordionOpen[k] && <div className="acc-content"><p>{sections[k].content}</p></div>}
          </div>
        ))}
      </div>
    );
  }

  if (type === 'vertical-information') {
    return (
      <div className="ps-info-showcase style-vertical">
        {Object.keys(sections).map(k => (
          <div key={k} className="vert-section">
            <h4>{sections[k].title}</h4>
            <p>{sections[k].content}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="ps-info-showcase style-full">
      <div className="full-grid">
        {Object.keys(sections).map(k => (
          <div key={k} className="full-col">
            <h4>{sections[k].title}</h4>
            <p>{sections[k].content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Products Section ── */
const stylesOptions = [
  { id: 'scale-hover', label: 'Scale hover' },
  { id: 'slider-hover', label: 'Slider hover' },
  { id: 'fadein-hover', label: 'Fadein hover' },
  { id: 'zoom-hover', label: 'Zoom hover' },
  { id: 'icons-on-hover', label: 'Icons on hover' },
  { id: 'icon-add-to-cart', label: 'Icon & Add to cart' },
  { id: 'quick-view-btn', label: 'Quick view button' },
  { id: 'add-to-cart-btn', label: 'Add to cart button' },
  { id: 'wishlist-bottom', label: 'Wishlist on the bottom' },
  { id: 'dual-button', label: 'Dual Button' },
  { id: 'info-in-hover', label: 'Info in hover' },
  { id: 'new', label: 'New' },
  { id: 'quick-shop-btn', label: 'Quick shop button' },
];

const ProductsSection = () => {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const { cardStyle, setCardStyle, layoutStyle, setLayoutStyle } = useCart();

  // Helper to determine layout class or render showcases
  const isShowcase = ['bottom-thumbnails', 'left-thumbnails', 'right-thumbnails', 'without-thumbnails'].includes(layoutStyle);
  const isBundle = layoutStyle === 'group-product';
  const isInfo = ['tab-information', 'collapsible-tabs-information', 'full-content-information', 'vertical-information'].includes(layoutStyle);

  const getGridClass = () => {
    if (layoutStyle === 'grid-1-col') return 'grid-1-col';
    if (layoutStyle === 'grid-2-col') return 'grid-2-col';
    if (layoutStyle === 'grid-modern') return 'grid-modern';
    if (layoutStyle === 'grid-sticky') return 'grid-sticky';
    if (layoutStyle === 'slider-full-width') return 'slider-full-width';
    return 'grid-5-col';
  };

  return (
    <section className="ps-section" id="products" aria-label="Featured products">
      <div className="container">
        
        {/* Style Sandbox Switcher */}
        <div className="pc-sandbox">
          <div className="pc-sandbox-header">
            <span className="ps-subtitle" style={{marginBottom: '4px'}}>Interactive Sandbox</span>
            <h2 className="ps-title" style={{fontSize: '22px', marginBottom: '8px'}}>Explore Layout & Hover Styles</h2>
            <p className="ps-desc" style={{fontSize: '13px', marginBottom: '24px'}}>
              Active Layout: <strong style={{color: 'var(--primary)', textTransform: 'uppercase'}}>{layoutStyle.replace('-', ' ')}</strong> | Active Card Style: <strong style={{color: 'var(--primary)', textTransform: 'uppercase'}}>{cardStyle.replace('-', ' ')}</strong>
            </p>
          </div>
          
          <div className="pc-style-switcher">
            {stylesOptions.map(opt => (
              <button 
                key={opt.id} 
                className={`pc-style-btn ${cardStyle === opt.id ? 'active' : ''}`}
                onClick={() => setCardStyle(opt.id)}
              >
                {opt.label}
              </button>
            ))}
            <button 
              className="pc-style-btn" 
              style={{background: 'var(--dark)', color: '#fff'}}
              onClick={() => setLayoutStyle('grid-5-col')}
            >
              Reset Layout
            </button>
          </div>
        </div>

        {/* Layout Render Strategy */}
        {isShowcase ? (
          <ProductShowcase 
            thumbnailPosition={
              layoutStyle === 'bottom-thumbnails' ? 'bottom' :
              layoutStyle === 'left-thumbnails' ? 'left' :
              layoutStyle === 'right-thumbnails' ? 'right' : 'none'
            } 
          />
        ) : isBundle ? (
          <GroupedProduct />
        ) : isInfo ? (
          <InfoTabsShowcase type={layoutStyle} />
        ) : (
          <div className={`ps-layout-wrapper ${layoutStyle === 'left-sidebar' || layoutStyle === 'right-sidebar' ? 'has-sidebar' : ''}`}>
            {layoutStyle === 'left-sidebar' && <FilterSidebar />}
            
            <div className="ps-main-listing">
              {layoutStyle === 'grid-sticky' && (
                <div className="ps-sticky-banner">
                  <div className="ps-sticky-banner-content">
                    <span className="banner-tag">Summer Special</span>
                    <h3>Cream Puff Ice Cream</h3>
                    <p>Delicate premium puffs filled with fresh strawberry cream toppings. Available at 20% discount this week only!</p>
                    <button className="btn-primary" onClick={() => {
                      const el = document.getElementById('product-cream-puff');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}>Order Now</button>
                  </div>
                </div>
              )}

              <div className={`ps-grid ${getGridClass()}`}>
                {products.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onQuickView={setQuickViewProduct}
                    styleType={cardStyle}
                  />
                ))}
              </div>
            </div>

            {layoutStyle === 'right-sidebar' && <FilterSidebar />}
          </div>
        )}

      </div>

      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </section>
  );
};

export default ProductsSection;
