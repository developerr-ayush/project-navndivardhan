import React from "react";

export const Team = () => {
  return (
    <div>
      <div className="text-center max-w-[45rem] mx-auto my-20">
        <h2 className="text-[20px] lg:text-[50px] text-[#00a8dd]">
          Leadership Team
        </h2>
        <p className="text-[30px] lg:text-[48px] leading-none font-semibold">
          Empowering visionaries driving innovation and success.
        </p>
      </div>
      <div className="container mx-auto px-4">
        <div className="team-item my-10">
          <div className="info md:flex items-center lg:gap-[4rem]">
            <img
              className="w-[15rem] max-w-full mb-4"
              src="/image/team-1.png"
              alt=""
            />
            <div className="text">
              <h3 className="text-[20px] md:text-[50px] text-[#00a8dd]  font-semibold">
                Mr. Anil Nagraj Mutha
              </h3>
              <p className="text-[20px] md:text-[25px] leading-none font-semibold">
                Chief Visionary and Co-Founder
              </p>
            </div>
          </div>
          <p className="mt-8">
            Anil Nagraj Mutha, with his remarkable foresight and entrepreneurial
            spirit, has been instrumental in the rise of Nandivardhan Group. His
            visionary approach focuses on creating extraordinary living spaces
            that push the boundaries of design and functionality. He oversees
            every aspect of the company&apos;s operations, ensuring that
            innovation remains at the core of every project. His leadership has
            not only led to numerous successful developments but also solidified
            Nandivardhan&apos;s reputation as a trusted and respected name in
            real estate.
          </p>
        </div>
        <div className="team-item my-10">
          <div className="info md:flex items-center lg:flex-row-reverse lg:gap-[4rem]">
            <img
              className="w-[15rem] max-w-full mb-4"
              src="/image/team-1.png"
              alt=""
            />
            <div className="text lg:text-right">
              <h3 className="text-[20px] md:text-[50px] text-[#00a8dd]  font-semibold">
                Mr. Yash Ritesh Mutha
              </h3>
              <p className="text-[20px] md:text-[25px] leading-none font-semibold">
                Chief Strategist: Sales
              </p>
            </div>
          </div>
          <p className="mt-8 lg:text-right">
            Yash Ritesh Mutha spearheads the sales strategies for Nandivardhan,
            bringing with him a modern perspective and a deep understanding of
            customer needs. His innovative sales techniques have been crucial in
            expanding the Group&apos;s reach and ensuring a seamless customer
            experience.Under his leadership, Nandivardhan&apos;s sales
            operations have become more dynamic and responsive to market trends,
            positioning the company as a leader in customer engagement and
            satisfaction
          </p>
        </div>
        <div className="team-item my-10">
          <div className="info md:flex items-center lg:gap-[4rem]">
            <img
              className="w-[15rem] max-w-full mb-4"
              src="/image/team-1.png"
              alt=""
            />
            <div className="text">
              <h3 className="text-[20px] md:text-[50px] text-[#00a8dd]  font-semibold">
                Mr. Nagraj Talaji Mutha
              </h3>
              <p className="text-[20px] md:text-[25px] leading-none font-semibold">
                Chairman
              </p>
            </div>
          </div>
          <p className="mt-8">
            With a wealth of industry experience, Nagraj Talaji Mutha is the
            strategic anchor of Nandivardhan Group. As Chairman, his steady
            guidance has been essential to the company&apos;s long-term success.
            His deep knowledge of the real estate sector, combined with his
            commitment to maintaining high standards of quality, has helped
            Nandivardhan grow steadily while staying true to its core values. He
            continues to play a key role in shaping the Group&apos;s direction,
            ensuring its growth is both sustainable and impactful. Together,
            these leaders bring an unparalleled level of expertise, vision, and
            dedication to the Group, propelling Nandivardhan towards continued
            success and innovation in the ever-evolving real estate market.
          </p>
        </div>
      </div>
    </div>
  );
};
