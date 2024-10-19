import { Hero } from "@/components/hero";
import { Redevelop } from "@/components/redevelop";
import { RedevelopmentForm } from "@/components/redevelopment-form";
import { RedevelopmentProcess } from "@/components/redevelopment-process";
import React from "react";
import { FAQ } from "@/components/faq";
const faq = {
  title: "Frequently Asked Questions",
  list: [
    {
      question: "What documents are needed for the redevelopment process?",
      html: `
      Conveyance of the property <br>
Property Card in the name of the Society<br>
Old Occupation Certificate and Plans<br>
CTS Plan<br>
List of Allotment of Members with Carpet Area<br>
Development Plan Remark<br>
      `,
    },
    {
      question: "How are buyers protected during redevelopment?",
      answer:
        "The Real Estate Regulation and Development Act of 2016 ensures protection for home buyers. Grievances can be directed to MAHARERA for resolution.",
    },
    {
      question: "What approvals are necessary for redevelopment?",
      answer:
        "Key approvals include NOCs from various departments (e.g., Fire, Traffic, BMC) and the Building Proposal Department.",
    },
    {
      question: "Who can opt for redevelopment?",
      answer:
        "Any building that has not fully utilized its plot potential under current DC regulations can consider redevelopment, subject to clear title.",
    },
    {
      question: "How to choose the right developer?",
      answer:
        "Evaluate a developer's financial stability, past performance, and compliance with statutory regulations.",
    },
  ],
};
export default function page() {
  return (
    <>
      <Hero img="/image/projects.jpg" />
      <Redevelop />
      <RedevelopmentProcess />
      <RedevelopmentForm />
      <FAQ {...faq} />
    </>
  );
}
