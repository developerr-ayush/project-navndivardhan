import React from "react";
interface TitleProps {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
}
export const Title = ({ as, className, children }: TitleProps) => {
  const Tag = as || "h3";
  return (
    <Tag className={` ${className}`}>
      <span>{children}</span>
    </Tag>
  );
};
