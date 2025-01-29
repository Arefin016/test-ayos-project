import bucketPic from "../../../assets/images/bucket.png";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@/components/Spinner/Spinner";
import { Empty } from "antd";
import apiClient from "@/utils/apiClient";

const ConnectWithBestHome = () => {
  const connectWithBestHome = async () => {
    try {
      const response = await apiClient.get("home-page/feature");
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", err);
      return null;
    }
  };

  const { isLoading, data } = useQuery({
    queryKey: ["connectWithHome"],
    queryFn: connectWithBestHome,
  });

  // console.log(data?.data);
  if (isLoading) return <Spinner />;

  if (!data || !data?.data) {
    return <Empty />;
  }

  return (
    <section className="bg-[#FAFAFA] py-10 mt-28 mb-20 xl:px-20">
      <div className="container flex flex-col xl:flex-row items-center gap-16 xl:gap-24 justify-center">
        <div data-aos="zoom-in">
          <img
            className="h-auto w-full xs:max-w-[70%] sm:max-:w-[60%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[411px] 2xl:max-w-[411px] 3xl:max-w-[411px] object-cover mx-auto"
            src={data?.data.image}
            alt=""
          />
        </div>

        {/*  */}
        {/* This is the second div  */}
        <div className="flex flex-col relative">
          <h2
            data-aos="fade-up"
            className="text-[#172B4D] mb-[60px] text-2xl md:text-3xl lg:text-4xl font-semibold font-poppins w-auto 3xl:max-w-[902px]"
          >
            {data?.data.title}
          </h2>
          <div className="flex flex-col">
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="mb-8 text-[#172B4D] text-xl lg:text-2xl font-medium max-w-[770px]"
            >
              {data?.data?.sub_title}
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-[#6F767E] text-[18px] max-w-[770px]"
            >
              With Ayos, discovering trusted home improvement professionals is
              effortless. We <br /> seamlessly connect homeowners and landlords
              with thoroughly vetted contractors <br /> for cleaning, repairs,
              and maintenance. Experience dependable service, transparent <br />
              communication, and budget-friendly solutions—all with upfront
              pricing and a hassle- <br />
              free process designed to meet your needs.
            </p>
          </div>
          {/* This is the button section */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-col xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row gap-8 mt-5 xl:mt-[60px]"
          >
            <Link to={data?.data?.button_two_url}>
              <img
                className="w-52 mx-auto sm:w-[50%] md:w-auto lg:w-auto xl:w-auto 2xl:w-auto 3xl:w-auto" // Makes image responsive based on screen size
                src={data?.data?.button_one_image}
                alt="Button 1"
              />
            </Link>
            <Link to={data?.data?.button_one_url}>
              <img
                className="w-52 mx-auto sm:w-[50%] md:w-auto lg:w-auto xl:w-auto 2xl:w-auto 3xl:w-auto" // Makes image responsive based on screen size
                src={data?.data?.button_two_image}
                alt="Button 2"
              />
            </Link>
          </div>

          {/* This is the bucket section */}
          <div className="absolute top-[398px] right-[-245px] hidden 3xl:block">
            <img
              className="max-w-[200px] xs:max-w-[150px] sm:max-w-[175px] md:max-w-[200px] lg:max-w-[250px] xl:max-w-[300px] 2xl:max-w-[300px] 3xl:max-w-[300px]"
              src={bucketPic}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithBestHome;
