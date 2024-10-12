import { KeyBenefits } from "@/components/key-benefits";
import { ProjectBanner } from "@/components/project-banner";
import { ProjectInfo } from "@/components/project-info";
import { ProjectOverview } from "@/components/project-overview";
import React from "react";

export default function page() {
  return (
    <div>
      <ProjectBanner
        img="/image/project-detail.png"
        text="A Location that puts you The Heart of Living"
      />
      <ProjectInfo />
      <ProjectOverview />
      <KeyBenefits />
    </div>
  );
}
