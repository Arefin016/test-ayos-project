import Banner from "@/components/Banner/Banner";
import DownloadApp from "../../components/DownloadApp/DownloadApp";
import Card from "@/components/Card/Card";
import Container from "@/components/Container/Container";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@/components/Spinner/Spinner";
import apiClient from "@/utils/apiClient";
import { Empty } from "antd";

const OurServices = () => {
  // Banner Data fetching section
  const fetchBannerData = async () => {
    try {
      const response = await apiClient.get("/service-page/banner");
      return response.data;
    } catch (err) {
      console.error("Error fetching card data:", error.message || error);
      throw new Error("Failed to fetch card data");
    }
  };

  const { isLoading: isBannerLoading, data: bannerResponse } = useQuery({
    queryKey: ["bannerData"],
    queryFn: fetchBannerData,
  });

  // Service Data fetching section
  const fetchServiceData = async () => {
    try {
      const response = await apiClient.get("/home-page/categories");
      return response.data;
    } catch (err) {
      console.error("Error fetching card data:", error.message || error);
      throw new Error("Failed to fetch card data");
    }
  };

  const {
    isLoading: isServiceLoading,
    isError: isServiceError,
    data: serviceResponse,
  } = useQuery({
    queryKey: ["serviceData"],
    queryFn: fetchServiceData,
  });

  const serviceCategoryData = async () => {
    try {
      const response = await apiClient.get("/service-page/category-section");
      return response.data;
    } catch (err) {
      console.error("Error fetching card data:", error.message || error);
      throw new Error("Failed to fetch card data");
    }
  };

  const { data: categoryData } = useQuery({
    queryKey: ["category-data"],
    queryFn: serviceCategoryData,
  });

  // console.log(categoryData?.data?.description);

  // Handle services data safely
  const services = serviceResponse?.data || [];

  // Loading state
  if (isBannerLoading || isServiceLoading) return <Spinner />;

  // Error or no data state
  if (isServiceError || !services.length) {
    return (
      <div className="text-center my-36">
        <Empty description="No services available at the moment." />
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>Ayos || Our Services</title>
      </Helmet>
      {/* Banner Section */}
      {bannerResponse?.data ? (
        <Banner
          title={bannerResponse?.data.title}
          subtitle={bannerResponse?.data.description}
          backgroundImage={bannerResponse?.data?.background_image}
          gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.38) 0%, rgba(0, 0, 0, 0.38) 100%)"
          playStore={bannerResponse?.data.button_two_url}
          appStore={bannerResponse?.data.button_one_url}
          playStorePic={bannerResponse?.data.button_one_image}
          appStorePic={bannerResponse?.data.button_two_image}
        />
      ) : (
        <div className="text-center">
          <Empty description="No banner data available." />
        </div>
      )}
      {/* Services Section */}
      <Container width="1561px">
        <div className="mt-16 xl:mt-[93px]">
          <div className="flex flex-col space-y-8 justify-center text-center items-center">
            <h1
              data-aos="fade-up"
              className="text-[#172B4D] font-poppins text-[28px] xl:text-[40px] font-semibold px-3 xl:px-0 max-w-[735px] leading-[132%]"
            >
              {categoryData?.data?.title}
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-[#585858] font-jakarta text-base xl:text-xl text-center max-w-[670px] px-3 xl:px-0"
            >
              {categoryData?.data?.description}
            </p>
          </div>
          {/* Card Section  */}
          <div className="flex lg:flex-wrap lg:flex-row flex-col xs:flex-col sm:flex-col gap-5 pt-8 xs:pt-10 sm:pt-10 md:pt-10 lg:pt-[70px] xl:pt-[107px] 2xl:pt-[107px] 3xl:pt-[107px] justify-center text-center items-center mx-auto">
            {services?.map((card, index) => (
              <Card
                key={index}
                title={card?.title}
                description={card?.description}
                icon={card?.icon}
                image={card?.thumbnail}
              />
            ))}
          </div>
        </div>
      </Container>
      <DownloadApp />
    </div>
  );
};

export default OurServices;
