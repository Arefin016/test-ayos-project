import Spinner from "@/components/Spinner/Spinner";
import apiClient from "@/utils/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Empty } from "antd";
import parse from "html-react-parser";

const TermsCondition = () => {
  const termFetchData = async () => {
    try {
      const response = await apiClient.get("/dynamic-pages/terms-conditions");

      if (!response.data) {
        throw new Error("No data received from server");
      }

      return response.data;
    } catch (error) {
      console.error(
        "Error fetching data:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data?.message || "Failed to fetch platform data"
      );
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["termsData"],
    queryFn: termFetchData,
  });

  if (isLoading) return <Spinner />;

  if (!data || !data?.data) {
    return <Empty />;
  }

  console.log(data);

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

export default TermsCondition;
