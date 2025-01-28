import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Card = ({ title, description, image, index }) => {
  return (
    <section>
      <div
        data-aos="fade-up"
        data-aos-delay={String(index * 100)}
        className="w-[300px] xs:w-[340px] sm:w-[440px] md:w-[480px] lg:w-[507px] xl:w-[407px] 2xl:w-[507px] 3xl:w-[470px] 4xl:w-[507px] h-auto xs:h-auto sm:h-[390px] md:h-[400px] lg:h-[510px] xl:h-[545px] 2xl:h-[545px] 3xl:h-[545px] py-[10px] px-4 bg-[#F5F5F5] rounded-2xl hover:bg-[#E0E0E0] hover:shadow-custom_shadow ease-out duration-300 group"
      >
        {/* Card Header */}
        <div>
          <div className="flex flex-row justify-between items-center py-4">
            <h1 className="text-[#41405D] font-poppins font-semibold text-[24px] xs:text-[24px] sm:text-[28px] md:text-[30px] lg:text-[33px] xl:text-[35px] 2xl:text-[40px]">
              {title}
            </h1>

            <div className="flex items-center justify-center w-10 h-10 rounded-full border-[2px] border-solid border-[#083EC5] transition-transform transform group-hover:rotate-[180deg] group-hover:duration-700">
              <GoArrowUpRight className="text-[#083EC5] text-2xl font-bold" />
            </div>
          </div>
          <p className="text-left text-[#667085] group-hover:text-black ease-out duration-150 font-jakarta text-[16px]">
            {description}
          </p>
          {/* Card Image */}
          <div className="pt-1 xs:pt-1 sm:pt-1 md:pt-1 lg:pt-2 xl:pt-8 2xl:pt-8 3xl:pt-8">
            <div
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className="w-[270px] xs:w-[300px] sm:w-[410px] md:w-[440px] lg:w-[475px] xl:w-[380px] 2xl:w-[475px] 3xl:w-[440px] 4xl:w-[475px] h-[210px] xs:h-[280px] sm:h-[260px] md:h-[270px] lg:h-[360px] xl:h-[355px] 2xl:h-[355px] 3xl:h-[355px] object-cover transition-transform ease-out duration-300 transform group-hover:scale-95 rounded-2xl"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
