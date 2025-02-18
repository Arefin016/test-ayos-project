import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
// ..
AOS.init();

const Banner = ({
  title,
  subtitle,
  backgroundImage,
  gradient,
  playStore,
  appStore,
  playStorePic,
  appStorePic,
}) => {
  return (
    <section className="flex container items-center justify-center pt-12">
      <div
        className="w-full rounded-2xl lg:rounded-3xl xl:rounded-[48px] h-auto"
        style={{
          backgroundImage: `${gradient}, url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="mt-3 my-6 2xl:my-[136px] 3xl:mt-[136px] ml-5 xs:ml-5 sm:ml-5 md:ml-5 lg:ml-7 xl:ml-[62px] 2xl:ml-[62px] 3xl:ml-[62px]">
          <div className="space-y-5 xs:space-y-5 sm:space-y-6 2xl:space-y-[56px] 3xl:space-y-[56px]">
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-primaryColor font-poppins text-[28px] xs:text-[30px] sm:text-[35px] md:text-[35px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] 3xl:text-[70px] font-semibold max-w-[1033px] px-2 xl:px-0"
            >
              {title}
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-primaryColor font-poppins text-base xl:text-lg max-w-[750px] px-2 xl:px-0"
            >
              {subtitle}
            </p>
            {/* Button Section */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col xs:flex-col sm:flex-col md:flex-row lg:flex-row gap-2 xl:gap-6 2xl:gap-8 3xl:gap-8 text-center px-2 xl:px-0"
            >
              <Link to={playStore}>
                <img
                  src={playStorePic}
                  alt="Play Store"
                  className="w-[150px] xs:w-[150px] sm:w-[150px] md:w-[150px] lg:w-[200px] xl:w-[210px] 2xl:w-[239px] 3xl:w-[239px] h-[45px] xs:h-[45px] sm:h-[45px] md:h-[50px] lg:h-[50px] xl:h-[60px] 2xl:h-[80px] 3xl:h-[80px]"
                />
              </Link>
              <Link to={appStore}>
                <img
                  src={appStorePic}
                  alt="App Store"
                  className="w-[150px] xs:w-[150px] sm:w-[150px] md:w-[150px] lg:w-[200px] xl:w-[210px] 2xl:w-[239px] 3xl:w-[239px] h-[45px] xs:h-[45px] sm:h-[45px] md:h-[50px] lg:h-[50px] xl:h-[60px] 2xl:h-[80px] 3xl:h-[80px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
