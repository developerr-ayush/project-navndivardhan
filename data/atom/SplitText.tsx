"use client";
import { useSprings, animated } from "@react-spring/web";
import { useEffect, useRef, useState, ReactElement } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const SplitText = ({
  text,
  className = "",
  delay = 100,
}: SplitTextProps): ReactElement => {
  const letters = text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) {
            observer.unobserve(ref.current); // Unobserve after triggering the animation
          }
        }
      },
      { threshold: 0.3, rootMargin: "-100px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const springs = useSprings(
    letters.length,
    letters.map((_, i) => ({
      from: { opacity: 0, transform: "translate(0,40px)" },
      to: inView
        ? async (next: any) => {
            await next({ opacity: 1, transform: "translate(0,-10px)" });
            await next({ opacity: 1, transform: "translate(0,0)" });
          }
        : { opacity: 0, transform: "translate(0,40px)" },
      delay: i * delay,
    }))
  );

  return (
    <h1
      className={`inline-block w-full overflow-hidden ${className}`}
      ref={ref}
    >
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={props}
          className="inline-block min-w-4 transform will-change-transform will-change-opacity"
        >
          {letters[index] === " " ? " " : letters[index]}
        </animated.span>
      ))}
    </h1>
  );
};
