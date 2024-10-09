"use client";
import React, { useState, useEffect, useRef } from "react";

export const Counter = ({ counter }: { counter: number }) => {
  const [currentCount, setCurrentCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      { threshold: 0.5 } // Adjust threshold for visibility (0.5 means 50% visible)
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const increment = Math.ceil(counter / 100);

    const interval = setInterval(() => {
      start += increment;
      if (start >= counter) {
        setCurrentCount(counter);
        clearInterval(interval);
      } else {
        setCurrentCount(start);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [hasStarted, counter]);

  return (
    <span ref={counterRef}>
      <span>{currentCount}</span>
    </span>
  );
};
