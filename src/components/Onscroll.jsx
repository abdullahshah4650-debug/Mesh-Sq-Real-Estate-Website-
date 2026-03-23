

import { useEffect, useRef, useState } from "react";
import React from "react";

export default function ScrollReveal({ children, direction = "up" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger state change if it’s actually different
        setVisible((prev) => {
          if (prev !== entry.isIntersecting) return entry.isIntersecting;
          return prev;
        });
      },
      { threshold: 0.1 },
    ); // adjust threshold for smoother trigger

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const getAnimation = () => {
    switch (direction) {
      case "left":
        return visible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-80";
      case "right":
        return visible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-80";
      default: // up
        return visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-80";
    }
  };

  return (
    <div
      ref={ref}
      className={` transition-transform duration-500 ease-out transform ${getAnimation()} will-change-transform`}
    >
      {children}
    </div>
  );
}
