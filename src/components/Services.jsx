import { cardData } from "@/assets/assets";
import Heading from "./Heading";
import { CircleArrowRight } from "lucide-react";

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

      <div className="grid grid-cols-2 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="rounded-[45px] bg-black cursor-pointer group"
          >
            <div
              className="flex justify-between gap-2 p-12 rounded-[45px] border-2 border-black -translate-y-1 group-hover:-translate-y-2 transition-all duration-200"
              style={{ backgroundColor: card.background }}
            >
              <div className="flex flex-col items-start justify-between">
                <h3
                  className="inline text-lg md:text-xl lg:text-2xl px-1 rounded-md"
                  style={{
                    backgroundColor: card.textBackground,
                  }}
                >
                  {card.title}
                </h3>

                <div className="flex items-center gap-2">
                  <CircleArrowRight
                    className="-rotate-45"
                    color={card.buttonColor}
                    size={30}
                  />
                  <span>Learn More</span>
                </div>
              </div>
              <div>
                <img src={card.image.src} alt={card.image.alt} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
