import Banner from "@/components/Banner/Banner";
import Container from "@/components/Container/Container";
import { Helmet } from "react-helmet-async";
import apiClient from "@/utils/apiClient";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@/components/Spinner/Spinner";
import { Empty } from "antd";
import parse from "html-react-parser";
import DownloadApp from "@/components/DownloadApp/DownloadApp";

const AboutUs = () => {
  // This is the about us banner section fetch data
  const aboutUsData = async () => {
    try {
      const response = await apiClient.get("/about-page/banner");
      return response.data;
    } catch (error) {
      console.error("Error fetching card data:", error.message || error);
      throw new Error("Failed to fetch card data");
    }
  };

  //This is the tanstack query section
  const { isLoading, data } = useQuery({
    queryKey: ["aboutUsBannerData"],
    queryFn: aboutUsData,
  });

  console.log(data.data.background_image);

  // about us paragraph data fatching
  const paragraphData = async () => {
    try {
      const response = await apiClient.get("/about-page/about-us-content");
      return response.data;
    } catch (error) {
      console.error("Error fetching card data:", error.message || error);
      throw new Error("Failed to fetch card data");
    }
  };

  const { isLoading: paragraphLoading, data: paraData } = useQuery({
    queryKey: ["paragraphData"],
    queryFn: paragraphData,
  });

  // This is the need to understand data fetching
  const needToUnderstandData = async () => {
    try {
      const response = await apiClient.get("/about-page/need-to-understand");
      return response.data;
    } catch (error) {
      console.error("Error fetching card data:", error.message || error);
      throw new Error("Failed to fetch card data");
    }
  };

  const { data: needToUnderData } = useQuery({
    queryKey: ["needToUnder"],
    queryFn: needToUnderstandData,
  });

  // This is the transform section start
  const transformData = async () => {
    try {
      const response = await apiClient.get("/about-page/transform");
      return response.data;
    } catch (error) {
      console.error("Error fetching card data:", error.message || error);
      throw new Error("Failed to fetch card data");
    }
  };

  const { data: transData } = useQuery({
    queryKey: ["transformData"],
    queryFn: transformData,
  });

  // This is the react html parser
  const parsedData =
    typeof needToUnderData?.data?.description === "string"
      ? needToUnderData?.data?.description
      : String(needToUnderData?.data?.description);

  if (isLoading || paragraphLoading) return <Spinner />;

  if (!paraData || !paraData?.data) {
    return (
      <div>
        <Empty />
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>Ayos || About Us</title>
      </Helmet>
      {data && data?.data ? (
        <Banner
          title={data?.data?.title}
          subtitle={data?.data?.description}
          backgroundImage={data?.data?.background_image}
          gradient="linear-gradient(90deg, rgba(9, 25, 64, 0.80) -0.85%, rgba(23, 64, 166, 0.00) 99.73%)"
          playStore={data?.data?.button_two_url}
          appStore={data?.data?.button_one_url}
          playStorePic={data?.data?.button_one_image}
          appStorePic={data?.data?.button_two_image}
        />
      ) : (
        <Empty />
      )}
      {/* This is the first section start */}
      <section className="my-9 xs:my-9 sm:my-9 md:my-10 lg:my-10 xl:my-[115px] 2xl:my-[115px] 3xl:">
        <div className="px-3 xs:px-3 sm:px-3 md:px-3 lg:px-3 xl:px-6 2xl:px-[80px] 3xl:px-[100px] 4xl:px-[183px]">
          {/* First Div */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-center space-y-7 md:space-y-[35px]"
          >
            <h1 className="title">{paraData?.data[0].title}</h1>
            <p className="paragraph">{paraData?.data[0].description}</p>
          </div>
          {/* Second Div */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-center space-y-7 md:space-y-[35px] mt-8 xs:mt-8 sm:mt-8 md:mt-8 lg:mt-[88px] xl:mt-[88px] 2xl:mt-[88px] 3xl:mt-[88px]"
          >
            <h1 className="title">{paraData?.data[1].title}</h1>
            <p className="paragraph">{paraData?.data[1].description}</p>
          </div>
          {/* Third Div */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-center space-y-7 md:space-y-[35px] mt-8 xs:mt-8 sm:mt-8 md:mt-8 lg:mt-[88px] xl:mt-[88px] 2xl:mt-[88px] 3xl:mt-[88px]"
          >
            <h1 className="title">{paraData?.data[2].title}</h1>
            <p className="paragraph">{paraData?.data[2].description}</p>
          </div>
        </div>
      </section>
      {/* This is the first section end */}
      {/* This is the second section start*/}
      <section className="bg-[#EEF3FF]  px-4 xs:px-4 sm:px-4 md:px-5 lg:px-6 xl:px-[79px] 2xl:px-[79px] 3xl:px-[79px]">
        <div className="flex flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-col 3xl:flex-row gap-4 xs:gap-4 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-10 2xl:gap-10 3xl:gap-10 items-center">
          {/* This is the image section */}
          <div data-aos="zoom-in">
            <img
              className="w-full justify-center xl:max-w-[719px] max-h-[875px] object-contain"
              src={transData?.data?.transform?.image}
              alt=""
            />
          </div>
          {/* This is the content section */}
          <div>
            <div className="space-y-[31px] mb-6 xl:mb-12">
              <h1
                data-aos="fade-up"
                className="text-[#172B4D] font-poppins text-[28px] px-2 xl:px-0 xl:text-[40px] font-semibold"
              >
                {transData?.data?.transform?.title}
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-[#172B4D] font-poppins text-base xl:text-xl font-medium px-2 xl:px-0 xl:max-w-[902px]"
              >
                {transData?.data?.transform?.description}
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="100" className="gap-[81px]">
              <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-2 pb-7 xl:pb-5 gap-0 lg:gap-8 xl:gap-0">
                {transData?.data?.content?.slice(0, 6).map((item, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={100 * (index + 1)}
                    className="w-full lg:w-[350px] xl:w-full"
                  >
                    <h1 className="aboutTitle mt-[27px] w-[300px] xs:w-[390px] sm:w-[390px] md:w-[390px] lg:w-[390px] xl:w-[390px] 2xl:w-[390px] 3xl:w-[390px]">
                      {item?.title}
                    </h1>
                    <p className="aboutParagraph mt-4 w-full md:w-[80%] lg:w-[390px]">
                      {item?.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* This is the second section end*/}

      {/* This is the third section start */}
      <Container width="1560px">
        <section className="mt-10 xs:mt-10 sm:mt-10 md:mt-14 lg:mt-[80px] xl:mt-[100px] 2xl:mt-[120px] 3xl:mt-[120px]">
          <div className="text-center space-y-[35px] px-3 xs:px-3 sm:px-3 md:px-3 lg:px-3 xl:px-5 2xl:px-[50px] 3xl:px-[80px] 4xl:px-0">
            <h1 data-aos="fade-up" className="title">
              {needToUnderData?.data?.title}
            </h1>
            <div className="user-descreption-wrapper  max-w-[1560px] text-left mb-5">
              {parse(parsedData)}
            </div>
          </div>
        </section>
      </Container>
      {/* This is the third section end */}
      <DownloadApp />
    </div>
  );
};

export default AboutUs;
