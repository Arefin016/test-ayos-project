import { Link, NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/utils/apiClient";
import { FaBars } from "react-icons/fa6";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Navbar = () => {

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



  return (
    <section className="w-full container mt-5">
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
            <li data-aos="fade-in" data-aos-delay="100">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "navClassActive"
                    : "navClass hover:text-[#083EC5]"
                }
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
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Sign-up button */}
        <div className="flex md:gap-3 items-center">
          <Link className="hidden xl:inline-block"
            to="/signUp"
            data-aos="fade-in"
            data-aos-delay="300"
          >
            <button className="md:text-xl text-sm border-[2px] border-solid border-transparent bg-button text-[#FFF] px-3 py-1 md:px-[35px] md:py-[11px] rounded-[26px] hover:bg-transparent hover:border-button hover:text-button ease-in-out duration-150">
              Get to app
            </button>
          </Link>

          {/* Mobile Menu */}
          <Menubar className="xl:hidden border-none p-0">
            <MenubarMenu>
              <MenubarTrigger className="w-full h-full px-2">
                <FaBars className="text-[25px] md:text-4xl" />
              </MenubarTrigger>
              <MenubarContent className="mt-3 p-5 font-semibold space-y-2">
                <MenubarItem>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "navClassActive text-base md:text-lg"
                        : "navClass text-base md:text-lg hover:text-[#083EC5]"
                    }
                  >
                    Home
                  </NavLink>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "navClassActive text-base md:text-lg"
                        : "navClass text-base md:text-lg hover:text-[#083EC5]"
                    }
                  >
                    About Us
                  </NavLink>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      isActive
                        ? "navClassActive text-base md:text-lg"
                        : "navClass text-base md:text-lg hover:text-[#083EC5]"
                    }
                  >
                    Our Services
                  </NavLink>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "navClassActive text-base md:text-lg"
                        : "navClass text-base md:text-lg hover:text-[#083EC5]"
                    }
                  >
                    Contact Us
                  </NavLink>
                </MenubarItem>
                <MenubarItem>
                  <Link className="w-full block"
                    to="/signUp"
                  >
                    <button className="md:text-xl text-sm border-[2px] border-solid border-transparent bg-button text-[#FFF] px-5 py-1 md:px-[35px] md:py-[11px] rounded-[26px] hover:bg-transparent hover:border-button hover:text-button ease-in-out duration-150">
                      Get to app
                    </button>
                  </Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
