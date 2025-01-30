const Contractor = ({ content }) => {
  return (
    <section className="container">
      <div className="grid xl:gap-0 xl:grid-cols-2 items-center max-w-[1465px]">
        {/* This is the image Content */}
        <div data-aos="zoom-in" className="max-w-[823px] object-cover z-[999]">
          <img src={content?.contractor?.thumbnail} alt="" />
        </div>
        {/* This is the content */}
        <div className="flex flex-col space-y-10">
          {content?.contractor?.content.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <h1 className="text-[#172B4D] max-w-[555px] font-poppins text-lg xl:text-xl 2xl:text-[32px] font-semibold mb-[18px]">
                {item?.title}
              </h1>
              <p className="text-[#6F767E] font-poppins text-base 2xl:text-[18px] font-normal max-w-[501px]">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contractor;
