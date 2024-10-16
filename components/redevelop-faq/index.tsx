import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export const RedevelopFAQ = () => {
  return (
    <div className="py-20">
      <div className="text-center mx-auto mb-20 px-[4rem]">
        <h2 className="text-[20px] lg:text-[50px] text-[#bb8866]">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="max-w-[80rem] px-10 mx-auto">
        <Accordion
          type="single"
          defaultValue="item-1"
          collapsible
          className="w-full"
        >
          <AccordionItem value="item-1" data-state="open">
            <AccordionTrigger>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum, incidunt??
            </AccordionTrigger>
            <AccordionContent>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              mollitia atque unde fugit rem impedit distinctio nisi nihil fuga
              velit, id porro voluptatum totam, tempore cum ad dolorem
              voluptates, veritatis aliquam? Corporis autem architecto nulla
              quibusdam. Quibusdam reprehenderit soluta ipsam consequatur nam
              repellat similique vel sint ut consequuntur libero enim, officiis
              iure deserunt aut quisquam voluptatibus iusto tempore culpa quasi
              eligendi asperiores mollitia commodi omnis. Excepturi voluptates
              blanditiis voluptas corporis suscipit, minus illo laboriosam
              possimus rem atque, perspiciatis quaerat corrupti itaque voluptate
              dicta saepe iusto modi vel, hic magni molestias. Sequi
              exercitationem corporis accusamus hic consequatur ducimus sed,
              vitae laudantium!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum, incidunt??
            </AccordionTrigger>
            <AccordionContent>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              mollitia atque unde fugit rem impedit distinctio nisi nihil fuga
              velit, id porro voluptatum totam, tempore cum ad dolorem
              voluptates, veritatis aliquam? Corporis autem architecto nulla
              quibusdam. Quibusdam reprehenderit soluta ipsam consequatur nam
              repellat similique vel sint ut consequuntur libero enim, officiis
              iure deserunt aut quisquam voluptatibus iusto tempore culpa quasi
              eligendi asperiores mollitia commodi omnis. Excepturi voluptates
              blanditiis voluptas corporis suscipit, minus illo laboriosam
              possimus rem atque, perspiciatis quaerat corrupti itaque voluptate
              dicta saepe iusto modi vel, hic magni molestias. Sequi
              exercitationem corporis accusamus hic consequatur ducimus sed,
              vitae laudantium!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum, incidunt??
            </AccordionTrigger>
            <AccordionContent>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              mollitia atque unde fugit rem impedit distinctio nisi nihil fuga
              velit, id porro voluptatum totam, tempore cum ad dolorem
              voluptates, veritatis aliquam? Corporis autem architecto nulla
              quibusdam. Quibusdam reprehenderit soluta ipsam consequatur nam
              repellat similique vel sint ut consequuntur libero enim, officiis
              iure deserunt aut quisquam voluptatibus iusto tempore culpa quasi
              eligendi asperiores mollitia commodi omnis. Excepturi voluptates
              blanditiis voluptas corporis suscipit, minus illo laboriosam
              possimus rem atque, perspiciatis quaerat corrupti itaque voluptate
              dicta saepe iusto modi vel, hic magni molestias. Sequi
              exercitationem corporis accusamus hic consequatur ducimus sed,
              vitae laudantium!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum, incidunt??
            </AccordionTrigger>
            <AccordionContent>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              mollitia atque unde fugit rem impedit distinctio nisi nihil fuga
              velit, id porro voluptatum totam, tempore cum ad dolorem
              voluptates, veritatis aliquam? Corporis autem architecto nulla
              quibusdam. Quibusdam reprehenderit soluta ipsam consequatur nam
              repellat similique vel sint ut consequuntur libero enim, officiis
              iure deserunt aut quisquam voluptatibus iusto tempore culpa quasi
              eligendi asperiores mollitia commodi omnis. Excepturi voluptates
              blanditiis voluptas corporis suscipit, minus illo laboriosam
              possimus rem atque, perspiciatis quaerat corrupti itaque voluptate
              dicta saepe iusto modi vel, hic magni molestias. Sequi
              exercitationem corporis accusamus hic consequatur ducimus sed,
              vitae laudantium!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum, incidunt??
            </AccordionTrigger>
            <AccordionContent>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              mollitia atque unde fugit rem impedit distinctio nisi nihil fuga
              velit, id porro voluptatum totam, tempore cum ad dolorem
              voluptates, veritatis aliquam? Corporis autem architecto nulla
              quibusdam. Quibusdam reprehenderit soluta ipsam consequatur nam
              repellat similique vel sint ut consequuntur libero enim, officiis
              iure deserunt aut quisquam voluptatibus iusto tempore culpa quasi
              eligendi asperiores mollitia commodi omnis. Excepturi voluptates
              blanditiis voluptas corporis suscipit, minus illo laboriosam
              possimus rem atque, perspiciatis quaerat corrupti itaque voluptate
              dicta saepe iusto modi vel, hic magni molestias. Sequi
              exercitationem corporis accusamus hic consequatur ducimus sed,
              vitae laudantium!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
