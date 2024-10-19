import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQquest {
  question: string;
  answer?: string;
  html?: string;
}
interface FAQProps {
  title?: string;
  subTitle?: string;
  list: FAQquest[];
}
export const FAQ = ({ title, subTitle, list }: FAQProps) => {
  return (
    <div className="py-20">
      <div className="text-center mx-auto mb-20 px-[4rem]">
        {title && (
          <h2 className="text-[20px] lg:text-[50px] text-[#bb8866]">{title}</h2>
        )}
        <p className="text-[30px] lg:text-[48px] leading-none font-semibold">
          {subTitle}
        </p>
      </div>
      <div className="max-w-[80rem] px-10 mx-auto">
        <Accordion
          type="single"
          defaultValue="item-1"
          collapsible
          className="w-full"
        >
          {list.map((ele, i) => (
            <AccordionItem key={i} value={`item-${i}`} data-state="open">
              <AccordionTrigger>{ele.question}</AccordionTrigger>
              <AccordionContent>
                {ele.html ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: ele.html,
                    }}
                  ></div>
                ) : (
                  ele.answer
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
