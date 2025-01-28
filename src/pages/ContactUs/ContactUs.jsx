import { useForm } from "react-hook-form";
import contactUs from "../../assets/images/contactUsPic.png";
import { Helmet } from "react-helmet-async";
import apiClient from "@/utils/apiClient";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ContactUs = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("I'm working");

    console.log(data);
    try {
      const response = await apiClient.post("/contact-page/send-message", data);
      console.log(response.data, "I'm response data");

      Swal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      reset();

      return response.data;
    } catch (err) {
      console.error("Error posting data:", err);

      // Check if error response exists and provide a fallback message
      const errorMessage =
        err.response?.data?.message ||
        "Something went wrong. Please try again.";

      // Show error toast with fallback message if response message is not available
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: errorMessage,
      });

      return null;
    }
  };

  // get method
  const contactUsFetchData = async () => {
    try {
      const response = await apiClient.get("/ayosph/system-info");
      return response.data;
    } catch (error) {
      console.error("Error fetching footer data", err);
      return null;
    }
  };

  const { data: contactUsData } = useQuery({
    queryKey: ["footerData"],
    queryFn: contactUsFetchData,
  });

  // console.log(contactUsData?.data);

  return (
    <section className="">
      <Helmet>
        <title>Ayos || Contact Us</title>
      </Helmet>
      <div className="flex flex-col lg:flex-row xl:pl-[70px] gap-10 xs:gap-10 sm:gap-8 md:gap-12 xl:gap-12 2xl:gap-[100px] 2xl:pl-[100px] 3xl:gap-[409px] items-center bg-[#F5F6F7] pl-0 3xl:pl-[181px] px-4 lg:pl-[30px] 2xl:justify-between 3xl:justify-normal mt-8">
        {/* This is the content */}
        <div className="text-center lg:text-left">
          <h1
            data-aos="fade-up"
            className="text-[#172B4D] font-inter text-[28px] xs:text-[28px] sm:text-[30px] md:text-[35px] lg:text-[45.82px] xl:text-[45.82px] 2xl:text-[45.82px] 3xl:text-[45.82px] mt-2 lg:mt-0 font-medium"
          >
            {contactUsData?.data.system_name}
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-[#5D6467] xs:text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl lg:ml-0 ml-[15px] font-roboto mt-2 sm:mt-3 md:mt-3 lg:mt-[18px] xl:mt-[18px] 2xl:mt-[18px] 3xl:mt-[18px]"
          >
            {contactUsData?.data?.description}
          </p>
        </div>
        {/* This is the content */}
        <div>
          <img
            data-aos="zoom-out"
            data-aos-delay="100"
            src={contactUs}
            alt="Contact Us"
            className="w-[639px] h-[245px] object-cover"
          />
        </div>
      </div>

      {/* This is the contact us */}
      <div className="flex flex-col lg:flex-col xl:flex-row 2xl:flex-row justify-center gap-[60px] lg:gap-[67px] mt-[30px] xs:mt-[40px] sm:mt-[50px] md:mt-[50px] lg:mt-[40px] xl:mt-[40px] 2xl:mt-[40px] 3xl:mt-[73px] px-4 lg:pl-[35px]">
        {/* This is the content section */}
        <div className="w-full lg:w-[592px] text-center lg:text-left">
          <h1
            data-aos="fade-up"
            className="text-[#172B4D] font-poppins text-[30px] xs:text-[28px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] 3xl:text-[62px] font-semibold mb-6"
          >
            Contact us
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-[#646A69] font-poppins font-normal text-[16px] xs:text-[18px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] lg:text-base"
          >
            We are here to help you make a first move to greener choice.
          </p>
          {/* This is the social login */}
          <div className="mt-[35px]">
            {/* Email */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex gap-2 items-center justify-center lg:justify-start"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4 4H16C16.825 4 17.5 4.675 17.5 5.5V14.5C17.5 15.325 16.825 16 16 16H4C3.175 16 2.5 15.325 2.5 14.5V5.5C2.5 4.675 3.175 4 4 4Z"
                  stroke="#022C22"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5 5.5L10 10.75L2.5 5.5"
                  stroke="#022C22"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>{contactUsData?.data.email}</p>
            </div>

            {/* Phone */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex gap-2 mt-6 items-center justify-center lg:justify-start"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.5001 13.6901V15.9401C17.5009 16.1489 17.4581 16.3557 17.3745 16.5471C17.2908 16.7385 17.168 16.9103 17.0141 17.0515C16.8602 17.1927 16.6785 17.3002 16.4806 17.3671C16.2828 17.434 16.0731 17.4589 15.8651 17.4401C13.5572 17.1893 11.3403 16.4007 9.39257 15.1376C7.58044 13.9861 6.04407 12.4497 4.89257 10.6376C3.62506 8.68098 2.83625 6.45332 2.59007 4.13507C2.57133 3.92767 2.59598 3.71864 2.66245 3.52129C2.72892 3.32394 2.83575 3.14259 2.97615 2.98879C3.11654 2.83499 3.28743 2.7121 3.47792 2.62796C3.6684 2.54382 3.87433 2.50027 4.08257 2.50007H6.33257C6.69655 2.49649 7.04942 2.62538 7.32539 2.86272C7.60137 3.10006 7.78163 3.42966 7.83257 3.79007C7.92754 4.51012 8.10366 5.21712 8.35757 5.89757C8.45848 6.16602 8.48032 6.45776 8.4205 6.73823C8.36069 7.01871 8.22172 7.27616 8.02007 7.48007L7.06757 8.43257C8.13524 10.3102 9.68991 11.8649 11.5676 12.9326L12.5201 11.9801C12.724 11.7784 12.9814 11.6395 13.2619 11.5796C13.5424 11.5198 13.8341 11.5417 14.1026 11.6426C14.783 11.8965 15.49 12.0726 16.2101 12.1676C16.5744 12.219 16.9071 12.4025 17.145 12.6832C17.3828 12.9639 17.5092 13.3223 17.5001 13.6901Z"
                  stroke="#022C22"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-[#1D1F1E] text-[16px]">
                {contactUsData?.data?.contact_number}
              </p>
            </div>
          </div>
        </div>

        {/* This is the input section */}
        <div className="w-full lg:w-auto">
          <div className="mb-[94px]">
            <h1
              data-aos="fade-up"
              className="text-[#172B4D] font-inter text-[30px] xs:text-[30px] sm:text-[30px] md:text-[31.625px] lg:text-[31.625px] font-medium text-center lg:text-left"
            >
              Send your message
            </h1>
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col mt-3 xs:mt-7 sm:mt-6 md:mt-6 lg:mt-6 xl:mt-10 2xl:mt-10 3xl:mt-10 space-y-3 xs:space-y-4 sm:space-y-6 md:space-y-6 lg:space-y-6 xl:space-y-6 2xl:space-y-6 3xl:space-y-6">
                {/* Your Name Field */}
                <label
                  data-aos="fade-up"
                  className="flex gap-1 items-center text-[#152934] font-roboto font-medium"
                >
                  Your Name{" "}
                  <span className="text-[#E83330] font-roboto font-medium">
                    *
                  </span>
                </label>
                <input
                  data-aos="fade-up"
                  type="name"
                  name="name"
                  {...register("name", { required: true })}
                  className="border border-[#D0D3D6] rounded-[37px] py-5 px-4  h-12 xs:h-12 sm:h-12 md:h-12 lg:h-16 w-full xs:w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-[642px] 3xl:w-[642px] text-[black] font-poppins text-[16px]"
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <span className="text-red-600 font-semibold">
                    Name is required
                  </span>
                )}

                {/* Your Email Address Field */}
                <label
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="flex gap-1 items-center text-[#152934] font-roboto font-medium mb-4"
                >
                  Email Address{" "}
                  <span className="text-[#E83330] font-roboto font-medium">
                    *
                  </span>
                </label>
                <input
                  data-aos="fade-up"
                  data-aos-delay="100"
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  className="border border-[#D0D3D6] rounded-[37px] py-5 px-4 h-12 xs:h-12 sm:h-12 md:h-12 lg:h-16 w-full xs:w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-[642px] 3xl:w-[642px] text-[black] font-poppins text-[16px]"
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <span className="text-red-600 font-semibold">
                    Email is required
                  </span>
                )}

                {/* Mobile Number Field */}
                <label
                  data-aos="fade-up"
                  className="flex gap-1 items-center text-[#152934] font-roboto font-medium mb-4"
                >
                  Mobile Number
                </label>
                <input
                  type="number"
                  name="phone"
                  {...register("phone", { required: true })}
                  className="border border-[#D0D3D6] rounded-[37px] py-5 px-4 h-12 xs:h-12 sm:h-12 md:h-12 lg:h-16 w-full xs:w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-[642px] 3xl:w-[642px] text-[black] font-poppins text-[16px]"
                  placeholder="01XXXXXXXXX"
                />
                {errors.number && (
                  <span className="text-red-600 font-semibold">
                    Number is required
                  </span>
                )}

                {/* Message Field */}
                <label
                  data-aos="fade-up"
                  className="flex gap-1 items-center text-[#152934] font-roboto font-medium mb-4"
                >
                  Message{" "}
                  <span className="text-[#E83330] font-roboto font-medium">
                    *
                  </span>
                </label>
                <textarea
                  data-aos="fade-up"
                  name="message"
                  className="border border-[#D0D3D6] rounded-[37px] py-5 px-4 w-full xs:w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-[642px] 3xl:w-[642px] h-[90px] xs:h-[90px] sm:h-[90px] md:h-[90px] lg:h-[118px] xl:h-[118px] 2xl:h-[118px] 3xl:h-[118px] text-[black] font-poppins text-[16px]"
                  placeholder="Write your message"
                  {...register("message")}
                />
              </div>
              <input
                data-aos="fade-up"
                className="mt-6 border-[2px] border-solid border-transparent bg-[#083EC5] rounded-[37px] px-[40px] lg:px-[108px] h-[40px] xs:h-[40px] sm:h-[45px] md:h-[45px] lg:h-[57px] xl:h-[57px] 2xl:h-[57px] 3xl:h-[57px] text-primaryColor font-poppins text-[16px] cursor-pointer hover:bg-transparent hover:text-button hover:border-button ease-in-out duration-150"
                type="submit"
                value="Send Message"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
