import React from "react";
interface TitleProps {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
}
export const Title = ({ as, className, children }: TitleProps) => {
  let Tag = as || "h3";
  return (
    <Tag className={`title-hover ${className}`}>
      <span>{children}</span>
    </Tag>
  );
};
