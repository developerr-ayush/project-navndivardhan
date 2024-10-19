import React from "react";

export const Subtitle = ({
  className,
  children,
  ...props
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      {...props}
      className={`px-[3vw] text-[1.4rem] lg:text-[2.6rem] tracking-widest mb-20  leading-none  ${className}`}
    >
      {children}
    </p>
  );
};
