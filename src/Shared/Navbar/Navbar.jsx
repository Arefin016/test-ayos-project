import { Link, NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import apiClient from "@/utils/apiClient";
import { RxHamburgerMenu } from "react-icons/rx";

import { Drawer } from "antd";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Fetch navbar data
  const navbarFetchData = async () => {
    try {
      const response = await apiClient.get("/ayosph/system-info");
      return response.data;
    } catch (error) {
      console.error("Error fetching navbar data", error);
      return null;
    }
  };

  const { data: navbarData } = useQuery({
    queryKey: ["navbarData"],
    queryFn: navbarFetchData,
  });

  // This is the responsive drawer
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full container mt-5 xl:mt-9">
      <div className="flex flex-row justify-between font-poppins items-center navbar">
        {/* Logo Section */}
        <Link to={"/"}>
          <img
            className="w-[100px] md:w-[143px] md:h-10"
            src={navbarData?.data?.logo}
            alt="Logo"
          />
        </Link>

        {/* Navigation Section */}
        <nav>
          <ul className="hidden xl:flex space-x-10">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "navClassActive" : "navClass hover:text-[#083EC5]"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "navClassActive" : "navClass hover:text-[#083EC5]"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "navClassActive" : "navClass hover:text-[#083EC5]"
                }
              >
                Our Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "navClassActive" : "navClass hover:text-[#083EC5]"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Sign-up button */}
        <div className="flex md:gap-3 items-center">
          <Link className="hidden xl:inline-block" to="/signUp">
            <button className="md:text-xl text-sm border-[2px] border-solid border-transparent bg-button text-[#FFF] px-3 py-1 md:px-[35px] md:py-[11px] rounded-[26px] hover:bg-transparent hover:border-button hover:text-button ease-in-out duration-150">
              Get to app
            </button>
          </Link>

          <RxHamburgerMenu
            size={24}
            className="xl:hidden cursor-pointer"
            onClick={showDrawer}
          />

          {/* Drawer (Mobile Only) */}
          <Drawer
            title="Ayos"
            onClose={onClose}
            open={open}
            className="md:hidden"
          >
            <ul className="space-y-4 flex flex-col items-center justify-center mt-14">
              <li data-aos="fade-in" data-aos-delay="100">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "navClassActive"
                      : "navClass hover:text-[#083EC5]"
                  }
                  onClick={onClose}
                >
                  Home
                </NavLink>
              </li>
              <li data-aos="fade-in" data-aos-delay="200">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "navClassActive"
                      : "navClass hover:text-[#083EC5]"
                  }
                  onClick={onClose}
                >
                  About Us
                </NavLink>
              </li>
              <li data-aos="fade-in" data-aos-delay="300">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? "navClassActive"
                      : "navClass hover:text-[#083EC5]"
                  }
                  onClick={onClose}
                >
                  Our Services
                </NavLink>
              </li>
              <li data-aos="fade-in" data-aos-delay="400">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "navClassActive"
                      : "navClass hover:text-[#083EC5]"
                  }
                  onClick={onClose}
                >
                  Contact Us
                </NavLink>
              </li>
              {/* Get to App button */}
              <li data-aos="fade-in" data-aos-delay="500">
                <Link
                  to="/signUp"
                  data-aos="fade-in"
                  data-aos-delay="300"
                  className="xl:flex 2xl:flex 3xl:flex"
                >
                  <button
                    onClick={onClose}
                    className="text-base border-[2px] border-solid border-transparent bg-button text-[#FFF] px-6 py-2 rounded-[26px] hover:bg-transparent hover:border-button hover:text-button ease-in-out duration-150"
                  >
                    Get to app
                  </button>
                </Link>
              </li>
            </ul>
          </Drawer>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
