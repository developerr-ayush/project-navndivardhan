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
      question:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facer mollitia atque",
      answer: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
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
                vitae laudantium!`,
    },
    {
      question:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facer mollitia atque",
      answer: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
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
                vitae laudantium!`,
    },
    {
      question:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facer mollitia atque",
      answer: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
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
                vitae laudantium!`,
    },
    {
      question:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facer mollitia atque",
      answer: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
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
                vitae laudantium!`,
    },
    {
      question:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facer mollitia atque",
      answer: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
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
                vitae laudantium!`,
    },
    {
      question:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facer mollitia atque",
      answer: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
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
                vitae laudantium!`,
    },
    {
      question:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facer mollitia atque",
      answer: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
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
                vitae laudantium!`,
    },
    {
      question:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facer mollitia atque",
      answer: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
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
                vitae laudantium!`,
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
