import {
  Accordion as FaqAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Spinner/Spinner";
import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_SITE_URL,
});

const FaqAccordionCom = () => {
  const fetchFAQData = async () => {
    const response = await apiClient.get("/home-page/faqs");
    return response.data;
  };

  const { isLoading, data } = useQuery({
    queryKey: ["faqData"],
    queryFn: fetchFAQData,
  });

  if (isLoading) return <Spinner />;

  if (!data || !data) {
    return <div>No data found</div>;
  }

  return (
    <FaqAccordion type="single" collapsible className="w-full space-y-6">
      {data?.data.map((item, index) => (
        <AccordionItem
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          className="px-6 py-2 border border-[#EAEAEA] rounded-[8px]"
          value={`item-${index + 1}`}
        >
          <AccordionTrigger className="font-jakarta text-[16px] xs:text-[16px] sm:text-[16px] md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl font-medium text-[#101828] py-3">
            {item?.question}
          </AccordionTrigger>
          <AccordionContent className="text-[14px] xs:text-[14px] sm:text-[14px] md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl font-jakarta font-medium text-[#667085]">
            {item?.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </FaqAccordion>
  );
};

export default FaqAccordionCom;
