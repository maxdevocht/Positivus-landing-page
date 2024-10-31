import { Button } from "./ui/button";

const Header = () => {
  return (
    <section id="header" className="flex h-svh min-h-svh flex-col mt-[4.5rem]">
      <div className="px-[5%] py-16 w-full flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2 flex flex-col items-start justify-center gap-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl">
            Navigating the digital landscape for success
          </h1>
          <h4 className="text-base md:text-lg lg:text-xl">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </h4>
          <Button>Book a consultant</Button>
        </div>

        <div className="lg:w-1/2">
          <img src="./src/assets/header-img.svg" alt="header image" />
        </div>
      </div>
    </section>
  );
};

export default Header;
