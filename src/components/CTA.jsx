import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="px-[5%] py-16">
      <div className="rounded-[45px] bg-gray px-16 flex items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start gap-8 w-full py-16 md:py-0 md:w-1/2">
          <div className="flex flex-col gap-2 lg:gap-4 items-center md:items-start">
            <h3 className="text-lg md:text-xl lg:text-2xl">
              Let&apos;s make things happen
            </h3>
            <p className="text-sm lg:text-base text-center md:text-start">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
          </div>
          <Button>Get your free proposal</Button>
        </div>
        <div className="-my-10 hidden md:block">
          <img
            src="./src/assets/cta-img.svg"
            alt="CTA image"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
