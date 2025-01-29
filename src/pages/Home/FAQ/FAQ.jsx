import Container from "@/components/Container/Container";
import FaqAccordionCom from "@/components/FaqAccordionCom/FaqAccordionCom";
import FaqPic from "../../../assets/images/faqDesign.png";

const FAQ = () => {
  return (
    <section className="relative">
      <div className="text-center py-5 xs:py-5 sm:py-5 md:py-5 lg:py-5 xl:py-5 2xl:py-20 3xl:py-20 px-5 xs:px-5 sm:px-5 md:px-5 lg:px-5 xl:px-5 2xl:px-5 3xl:px-0">
        <h1
          data-aos="fade-up"
          className="text-[#101828] text-[28px] xl:text-4xl font-jakarta font-semibold"
        >
          Frequently asked questions
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay=" 100"
          className="text-[#667085] mt-5 text-sm xs:text-sm sm:text-[16px] md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl"
        >
          Everything you need to know about the product and billing.
        </p>
        {/* This is the accordian */}
        <Container width="1336px">
          <section className="mt-16 ">
            <FaqAccordionCom />
          </section>
          <div className="absolute top-[203px] left-0">
            <img src={FaqPic} alt="" />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default FAQ;
