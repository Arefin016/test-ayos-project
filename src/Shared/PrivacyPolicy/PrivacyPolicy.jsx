import Spinner from "@/components/Spinner/Spinner";
import apiClient from "@/utils/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Empty } from "antd";
import parse from "html-react-parser";

const PrivacyPolicy = () => {
  const privacyFetchData = async () => {
    try {
      const response = await apiClient.get("/dynamic-pages/privacy-policy");
      return response.data;
    } catch (error) {
      console.error("Error privacyFetchData", error);
      return null;
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["privacyFetchData"],
    queryFn: privacyFetchData,
  });

  if (isLoading) return <Spinner />;

  if (!data || !data?.data) {
    return <Empty />;
  }

  const parsedData =
    typeof data?.data?.page_content === "string"
      ? data?.data?.page_content
      : String(data?.data?.page_content);

  return (
    <section className="text-center mt-12 xl:mt-16 mb-[70px] h-auto">
      <h1 className="text-center text-[28px] xl:text-5xl font-semibold">
        {data?.data?.page_title}
      </h1>
      <div className="dynamic-page-wrapper text-left px-5 xs:px-5 sm:px-5 md:px-5 lg:px-7 xl:px-8 2xl:px-9 3xl:px-[100px] 4xl:px-[200px]">
        {parse(parsedData)}
      </div>
    </section>
  );
};

export default PrivacyPolicy;
