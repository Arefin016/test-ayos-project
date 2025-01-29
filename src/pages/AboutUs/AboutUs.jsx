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
      console.error("Error fetching data:", error);
      return null;
    }
  };

  //

  const { isLoading, data } = useQuery({
    queryKey: ["aboutUsBannerData"],
    queryFn: aboutUsData,
  });

  // about us paragraph data fatching
  const paragraphData = async () => {
    try {
      const response = await apiClient.get("/about-page/about-us-content");
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", err);
      return null;
    }
  };

  const { isLoading: paragraphLoading, data: paraData } = useQuery({
    queryKey: ["paragraphData"],
    queryFn: paragraphData,
  });

  // console.log(paraData?.data[0]);

  const needToUnderstandData = async () => {
    try {
      const response = await apiClient.get("/about-page/need-to-understand");
      return response.data;
    } catch (error) {
      console.error("Erro fetching data:", err);
      return null;
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
      console.error("Error fething data:", err);
      return null;
    }
  };

  const { data: transData } = useQuery({
    queryKey: ["transformData"],
    queryFn: transformData,
  });

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
          backgroundImage="https://i.postimg.cc/05X80Z13/image.png"
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
            className="text-center space-y-[35px]"
          >
            <h1 className="title">{paraData?.data[0].title}</h1>
            <p className="paragraph">{paraData?.data[0].description}</p>
          </div>
          {/* Second Div */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-center space-y-[35px] mt-8 xs:mt-8 sm:mt-8 md:mt-8 lg:mt-[88px] xl:mt-[88px] 2xl:mt-[88px] 3xl:mt-[88px]"
          >
            <h1 className="title">{paraData?.data[1].title}</h1>
            <p className="paragraph">{paraData?.data[1].description}</p>
          </div>
          {/* Third Div */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-center space-y-[35px] mt-8 xs:mt-8 sm:mt-8 md:mt-8 lg:mt-[88px] xl:mt-[88px] 2xl:mt-[88px] 3xl:mt-[88px]"
          >
            <h1 className="title">{paraData?.data[2].title}</h1>
            <p className="paragraph">{paraData?.data[2].description}</p>
          </div>
        </div>
      </section>
      {/* This is the first section end */}
      {/* This is the second section start*/}
      <section className="bg-[#EEF3FF] px-0 xs:px-0 sm:px-0 md:px-0 lg:px-0 xl:px-[79px] 2xl:px-[79px] 3xl:px-[79px]">
        <div className="flex flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-col 3xl:flex-row gap-4 xs:gap-4 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-10 2xl:gap-10 3xl:gap-10 items-center">
          {/* This is the image section */}
          <div data-aos="zoom-in">
            <img
              className="w-[300px] xs:w-[340px] sm:w-[460px] md:w-[560px] lg:w-[719px] xl:w-[719px] 2xl:w-[719px] 3xl:w-[719px] h-[300px] xs:h-[340px] sm:h-[460px] md:h-[560px] lg:h-[875px] xl:h-[875px] 2xl:h-[875px] 3xl:h-[875px] object-contain"
              src={transData?.data?.transform?.image}
              alt=""
            />
          </div>
          {/* This is the content section */}
          <div>
            <div className="space-y-[31px] mb-12 px-5 xs:px-5 sm:px-5 md:px-5 lg:px-5 xl:px-5 2xl:px-0 3xl:px-0">
              <h1
                data-aos="fade-up"
                className="text-[#172B4D] font-poppins text-[28px] xs:text-[28px] sm:text-[30px] md:text-[30px] lg:text-[30px] xl:text-[40px] 2xl:text-[40px] 3xl:text-[40px] font-semibold"
              >
                {transData?.data?.transform?.title}
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-[#172B4D] font-poppins text-xl font-medium w-[300px] xs:w-[340px] sm:w-[460px] md:w-[560px] lg:w-[760px] xl:w-[902px] 2xl:w-[902px] 3xl:w-[902px]"
              >
                {transData?.data?.transform?.description}
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="100" className="gap-[81px]">
              <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-2">
                {transData?.data?.content?.slice(0, 6).map((item, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={100 * (index + 1)}
                    className="w-full xs:w-[400px] sm:w-[400px] md:w-[400px] lg:w-[400px] xl:w-[400px] 2xl:w-[400px] 3xl:w-[400px] px-5 xs:px-5 sm:px-5 md:px-5 lg:px-0 xl:px-5 2xl:px-0 3xl:px-0"
                  >
                    <h1 className="aboutTitle mt-[27px] w-[300px] xs:w-[340px] sm:w-[340px] md:w-[340px] lg:w-[340px] xl:w-[340px] 2xl:w-[340px] 3xl:w-[340px]">
                      {item?.title}
                    </h1>
                    <p className="aboutParagraph mt-4 w-[300px] xs:w-[340px] sm:w-[340px] md:w-[340px] lg:w-[340px] xl:w-[340px] 2xl:w-[340px] 3xl:w-[340px]">
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
