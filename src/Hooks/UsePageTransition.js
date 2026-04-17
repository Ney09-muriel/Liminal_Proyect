import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const usePageTransition = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isHiding, setIsHiding] = useState(false);

  // Se ejecuta cada vez que cambia la ruta
  useEffect(() => {
    setIsLoading(true);
    setIsHiding(false);

    const hideTimer = setTimeout(() => {
      setIsHiding(true);
    }, 2500);

    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, [location.pathname]); // ← clave: se dispara con cada cambio de ruta

  const navigateWithTransition = (path) => {
    setIsLoading(true);
    setIsHiding(false);

    setTimeout(() => {
      navigate(path);
    }, 500);
  };

  return { isLoading, isHiding, navigateWithTransition };
};

export default usePageTransition;