import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const usePageTransition = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isHiding, setIsHiding] = useState(false);

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
  }, []);

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