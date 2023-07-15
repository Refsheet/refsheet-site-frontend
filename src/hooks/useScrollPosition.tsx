import React, { useEffect, useState } from "react";

export function useScrollPosition(scrollFactor: number = 0) {
  const [position, setPosition] = useState<number>(0);

  function onScroll() {
    setPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return position * scrollFactor;
}
