import { useEffect, useRef, useState } from "react";
import React from "react";

export default function ScrollReveal({ children, direction = "up" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // 👇 ADD THIS BLOCK
  const getAnimation = () => {
    if (direction === "left") {
      return visible
        ? "opacity-100 translate-x-0"
        : "opacity-0 -translate-x-80";
    }

    if (direction === "right") {
      return visible
        ? "opacity-100 translate-x-0"
        : "opacity-0 translate-x-80";
    }

    // default = up (your current behavior)
    return visible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-80";
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${getAnimation()}`}
    >
      {children}
    </div>
  );
}
