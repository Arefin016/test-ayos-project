import Card from "@/components/Card/Card";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@/components/Spinner/Spinner";
import apiClient from "@/utils/apiClient";
import { Empty } from "antd";

const CardSection = () => {
  const cardData = async () => {
    try {
      const { data } = await apiClient.get("/categories");
      return data;
    } catch (error) {
      console.error("Error fetching card data:", error.message || error);
      throw new Error("Failed to fetch card data");
    }
  };

  const { isLoading, data } = useQuery({
    queryKey: ["cardData"],
    queryFn: cardData,
  });

  if (isLoading) return <Spinner />;

  if (!data || !data?.data) {
    return <Empty />;
  }

  return (
    <section className="pb-16 xl:pb-[100px] px-2 xs:px-2 sm:px-2 md:px-2 lg:px-2 xl:px-2 2xl:px-2 3xl:px-0">
      <div>
        {/* This is the title section start */}
        <div className="flex flex-col text-center items-center space-y-8">
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-[#172B4D] font-poppins text-[28px] xl:text-[40px] font-semibold w-[300px] xs:w-[340px] sm:w-[460px] md:w-[550px] lg:w-[735px] xl:w-[735px] 2xl:w-[735px] 3xl:w-[735px] text-center"
          >
            Unlock the Best Contractors for Your Needs!
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-[#585858] font-jakarta text-base xl:text-xl max-w-[680px]"
          >
            Take control of your wellness journey with personalized AI insights.
            Track your progress, stay consistent
          </p>
          {/* This is the title section end */}

          {/* Card Section */}
          <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-3 gap-5 pt-6 xs:pt-6 sm:pt-6 md:pt-6 lg:pt-6 xl:pt-6 2xl:pt-20 3xl:pt-[107px] justify-center text-center">
            {data?.data.slice(0, 6).map((card, index) => (
              <Card
                key={index}
                title={card?.title}
                description={card?.description}
                icon={card.icon}
                image={card?.thumbnail}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10 xl:mt-[60px]">
          <Link to={"/services"} data-aos="fade-up">
            <button
              className="
  text-primaryColor border-[2px] border-solid border-transparent 
  text-[14px] xs:text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] 
  font-medium bg-[#083EC5] px-10 xs:px-12 sm:px-14 md:px-20 lg:px-24 
  rounded-xl hover:border-button hover:bg-transparent hover:text-button 
  py-3 xs:py-3 sm:py-4 md:py-4 lg:py-4 
  w-full h-[50px] xs:h-[50px] sm:h-[54px] md:h-[56px] lg:h-[56px]"
            >
              All view
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
