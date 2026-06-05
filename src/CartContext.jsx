import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [cardStyle, setCardStyle] = useState('scale-hover');
  const [layoutStyle, setLayoutStyle] = useState('grid-5-col');
  const [homeStyle, setHomeStyle] = useState('home-1');

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQty = (productId, qty) => {
    if (qty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev => prev.map(item => 
      item.id === productId ? { ...item, qty } : item
    ));
  };

  const toggleWishlist = (product) => {
    setWishlistItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) return prev.filter(item => item.id !== product.id);
      return [...prev, product];
    });
  };

  const isInWishlist = (productId) => wishlistItems.some(item => item.id === productId);

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const wishlistCount = wishlistItems.length;

  return (
    <CartContext.Provider value={{
      cartItems, addToCart, removeFromCart, updateQty,
      wishlistItems, toggleWishlist, isInWishlist,
      cartCount, wishlistCount,
      cardStyle, setCardStyle,
      layoutStyle, setLayoutStyle,
      homeStyle, setHomeStyle
    }}>
      {children}
    </CartContext.Provider>
  );
};
