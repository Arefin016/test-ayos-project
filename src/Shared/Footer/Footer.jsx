import { Link, NavLink } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import apiClient from "@/utils/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Empty } from "antd";
import Spinner from "@/components/Spinner/Spinner";

const Footer = () => {
  const footerFetchData = async () => {
    try {
      const response = await apiClient.get("/ayosph/system-info");
      return response.data;
    } catch (error) {
      console.error("Error fetching footer data", err);
      return null;
    }
  };

  const { data: footerData, isLoading: footerFetchLoading } = useQuery({
    queryKey: ["footerData"],
    queryFn: footerFetchData,
  });

  // social fetch data
  const socialFetchData = async () => {
    try {
      const response = await apiClient.get("/contact-page/social-link");
      return response.data;
    } catch (error) {
      console.error("Error fetching footer data", err);
      return null;
    }
  };

  const { data: socialData, isLoading: socialLoading } = useQuery({
    queryKey: ["socialData"],
    queryFn: socialFetchData,
  });

  // dynamic page data fetch

  const dynamicPageFetchData = async () => {
    try {
      const response = await apiClient.get("/dynamic-pages");
      return response.data;
    } catch (error) {
      console.error("Error fetching dynamic page data", err);
      return null;
    }
  };

  const { data } = useQuery({
    queryKey: ["dynamicPageData"],
    queryFn: dynamicPageFetchData,
  });

  if (socialLoading || footerFetchLoading) return <Spinner />;

  if (!socialData || !socialData?.data) {
    return (
      <div className="my-36">
        <Empty />
      </div>
    );
  }

  return (
    <footer className="mt-16 xl:my-[38px] container">
      <div className="flex lg:flex-row flex-col justify-between font-poppins items-center px-5 xs:px-5 sm:px-5 md:px-5 lg:px-5 xl:px-5 2xl:px-5 3xl:px-0">
        {/* This is the logo Section */}
        <Link to={"/"}>
          <img
            className="w-[100px] xl:w-[143px] 2xl:xl:w-[143px] 3xl:xl:w-[143px] h-8 2xl:h-10 mb-5 xs:mb-5 sm:mb-5 md:mb-5 lg:mb-0 xl:mb-0 2xl:mb-0"
            src={footerData?.data.logo}
            alt=""
          />
        </Link>
        {/* This is the Navigation Section */}
        <nav>
          <ul className="flex lg:flex-row flex-col space-y-2 lg:space-y-0 lg:space-x-7 xl:space-x-[55px] 2xl:space-x-[55px] items-center">
            <li>
              <NavLink to="/" className={"navClass hover:text-[#083EC5]"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={"navClass hover:text-[#083EC5]"}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={"navClass hover:text-[#083EC5]"}
              >
                Our Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={"navClass hover:text-[#083EC5]"}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* This is the social icons section */}
        <div className="flex flex-row gap-5 xs:gap-5 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-[34px] 2xl:gap-[34px] mt-6 xs:mt-6 sm:mt-6 md:mt-6 lg:mt-0 xl:mt-0 2xl:mt-0 3xl:mt-0">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300 h-[19px] w-[19px]"
          >
            <FaTwitter />
          </a>
          <a
            href={socialData?.data[1]?.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors duration-300 h-[19px] w-[19px]"
          >
            <img
              src={
                socialData?.data[1]?.image || "path/to/placeholder-image.png"
              }
              alt="Social icon"
            />
          </a>
          <a
            href={socialData?.data[0]?.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors duration-300 h-[19px] w-[19px]"
          >
            <img
              src={
                socialData?.data[0]?.image || "path/to/placeholder-image.png"
              }
              alt="Social icon"
            />
          </a>
        </div>
      </div>
      {/* This is the border section */}

      <div className="bg-[#201F22] h-[1px] opacity-[0.31] mt-8 flex mx-auto w-[80%] xs:w-[80%] sm:w-[80%] md:w-[80%] lg:w-[90%] xl:w-[90%] 2xl:w-[90%] 3xl:w-full"></div>

      {/* This is the copyright section */}
      <div className="flex lg:flex-row flex-col justify-between navbarBottom font-inter mt-6 mb-3 px-5 xs:px-5 sm:px-5 md:px-5 lg:px-5 xl:px-5 2xl:px-5 3xl:px-0">
        <h1 className="font-inter text-center">
          {footerData?.data.copyright_text}
        </h1>
        <div className="flex lg:flex-row flex-col text-center xs:text-center sm:text-center md:text-center gap-0 xs:gap-0 sm:gap-0 md:gap-0 lg:gap-10 mt-4 lg:mt-0">
          {data?.data.map((link, index) => (
            <Link key={index} to={link?.page_slug}>
              <p className="text-[#52525B] font-inter text-[14px] hover:text-blue-700">
                {link?.page_title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
