import React, { useRef, useState, useEffect } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const FadeInSection: React.FC<Props> = ({ children, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ease-out opacity-0 ${
        isVisible ? "opacity-100" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;