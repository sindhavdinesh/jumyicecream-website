import { useState, useEffect, useRef } from 'react';
import { useCart } from '../CartContext';

/* ─────────────────────────────────────────
   DROPDOWN DATA
───────────────────────────────────────── */
const HOME_MENU = {
  type: 'simple',
  items: [
    { label: 'Home 1', href: '#' },
    { label: 'Home 2', href: '#' },
    { label: 'Home 3', href: '#' },
    { label: 'Home 4', href: '#' },
    { label: 'Home 5', href: '#' },
    { label: 'Home 6', href: '#' },
    { label: 'Home 7', href: '#' },
    { label: 'Home 8', href: '#' },
  ],
};

const SHOP_MENU = {
  type: 'mega-shop',
  columns: [
    {
      heading: 'Layout',
      items: [
        'Standard', 'Standard With Banner', 'Categories Image 1', 'Categories Image 2',
        'Fullwidth', 'List view', 'Simple', 'Mansonry', 'Overlay Header',
        'Collection List 1', 'Collection List 2', 'Collection Slider',
      ],
      badges: { 'Mansonry': 'Hot', 'Collection Slider': 'New' },
    },
    {
      heading: 'Filter',
      items: [
        'On top', 'Dropdown', 'Side out', 'Drawer',
        'Sidebar Style 1', 'Sidebar Style 2', 'Sidebar Style 3', 'Sidebar Style 4', 'Filter Scroll',
      ],
      badges: { 'Sidebar Style 2': 'New', 'Sidebar Style 3': 'Hot' },
    },
    {
      heading: 'Loader & Cart',
      items: [
        'Shop Paggination', 'Shop Load more button', 'Shop Infinite scrolling',
        'Cart Dropdown', 'Cart Side out', 'Cart Page',
      ],
    },
  ],
};

const PRODUCT_MENU = {
  type: 'mega-product',
  columns: [
    {
      heading: 'PRODUCT LAYOUT',
      items: ['Grid 1 columns', 'Grid 2 columns', 'Grid modern', 'Grid sticky',
        'Slider full-width', 'Bottom Thumbnails', 'Left Thumbnails', 'Right Thumbnails',
        'Without Thumbnails', 'Left Sidebar', 'Right Sidebar', 'Group Product',
        'Tab information', 'Collapsible tabs information', 'Full Content information',
        'Vertical information'],
    },
    {
      heading: 'FRETURED',
      headingKey: 'Featured-1',
      items: ['Pre-order product', 'Sticky add to cart', 'Video', '3D, AR models',
        'Product 360', 'Countdown Timer', 'Frequently Bought Together v1',
        'Frequently Bought Together v2', 'Buy more save more', 'Real-time visitors',
        'Stock countdown', 'Back in stock notification', 'Dynamic checkout button',
        'Trust badge', 'Delivery information'],
      badges: { 'Pre-order product': 'Hot', 'Frequently Bought Together v2': 'New', 'Back in stock notification': 'New' },
    },
    {
      heading: 'FRETURED',
      headingKey: 'Featured-2',
      items: ['Product Upsell Features', 'Product pickup', 'Size Guide HTML',
        'Shipping info', 'Ask a Question', 'Product Variable Image',
        'Product Variable Color', 'Product Variable Color and Check Box',
        'Product Variable Dropdown', 'Product Variable Color and Dropdown',
        'Product Variable Box', 'Product Variable Check Box'],
      badges: { 'Product pickup': 'New', 'Product Variable Color and Check Box': 'New',
        'Product Variable Color and Dropdown': 'New' },
    },

    {
      heading: 'PRODUCT CARD',
      items: [
        'Scale hover', 'Slider hover', 'Fadein hover', 'Zoom hover',
        'Icons on hover', 'Icon & add to cart', 'Quick view button',
        'Add to cart button', 'Wishlist on the bottom', 'Dual Button',
        'Info in hover', 'Quick shop button',
      ],
      badges: { 'Info in hover': 'New', 'Quick shop button': 'Hot' },
    },
  ],
};

const BLOG_MENU = {
  type: 'mega-blog',
  columns: [
    {
      heading: 'Layout & Post',
      items: ['Blog Standard', 'Blog Grid', 'Blog Grid Mix', 'List',
        'Post Sidebar', 'Post One Column', 'Post Parallax Image',
        'Post Sticky', 'Post Simple Title'],
    },
  ],
  posts: [
    { img: '/blog1_1779852061363.png', category: 'Business Tips', title: "The Best Ice Cream You'll Never Eat", href: '#blog' },
    { img: '/blog2_1779852081992.png', category: 'Business Tips', title: 'Fancy Figs? Make This Ice Cream', href: '#blog' },
  ],
};

const FEATURED_MENU = {
  type: 'mega-featured',
  columns: [
    {
      heading: 'Page',
      items: ['About Us', 'Contact Us', 'Faqs', 'Faqs 2', 'Wishlist', '404 Error'],
      actions: { 'Wishlist': 'wishlist' },
    },
    {
      heading: 'Portfolio',
      items: ['2 Columns', '3 Columns', '4 Columns', 'Masonry Layout'],
      badges: { 'Masonry Layout': 'New' },
    },
    {
      heading: 'Featured',
      items: ['Popup Newsletter', 'Popup Compare', 'Cookies law info', 'RTL Layout'],
      badges: { 'Popup Compare': 'New' },
    },
    {
      heading: 'Instagram Shop',
      items: ['Instagram Shop Slider', 'Instagram Shop Grid Modern', 'Instagram Shop in Page'],
    },
  ],
};

/* ─────────────────────────────────────────
   SMALL HELPERS
───────────────────────────────────────── */
const Badge = ({ label }) => (
  <span className={`badge-pill badge-${label.toLowerCase()}`}>{label}</span>
);

/* ─────────────────────────────────────────
   DROPDOWN VARIANTS
───────────────────────────────────────── */
const SimpleDropdown = ({ menu, onClose }) => {
  const { setHomeStyle } = useCart();
  const handleClick = (e, label) => {
    e.preventDefault();
    const styleId = label.toLowerCase().replace(' ', '-');
    setHomeStyle(styleId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (onClose) onClose();
  };
  return (
    <div className="dd-simple">
      {menu.items.map(item => (
        <a key={item.label} href={item.href} className="dd-simple-item" onClick={(e) => handleClick(e, item.label)}>
          <span className="dd-col-item-text">{item.label}</span>
        </a>
      ))}
    </div>
  );
};

const ShopMega = ({ menu, onClose }) => {
  const handleClick = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    if (onClose) onClose();
  };
  return (
    <div className="dd-mega dd-mega-shop-only">
      <div className="dd-cols dd-cols-shop">
        {menu.columns.map(col => (
          <div key={col.heading} className="dd-col">
            <p className="dd-col-heading dd-col-heading-dark">{col.heading}</p>
            {col.items.map(item => (
              <a key={item} href="#products" className="dd-col-item dd-col-item-sm" onClick={handleClick}>
                <span className="dd-col-item-text">{item}</span>
                {col.badges?.[item] && <Badge label={col.badges[item]} />}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductMega = ({ menu, onClose }) => {
  const { setCardStyle, setLayoutStyle } = useCart();

  const handleClick = (e, item, heading) => {
    e.preventDefault();
    if (heading === 'PRODUCT CARD') {
      const cardStyleMap = {
        'Scale hover': 'scale-hover',
        'Slider hover': 'slider-hover',
        'Fadein hover': 'fadein-hover',
        'Zoom hover': 'zoom-hover',
        'Icons on hover': 'icons-on-hover',
        'Icon & add to cart': 'icon-add-to-cart',
        'Quick view button': 'quick-view-btn',
        'Add to cart button': 'add-to-cart-btn',
        'Wishlist on the bottom': 'wishlist-bottom',
        'Dual Button': 'dual-button',
        'Info in hover': 'info-in-hover',
        'Quick shop button': 'quick-shop-btn',
      };
      const styleId = cardStyleMap[item] || 'scale-hover';
      setCardStyle(styleId);
    } else if (heading === 'PRODUCT LAYOUT') {
      const layoutStyleMap = {
        'Grid 1 columns': 'grid-1-col',
        'Grid 2 columns': 'grid-2-col',
        'Grid modern': 'grid-modern',
        'Grid sticky': 'grid-sticky',
        'Slider full-width': 'slider-full-width',
        'Bottom Thumbnails': 'bottom-thumbnails',
        'Left Thumbnails': 'left-thumbnails',
        'Right Thumbnails': 'right-thumbnails',
        'Without Thumbnails': 'without-thumbnails',
        'Left Sidebar': 'left-sidebar',
        'Right Sidebar': 'right-sidebar',
        'Group Product': 'group-product',
        'Tab information': 'tab-information',
        'Collapsible tabs information': 'collapsible-tabs-information',
        'Full Content information': 'full-content-information',
        'Vertical information': 'vertical-information',
      };
      const layoutId = layoutStyleMap[item] || 'grid-5-col';
      setLayoutStyle(layoutId);
    }
    
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    if (onClose) onClose();
  };

  return (
    <div className="dd-mega dd-mega-product-clean">
      <div className="dd-cols dd-cols-product">
        {menu.columns.map(col => (
          <div key={col.headingKey ?? col.heading} className="dd-col dd-col-product">
            <p className="dd-col-heading dd-col-heading-dark">{col.heading}</p>
            {col.items.map(item => (
              <a 
                key={item} 
                href="#products" 
                className="dd-col-item dd-col-item-sm"
                onClick={(e) => handleClick(e, item, col.heading)}
              >
                <span className="dd-col-item-text">{item}</span>
                {col.badges?.[item] && <Badge label={col.badges[item]} />}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const BlogMega = ({ menu, onClose }) => (
  <div className="dd-mega dd-mega-blog">
    <div className="dd-cols">
      {menu.columns.map(col => (
        <div key={col.heading} className="dd-col">
          <p className="dd-col-heading">{col.heading}</p>
          {col.items.map(item => (
            <a key={item} href="#blog" className="dd-col-item" onClick={onClose}>
              <span className="dd-col-item-text">{item}</span>
            </a>
          ))}
        </div>
      ))}
    </div>
    <div className="dd-blog-posts">
      {menu.posts.map(post => (
        <a key={post.title} href={post.href} className="dd-blog-post" onClick={onClose}>
          <div className="dd-blog-post-img"><img src={post.img} alt={post.title} /></div>
          <div className="dd-blog-post-info">
            <span className="dd-blog-post-cat">{post.category}</span>
            <p className="dd-blog-post-title">{post.title}</p>
          </div>
        </a>
      ))}
    </div>
  </div>
);

const FeaturedMega = ({ menu, onWishlist, onClose }) => {
  const handleClick = () => {
    if (onClose) onClose();
  };
  return (
    <div className="dd-mega dd-mega-featured-clean">
      <div className="dd-cols dd-cols-featured">
        {menu.columns.map(col => (
          <div key={col.heading} className="dd-col dd-col-featured">
            <p className="dd-col-heading dd-col-heading-dark">{col.heading}</p>
            {col.items.map(item => {
              if (col.actions?.[item] === 'wishlist') {
                return (
                  <button key={item} className="dd-col-item dd-col-item-sm dd-col-btn"
                    onClick={() => { onWishlist(); handleClick(); }}>
                    <span className="dd-col-item-text">{item}</span>
                  </button>
                );
              }
              return (
                <a key={item} href="#" className="dd-col-item dd-col-item-sm" onClick={handleClick}>
                  <span className="dd-col-item-text">{item}</span>
                  {col.badges?.[item] && <Badge label={col.badges[item]} />}
                </a>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

/* Map name → component */
const DropdownContent = ({ name, onWishlist, onClose }) => {
  if (name === 'Home')     return <SimpleDropdown menu={HOME_MENU} onClose={onClose} />;
  if (name === 'Shop')     return <ShopMega menu={SHOP_MENU} onClose={onClose} />;
  if (name === 'Product')  return <ProductMega menu={PRODUCT_MENU} onClose={onClose} />;
  if (name === 'Blog')     return <BlogMega menu={BLOG_MENU} onClose={onClose} />;
  if (name === 'Featured') return <FeaturedMega menu={FEATURED_MENU} onWishlist={onWishlist} onClose={onClose} />;
  return null;
};

/* ─────────────────────────────────────────
   SEARCH MODAL
───────────────────────────────────────── */
const SearchModal = ({ open, onClose }) => {
  const inputRef = useRef(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (open) { 
      const t = setTimeout(() => {
        setQuery('');
        inputRef.current?.focus();
      }, 80);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="search-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Search">
      <div className="search-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close search">×</button>
        <div className="search-input-wrap">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="search-icon-sm">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            id="search-input"
            type="search"
            placeholder="Search..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="search-input"
            aria-label="Search products"
          />
        </div>
        {query && (
          <p className="search-hint">Press Enter to search for "<strong>{query}</strong>"</p>
        )}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   SIGN IN SIDEBAR
───────────────────────────────────────── */
const SignInSidebar = ({ open, onClose }) => {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <>
      {open && <div className="sidebar-backdrop" onClick={onClose} />}
      <div className={`sidebar-panel signin-panel${open ? ' open' : ''}`} role="dialog" aria-modal="true" aria-label="Sign in">
        <button className="sidebar-close-btn" onClick={onClose} aria-label="Close">×</button>
        <h2 className="sidebar-title">SIGN IN</h2>

        <form className="signin-form" onSubmit={e => e.preventDefault()} noValidate>
          <div className="form-group">
            <input
              id="signin-email"
              type="email"
              placeholder="Email*"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-group form-group-pass">
            <input
              id="signin-password"
              type={showPass ? 'text' : 'password'}
              placeholder="Password*"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="form-input"
              required
            />
            <button type="button" className="pass-toggle" onClick={() => setShowPass(!showPass)} aria-label={showPass ? 'Hide password' : 'Show password'}>
              {showPass ? (
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
          <a href="#" className="forgot-link" id="signin-forgot-link">Lost your password?</a>
          <div className="signin-actions">
            <button type="submit" className="btn-signin" id="signin-submit-btn">Sign In</button>
            <button type="button" className="btn-create-account" id="signin-create-btn">Create Your Account</button>
          </div>
        </form>
      </div>
    </>
  );
};

/* ─────────────────────────────────────────
   CART SIDEBAR
───────────────────────────────────────── */
const CartSidebar = ({ open, onClose, cartItems = [] }) => {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      {open && <div className="sidebar-backdrop" onClick={onClose} />}
      <div className={`sidebar-panel cart-panel${open ? ' open' : ''}`} role="dialog" aria-modal="true" aria-label="Shopping cart">
        <div className="cart-panel-header">
          <h2 className="sidebar-title" style={{ margin: 0 }}>Shopping Cart</h2>
          <button className="sidebar-close-btn" style={{ position: 'static', marginLeft: 'auto' }} onClick={onClose} aria-label="Close cart">×</button>
        </div>
        <div className="cart-panel-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <p className="cart-empty-text">Your cart is currently empty.</p>
              <a href="#products" className="btn-primary" style={{ display: 'inline-block', marginTop: '24px', fontSize: '13px', padding: '12px 24px' }} onClick={onClose}>
                Continue Shopping
              </a>
            </div>
          ) : (
            <>
              <div className="cart-items-list">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-img" />
                    <div className="cart-item-info">
                      <p className="cart-item-name">{item.name}</p>
                      <p className="cart-item-price">{item.qty} × ${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-subtotal">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Checkout</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

/* ─────────────────────────────────────────
   WISHLIST PAGE
───────────────────────────────────────── */
const WishlistPage = ({ open, onClose, items = [] }) => {
  if (!open) return null;
  return (
    <div className="page-overlay">
      <div className="page-inner">
        <div className="page-header-bar">
          <div className="navbar-logo" style={{ cursor: 'pointer' }} onClick={onClose}>
            <span className="logo-text">JUMYS</span>
            <span className="logo-sub">Ice Cream</span>
          </div>
          <nav className="wishlist-nav" style={{ display: 'flex', gap: '24px', fontSize: '14px' }}>
            {['Home', 'Shop', 'Product', 'Blog', 'Featured'].map(n => (
              <a key={n} href="#" className="nav-link" onClick={onClose}>{n}</a>
            ))}
          </nav>
        </div>

        <div className="wishlist-content">
          <h1 className="wishlist-title">wishlist</h1>
          <p className="wishlist-breadcrumb">
            <a href="#" onClick={onClose}>Home</a> / wishlist
          </p>

          {items.length === 0 ? (
            <p className="wishlist-empty">There are no products in wishlist</p>
          ) : (
            <div className="products-grid" style={{ marginTop: '32px' }}>
              {items.map(item => (
                <div key={item.id} className="product-card">
                  <div className="product-image-wrap">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="product-info">
                    <p className="product-name">{item.name}</p>
                    <p className="product-price"><span className="price">{item.price}</span></p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Newsletter + Footer reuse */}
        <div className="newsletter-section" style={{ marginTop: 'auto' }}>
          <div className="newsletter-inner">
            <h2>Sign Up To Our Newsletter!</h2>
            <p>Be The First To Know About New Flavors And More</p>
            <div className="newsletter-form">
              <label htmlFor="wishlist-newsletter-email" style={{ position: 'absolute', clip: 'rect(0,0,0,0)' }}>Email</label>
              <input id="wishlist-newsletter-email" type="email" placeholder="Your Email..." />
              <button type="button">Sign Up</button>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-logo">
              <div className="logo-text">JUMYS</div>
              <div className="logo-sub">Ice Cream</div>
            </div>
            <p className="footer-copy">© 2024 – JUMYS. ALL RIGHTS RESERVED.</p>
            <div className="footer-socials">
              {['f', 'x', 'w', 't'].map(s => (
                <a key={s} href="#" className="social-btn">{s === 'f' ? 'f' : s === 'x' ? '𝕏' : s === 'w' ? 'w' : '♪'}</a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   MOBILE MENU
───────────────────────────────────────── */
const MobileMenu = ({ open, onClose }) => {
  const [openAccordion, setOpenAccordion] = useState(null);
  
  const toggleAccordion = (name) => {
    setOpenAccordion(openAccordion === name ? null : name);
  };

  const menuData = [
    { name: 'Home', items: HOME_MENU.items.map(i => i.label) },
    { name: 'Shop', items: SHOP_MENU.columns.flatMap(c => [c.heading, ...c.items]).slice(0, 12) },
    { name: 'Product', items: PRODUCT_MENU.columns.flatMap(c => [c.heading, ...c.items]).slice(0, 12) },
    { name: 'Blog', items: BLOG_MENU.columns.flatMap(c => c.items) },
    { name: 'Featured', items: FEATURED_MENU.columns.flatMap(c => c.items) },
  ];
  
  return (
    <>
      {open && <div className="mobile-menu-backdrop" onClick={onClose} />}
      <div className={`mobile-menu-panel${open ? ' open' : ''}`}>
        <div className="mobile-menu-header">
          <div className="navbar-logo">
            <span className="logo-text">JUMYS</span>
            <span className="logo-sub">Ice Cream</span>
          </div>
          <button className="mobile-menu-close" onClick={onClose} aria-label="Close menu">×</button>
        </div>
        <nav className="mobile-menu-nav">
          {menuData.map(menu => (
            <div key={menu.name} className="mobile-accordion">
              <button 
                className={`mobile-accordion-trigger${openAccordion === menu.name ? ' active' : ''}`}
                onClick={() => toggleAccordion(menu.name)}
              >
                {menu.name}
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" 
                  style={{ transform: openAccordion === menu.name ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`mobile-accordion-content${openAccordion === menu.name ? ' open' : ''}`}>
                {menu.items.map((item, i) => (
                  <a key={i} href="#" className="mobile-menu-link" onClick={onClose}>{item}</a>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

/* ─────────────────────────────────────────
   MAIN NAVBAR
───────────────────────────────────────── */
const Navbar = () => {
  const { cartCount, wishlistCount, cartItems, wishlistItems } = useCart();
  const [scrolled, setScrolled]       = useState(false);
  const [activeLink, setActiveLink]   = useState('Home');
  const [openMenu, setOpenMenu]       = useState(null);
  const [searchOpen, setSearchOpen]   = useState(false);
  const [signinOpen, setSigninOpen]   = useState(false);
  const [cartOpen, setCartOpen]       = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeTimer                    = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => { if (!e.target.closest('.nav-item')) setOpenMenu(null); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  /* Lock body scroll when any overlay is open */
  useEffect(() => {
    const anyOpen = searchOpen || signinOpen || cartOpen || wishlistOpen || mobileMenuOpen;
    document.body.style.overflow = anyOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [searchOpen, signinOpen, cartOpen, wishlistOpen, mobileMenuOpen]);

  const handleMouseEnter = (name) => { clearTimeout(closeTimer.current); setOpenMenu(name); };
  const handleMouseLeave = () => { closeTimer.current = setTimeout(() => setOpenMenu(null), 180); };

  const navLinks = [
    { name: 'Home',     href: '#',         hasDropdown: true },
    { name: 'Shop',     href: '#products', hasDropdown: true },
    { name: 'Product',  href: '#featured', hasDropdown: true },
    { name: 'Blog',     href: '#blog',     hasDropdown: true },
    { name: 'Featured', href: '#flavors',  hasDropdown: true },
  ];

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="navbar-inner">
          {/* Logo */}
          <a href="#" className="navbar-logo" id="nav-logo" aria-label="Jumys Ice Cream Home">
            <span className="logo-text">JUMYS</span>
            <span className="logo-sub">Ice Cream</span>
          </a>

          {/* Nav Links */}
          <ul className="navbar-nav" role="menubar">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className={`nav-item${openMenu === link.name ? ' open' : ''}`}
                role="none"
                onMouseEnter={() => handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={link.href}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  className={`nav-link${activeLink === link.name ? ' active' : ''}`}
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded={openMenu === link.name}
                  onClick={() => setActiveLink(link.name)}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      style={{ transform: openMenu === link.name ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>

                {link.hasDropdown && (
                  <div
                    className={`dropdown-panel dropdown-panel-${link.name.toLowerCase()}${openMenu === link.name ? ' visible' : ''}`}
                    role="menu"
                    aria-label={`${link.name} menu`}
                    onMouseEnter={() => handleMouseEnter(link.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <DropdownContent name={link.name} onWishlist={() => { setOpenMenu(null); setWishlistOpen(true); }} onClose={() => setOpenMenu(null)} />
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Action Icons */}
          <div className="navbar-actions">
            <button className="hamburger-btn" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
              <span></span><span></span><span></span>
            </button>
            <button className="nav-icon-btn" id="nav-search-btn" aria-label="Search"
              onClick={() => setSearchOpen(true)}>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <button className="nav-icon-btn" id="nav-account-btn" aria-label="Account"
              onClick={() => setSigninOpen(true)}>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            <button className="nav-icon-btn" id="nav-wishlist-btn" aria-label={`Wishlist (${wishlistCount} items)`}
              onClick={() => setWishlistOpen(true)}>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="badge">{wishlistCount}</span>
            </button>

            <button className="nav-icon-btn" id="nav-cart-btn" aria-label={`Cart (${cartCount} items)`}
              onClick={() => setCartOpen(true)}>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="badge">{cartCount}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* ── Overlays & Panels ── */}
      <SearchModal  open={searchOpen}   onClose={() => setSearchOpen(false)} />
      <SignInSidebar open={signinOpen}  onClose={() => setSigninOpen(false)} />
      <CartSidebar  open={cartOpen}     onClose={() => setCartOpen(false)} cartItems={cartItems} />
      <WishlistPage open={wishlistOpen} onClose={() => setWishlistOpen(false)} items={wishlistItems} />
      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};

export default Navbar;
