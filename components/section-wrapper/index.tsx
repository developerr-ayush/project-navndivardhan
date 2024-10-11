import React from "react";
interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionWrapper = ({
  children,
  className,
}: SectionWrapperProps) => {
  return <section className={`p-[3vw] ${className}`}>{children}</section>;
};
