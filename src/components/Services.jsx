import { cardData } from "@/assets/assets";
import Heading from "./Heading";
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="px-[5%] py-16 flex flex-col gap-10">
      <Heading
        label={"Services"}
        classname={"bg-green text-black"}
        description={
          "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        }
      />

      <div className="grid lg:grid-cols-2 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="rounded-[45px] bg-black cursor-pointer group"
          >
            <div
              className="flex min-h-80 justify-between gap-2 p-12 rounded-[45px] border-2 border-black -translate-y-2 group-hover:-translate-y-4 transition-all duration-200"
              style={{ backgroundColor: card.background }}
            >
              <div className="flex flex-col items-start justify-between gap-10">
                <h3
                  className="inline text-lg md:text-2xl px-1 rounded-md"
                  style={{
                    backgroundColor: card.textBackground,
                  }}
                >
                  {card.title}
                </h3>

                <div className="flex items-center gap-4">
                  <div
                    className="p-2 rounded-full"
                    style={{ backgroundColor: card.buttonBackgroundColor }}
                  >
                    <ArrowRight
                      className="-rotate-45 group-hover:rotate-0 transition-all duration-200"
                      color={card.buttonColor}
                      size={30}
                    />
                  </div>
                  <span style={{ color: card.p }}>Learn More</span>
                </div>
              </div>
              <div>
                <img
                  src={card.image.src}
                  alt={card.image.alt}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
