import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Este componente hace que la página suba al inicio cuando navegamos entre rutas
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
