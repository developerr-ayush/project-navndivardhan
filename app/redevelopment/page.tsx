import { Hero } from "@/components/hero";
import { Redevelop } from "@/components/redevelop";
import { RedevelopmentForm } from "@/components/redevelopment-form";
import { RedevelopmentProcess } from "@/components/redevelopment-process";
import React from "react";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { NandivardhanExpert } from "@/components/nandivardhan-expert";
import { NandiVardhanLifestyle } from "@/components/nandivardhan-lifestyle";
import TestimonialCarousel from "@/components/testimonial";
import { SectionWrapper } from "@/components/section-wrapper";
import { Title } from "@/components/title";
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
const testimonials = [
  {
    name: "Mr. Sharma",
    role: "Society President",
    content:
      "Working with Nandivardhan transformed our old society into a vibrant community. Their attention to detail and commitment to quality made the entire process smooth and satisfying",
  },
  {
    name: "Ms. Rao",
    role: "Resident",
    content:
      "The redevelopment project exceeded our expectations! The new amenities and designs have truly elevated our living standards",
  },
];
export default function page() {
  return (
    <>
      <Hero img="/image/projects.jpg" />
      <Redevelop />
      <RedevelopmentProcess />
      <RedevelopmentForm />
      <NandivardhanExpert />
      <NandiVardhanLifestyle />
      <FAQ {...faq} />
      <div className="mb-10">
        <Contact />
      </div>
      <SectionWrapper className="px-0">
        <Title className="mx-auto text-[2rem] lg:text-[3.125rem] text-[#bb8866] text-center">
          Whats our Customer Have to Say
        </Title>

        <TestimonialCarousel testimonial={testimonials} />
      </SectionWrapper>
    </>
  );
}
