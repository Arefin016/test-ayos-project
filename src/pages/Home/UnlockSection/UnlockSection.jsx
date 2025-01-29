import apiClient from "@/utils/apiClient";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const UnlockSection = () => {
  // Banner Data Fetch
  const unlockSectionData = async () => {
    try {
      const response = await apiClient.get("/home-page/video-section");
      return response.data;
    } catch (err) {
      console.error("Error fetching data:", err);
      return null;
    }
  };

  const { data } = useQuery({
    queryKey: ["unlockSectionData"],
    queryFn: unlockSectionData,
  });

  // Initialize state variables
  const [shownService, setshownService] = useState(null);
  const [activeButton, setactiveButton] = useState(null);

  // Update the state once data is fetched
  useEffect(() => {
    if (data?.data?.length > 0) {
      setshownService(data.data[0]);
      setactiveButton(data.data[0].id);
    }
  }, [data]);

  const handleActiveService = (id) => {
    setactiveButton(id);
    const selectedItem = data?.data.find((item) => item.id === id);
    if (selectedItem) {
      setshownService(selectedItem);
    }
  };

  return (
    <section className="mt-5 container">
      <div>
        <h1
          data-aos="fade-up"
          data-aos-delay=" 100"
          className="text-center text-[#172B4D] font-poppins text-3xl lg:text-[40px] font-semibold"
        >
          Unlock the Best Service for <br /> Your Needs!
        </h1>

        <div
          data-aos="fade-up"
          data-aos-delay=" 100"
          className="flex flex-row flex-wrap gap-y-10 gap-x-20 justify-center mt-8"
        >
          {data?.data.map((item) => {
            return (
              <button
                className={`${
                  activeButton === item?.id
                    ? "text-primaryColor font-poppins text-xl bg-[#083EC5] rounded-[13px] py-5 px-[50px] border border-[#083EC5] w-[235px] capitalize"
                    : "text-[#172B4D] text-xl font-poppins rounded-[13px] border border-[#083EC5] py-5 px-[50px] w-[235px] capitalize"
                }`}
                onClick={() => {
                  handleActiveService(item?.id);
                }}
                key={item?.id}
              >
                {item?.btn_title}
              </button>
            );
          })}
        </div>
        {/* This is the content */}
        <section className="flex items-center justify-center pt-9 xl:pt-20">
          <div
            className="relative w-full rounded-x lg:rounded-2xl xl:rounded-[48px] overflow-hidden"
            style={{ paddingTop: "56.25%" }}
          >
            {shownService?.video_url && (
              <video
                className="absolute top-0 left-0 w-full h-full rounded-xl xl:rounded-[48px] lg:rounded-2xl"
                src={shownService?.video_url}
                controls
                title="Promotional Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></video>
            )}
          </div>
        </section>
      </div>
    </section>
  );
};

export default UnlockSection;
