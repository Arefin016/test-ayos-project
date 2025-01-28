import Container from "../Container/Container";
import apiClient from "@/utils/apiClient";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";
import { Empty } from "antd";

const DownloadApp = () => {
  // This is the download app data fetching section
  const downloadApp = async () => {
    try {
      const response = await apiClient.get("home-page/app-download");
      return response.data;
    } catch (err) {
      console.error("Error fetching data:", err);
      return null;
    }
  };

  const { isLoading, data } = useQuery({
    queryKey: ["downloadAppData"],
    queryFn: downloadApp,
  });

  if (isLoading) return <Spinner />;

  if (!data || !data?.data) {
    return (
      <div className="my-36">
        <Empty />
      </div>
    );
  }

  return (
    <Container width="1560px">
      <section className="bg-[#EEF3FF] rounded-[32px] mb-[93px] mt-5 xs:mt-5 sm:mt-5 md:mt-5 lg:mt-5 xl:mt-5 2xl:mt-10 3xl:mt-20 mx-3 xs:mx-5 sm:mx-5 md:mx-5 lg:mx-5 xl:mx-5 2xl:mx-5 3xl:mx-5 4xl:mx-0 px-1 sm:px-3 md:px-3 lg:px-3 xl:px-0 2xl:px-0 3xl:px-0 4xl:px-0 py-4 xs:py-4 sm:py-4 md:py-4 lg:py-4 xl:py-4 2xl:py-0 3xl:py-0">
        <div className="flex flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row 2xl:flex-row 3xl:flex-row gap-5 xs:gap-5 sm:gap-5 md:gap-5 lg:gap-5 xl:gap-10 2xl:gap-5 3xl: items-center">
          <div className="mx-4 xs:px-4 sm:mx-4 md:px-4 lg:mx-2 xl:ml-1 2xl:ml-0 3xl:ml-[51px]">
            <h2
              data-aos="fade-up"
              className="text-secondaryButton text-[20px] xs:text-[24px] sm:text-[25px] md:text-[28px] lg:text-[30px] xl:text-[40px] 2xl:text-[40px] 3xl:text-[56px] font-poppins w-[280px] xs:w-[300px] sm:w-[430px] md:w-[550px] lg:w-[650px] xl:w-[400px] 2xl:w-[650px] 3xl:w-[650px] font-semibold pt-2 px-2 xs:px-2 sm:px-2 md:px-2 lg:px-2 xl:px-0 2xl:px-0 3xl:0"
            >
              {data?.data.title}
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay=" 100"
              className="text-[#585858] text-[16px] xs:text-[16px] sm:text-[16px] md:text-lg lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl font-poppins font-normal mt-6 w-[290px] xs:w-[300px] sm:w-[430px] md:w-full lg:w-[720px] xl:w-[400px] 2xl:w-[720px] 3xl:w-[720px] px-2"
            >
              {data?.data?.description}
            </p>
            {/* This is the button section */}
            <div
              data-aos="fade-up"
              data-aos-delay=" 200"
              className="flex flex-row gap-2 text-center justify-center xs:justify-center sm:justify-center md:justify-center lg:justify-center xl:justify-center 2xl:justify-normal 3xl:justify-normal xs:gap-4 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-4 3xl:gap-4 mt-[50px] pb-5 xs:pb-5 sm:pb-5 md:pb-5 lg:pb-5 xl:pb-0 2xl:pb-0 3xl:pb-0"
            >
              <Link to={data?.data?.button_two_url}>
                <img
                  className="w-[180px] xs:w-[208px] sm:w-[208px] md:w-[208px] lg:w-[208px] xl:w-[208px] 2xl:w-[208px] 3xl:w-[208px] h-[65px] xs:h-[65px] sm:h-[65px] md:h-[65px] lg:h-[65px] xl:h-[65px] 2xl:h-[65px] 3xl:h-[65px]"
                  src={data?.data?.button_one_image}
                  alt="Play Store"
                />
              </Link>
              <Link to={data?.data?.button_one_url}>
                <img
                  className="w-[180px] xs:w-[208px] sm:w-[208px] md:w-[208px] lg:w-[208px] xl:w-[208px] 2xl:w-[208px] 3xl:w-[208px] h-[65px] xs:h-[65px] sm:h-[65px] md:h-[65px] lg:h-[65px] xl:h-[65px] 2xl:h-[65px] 3xl:h-[65px]"
                  src={data?.data?.button_two_image}
                  alt="App Store"
                />
              </Link>
            </div>
          </div>
          {/* This is the image section */}
          <div data-aos="zoom-in ">
            <img
              className="w-[300px] xs:w-[340px] sm:w-[460px] md:w-[560px] lg:w-[740px] xl:w-[752px] 2xl:w-[752px] 3xl:w-[752px] 4xl:w-[752px] h-[300px] xs:h-[340px] sm:h-[460px] md:h-[520px] lg:h-[740px] xl:h-[800px] 2xl:h-[800px] 3xl:h-[800px] 4xl:h-[800px] object-contain"
              src={data?.data?.image}
              alt="downloadApp"
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default DownloadApp;
