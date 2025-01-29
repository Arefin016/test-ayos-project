const Customer = ({ content }) => {
  return (
    <section>
      <div className="grid gap-14 xl:gap-0 xl:grid-cols-2 items-center">
        {/* This is the content */}
        <div className="flex flex-col space-y-10">
          {content?.customer?.content.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <h1 className="text-[#172B4D] font-poppins text-lg xl:text-xl 2xl:text-[32px] font-semibold mb-[18px]">
                {item?.title}
              </h1>
              <p className="text-[#6F767E] font-poppins text-base 2xl:text-[18px] font-normal">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
        {/* This is the image Content */}
        <div data-aos="zoom-in" className="object-cover">
          <img src={content?.customer?.thumbnail} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Customer;
