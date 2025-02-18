import { useEffect, useState } from "react";

export const useMatchMedia = (
  minWidthString: string = "(min-width: 1024px)"
) => {
  const [isMatching, setIsMatching] = useState(false);
  useEffect(() => {
    if (!window) return;

    const handler = function (mm: unknown & { matches: boolean }) {
      if (mm.matches) {
        setIsMatching(true);
      } else {
        setIsMatching(false);
      }
    };

    const matchMedia = window.matchMedia(minWidthString);
    matchMedia.addEventListener("change", handler);
    return () => {
      matchMedia.removeEventListener("change", handler);
    };
  }, []);
  return isMatching;
};
