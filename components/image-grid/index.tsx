import Image from "next/image";
import { Title } from "@/data/atom/title";
import { SectionWrapper } from "../section-wrapper";

const amenities = [
  {
    title: "Rooftop Infinity Pool",
    description:
      "A stunning infinity pool on the rooftop, offering breathtaking views and a perfect place for relaxation or social gatherings. It can also include lounge areas and a bar.",
    image: "/image/rooftop-img.jpg",
  },
  {
    title: "Smart Home Technology",
    description:
      "Integration of smart home features, such as automated lighting, temperature control, and security systems that can be controlled via a mobile app, providing convenience and enhanced security.",
    image: "/image/smart-home.jpg",
  },
  {
    title: "Co-Working Space",
    description:
      "A stylish and well-equipped co-working area with high-speed internet, meeting rooms, and collaboration zones for residents or tenants who work remotely, fostering community and networking opportunities.",
    image: "/image/coworking-space.jpg",
  },
  {
    title: "Indoor Vertical Garden",
    description:
      "A beautiful indoor vertical garden or green wall that improves air quality and adds a touch of nature to the building's interior, creating a calming atmosphere.",
    image: "/image/indoor-vertical.jpg",
  },
  {
    title: "Fitness and Wellness Center",
    description:
      "A state-of-the-art fitness center with a variety of workout classes, yoga studios, and wellness programs, including personal trainers and nutrition consultations.",
    image: "/image/fitness-wellness.jpg",
  },
  {
    title: "Pet Spa and Dog Park",
    description:
      "A dedicated space for pet owners, featuring a pet spa for grooming and an enclosed dog park for pets to play and socialize, making it a pet-friendly haven.",
    image: "/image/pet-spa.jpg",
  },
];

export default function ImageGrid() {
  return (
    <SectionWrapper className=" bg-[#eaecec]   mx-auto ">
      <div className="container mx-auto">
        <Title className="mx-auto text-[2rem] lg:text-[3.125rem] text-[#bb8866]  leader-title text-center mb-8">
          Client Centric
        </Title>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <Image
                src={amenity.image}
                alt={amenity.title}
                width={600}
                height={400}
                className="w-full  object-cover aspect-square transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent  opacity-0 group-hover:opacity-100"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4 transition-all duration-300 ease-in-out">
                <h2 className="text-[#bb8866]  text-xl font-semibold mb-2">
                  {amenity.title}
                </h2>
                <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
