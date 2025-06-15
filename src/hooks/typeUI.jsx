import { useEffect, useState } from "react";

const getTypeUI = (width) => {
  if (width < 768) return 1; // Mobile
  if (width < 1024) return 2; // Tablet
  return 3; // Desktop
};

export const useTypeUI = () => {
  const [typeUI, setTypeUI] = useState(getTypeUI(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      const newType = getTypeUI(window.innerWidth);
      setTypeUI(newType);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return typeUI;
};
