import { useState, useEffect } from "react";

const checkIfMatching = (size: number) => window.innerWidth >= size;

export function useWindowSize(sizeToMatch: number) {
  const [isMatching, setIsMatching] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;

    return checkIfMatching(sizeToMatch);
  });

  useEffect(() => {
    const handleResize = () => setIsMatching(checkIfMatching(sizeToMatch));

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [sizeToMatch]);

  return { isMatching };
}
