import DownloadApp from "../../../components/DownloadApp/DownloadApp";
import Banner from "../../../components/Banner/Banner";
import ConnectWithBestHome from "../ConnectWithBestHome/ConnectWithBestHome";
import FAQ from "../FAQ/FAQ";
import AyosPlatform from "../AyosPlatform/AyosPlatform";
import CardSection from "../CardSection/CardSection";
import UnlockSection from "../UnlockSection/UnlockSection";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@/components/Spinner/Spinner";
import { Empty } from "antd";
import apiClient from "@/utils/apiClient";

const Home = () => {
  const bannerData = async () => {
    try {
      const response = await apiClient.get("/home-page/banner");
      return response.data;
    } catch (err) {
      console.error("Error fetching data:", err.response?.data || err.message);
      throw new Error(
        err.response?.data?.message || "Failed to fetch banner data"
      );
    }
  };

  const { isLoading, data } = useQuery({
    queryKey: ["Data"],
    queryFn: bannerData,
  });

  if (isLoading) return <Spinner />;

  return (
    <div>
      <Helmet>
        <title>Ayos || Home</title>
      </Helmet>
      {data && data?.data ? (
        <Banner
          title={data?.data?.title}
          subtitle={
            <>
              Connect with trusted professionals for all your home
              needs—cleaning, repairs,
              <br />
              maintenance, and beyond. Post your job today and experience fast,
              reliable service <br /> with a hassle-free process!
            </>
          }
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
      <AyosPlatform />
      <ConnectWithBestHome />
      <CardSection />
      <UnlockSection />
      <FAQ />
      <DownloadApp />
    </div>
  );
};

export default Home;
