import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useRef, useState } from 'react';

import Essentials from './essentials/Essentials';
import Footer from './components/footer/Footer';
import PopupProduct from './portals/PopupProduct';
import Home from './pages/Home';
import Shirts from './pages/Shirts';
import Tees from './pages/Tees';
import Shorts from './pages/Shorts';
import Shoes from './pages/Shoes';

import CartProvider from './store/CartProvider';

function App() {
  // to connect the observer to header
  const location = useLocation();
  const headerHomeRef = useRef(null);
  const headerShirtsRef = useRef(null);
  const headerTeesRef = useRef(null);
  const headerShortsRef = useRef(null);
  const headerShoesRef = useRef(null);

  const findingHeaderActiveRef = () => {
    if (location.pathname === '/shirts') return headerShirtsRef;
    if (location.pathname === '/tees') return headerTeesRef;
    if (location.pathname === '/shorts') return headerShortsRef;
    if (location.pathname === '/shoes') return headerShoesRef;
    if (location.pathname === '/') return headerHomeRef;
  };
  const headerActiveRef = findingHeaderActiveRef();

  const [showFeaturedModal, setShowFeaturedModal] = useState(false);

  const onShowModalHandler = () => {
    setShowFeaturedModal(true);
  };

  const onCloseModalHandler = () => {
    setShowFeaturedModal(false);
  };

  return (
    <CartProvider>
      <div className="container-main">
        {/* Navs */}
        <Essentials headerRef={headerActiveRef} onClose={onCloseModalHandler} />

        {/* Popup */}
        {showFeaturedModal && <PopupProduct onClose={onCloseModalHandler} />}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home ref={headerHomeRef} />} />
          <Route
            path="/shirts"
            element={
              <Shirts ref={headerShirtsRef} onShowModal={onShowModalHandler} />
            }
          />
          <Route
            path="/tees"
            element={
              <Tees ref={headerTeesRef} onShowModal={onShowModalHandler} />
            }
          />
          <Route
            path="/shorts"
            element={
              <Shorts ref={headerShortsRef} onShowModal={onShowModalHandler} />
            }
          />
          <Route
            path="/shoes"
            element={
              <Shoes ref={headerShoesRef} onShowModal={onShowModalHandler} />
            }
          />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
