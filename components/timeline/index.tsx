import { FC } from "react";

interface TimelineItem {
  year: number;
  title: string;
  content: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: FC<TimelineProps> = ({ items }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative wrap overflow-hidden md:p-10 p-4 max-w-[80rem] mx-auto">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2 md:block hidden"></div>
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-8 md:hidden block"></div>
        {items.map((item, index) => (
          <div
            className={`mb-8 md:mb-0 flex justify-between items-center w-full flex-row-reverse ${
              index % 2 === 0 ? "flex-row-reverse md:flex-row" : " flex-row"
            } `}
            key={item.year}
          >
            <div className="order-1 md:w-5/12 w-full px-1 py-4 ">
              <div
                className={`p-4 rounded-lg shadow-lg relative  ${
                  index % 2 === 0 ? "md:mr-4" : "md:ml-4"
                } bg-white`}
              >
                <div
                  className={`absolute top-1/2 -mt-3 ${
                    index % 2 === 0 ? "md:-left-4 left-4" : "md:-right-4 left-4"
                  } w-0 h-0 border-t-8 border-b-8 border-transparent ${
                    index % 2 === 0
                      ? "md:border-r-8 border-l-8"
                      : "md:border-l-8 border-l-8"
                  } border-white`}
                ></div>
                <h3 className="mb-3 font-bold text-gray-800 text-xl">
                  {item.title}
                </h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  {item.content}
                </p>
              </div>
            </div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-14 h-14 rounded-full md:absolute md:left-1/2 md:-ml-[1.5rem]">
              <h3 className="mx-auto font-semibold text-lg text-white">
                {item.year}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export { Timeline };
