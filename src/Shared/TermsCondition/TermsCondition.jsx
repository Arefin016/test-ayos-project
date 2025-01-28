import Spinner from "@/components/Spinner/Spinner";
import apiClient from "@/utils/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Empty } from "antd";
import parse from "html-react-parser";

const TermsCondition = () => {
  const termFetchData = async () => {
    try {
      const response = await apiClient.get("/dynamic-pages/terms-conditions");
      return response.data;
    } catch (error) {
      console.error("Error privacyFetchData", error);
      return null;
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["privacyData"],
    queryFn: termFetchData,
  });

  if (isLoading) return <Spinner />;

  if (!data || !data?.data) {
    return <Empty />;
  }

  console.log(data?.data);

  const parsedData =
    typeof data?.data?.page_content === "string"
      ? data?.data?.page_content
      : String(data?.data?.page_content);

  return (
    <section className="text-center mt-8 xs:mt-8 sm:mt-8 md:mt-8 lg:mt-8 xl:mt-16 2xl:mt-16 3xl:mt-16 mb-[70px] h-auto">
      <h1 className="text-center text-3xl xs:text-3xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl 2xl:text-5xl 3xl:text-5xl font-semibold">
        {data?.data?.page_title}
      </h1>
      <div className="dynamic-page-wrapper text-left px-3 xs:px-3 sm:px-3 md:px-3 lg:px-3 xl:px-3 2xl:px-3 3xl:px-[200px]">
        {parse(parsedData)}
      </div>
    </section>
  );
};

export default TermsCondition;
