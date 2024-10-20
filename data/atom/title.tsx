import React from "react";
import { SplitText } from "./SplitText";

export const Title = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <SplitText
      text={children?.toString() || ""}
      delay={50}
      {...props}
      className={`text-[7vw]  lg:text-[2.5vw] title text-[#bb8866] mb-8 ${className}`}
    >
      {}
    </SplitText>
  );
};
