import React from "react";

export const Title = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h2
      {...props}
      className={`text-[7vw]  lg:text-[2.5vw] title text-[#bb8866] mb-8 ${className}`}
    >
      {children}
    </h2>
  );
};
