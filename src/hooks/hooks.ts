import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
        setScrollPosition(window.scrollY);
    };

    updatePosition();

    window.addEventListener("scroll", updatePosition);

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};
