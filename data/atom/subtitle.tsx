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
      className={` text-[1.4rem] lg:text-[2.6rem] tracking-widest mb-20  leading-[1.2]  ${className}`}
    >
      {children}
    </p>
  );
};
