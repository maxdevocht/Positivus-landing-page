import { Fragment, useRef } from "react";
import logoipsum1 from "../assets/logoipsum1.svg";
import logoipsum2 from "../assets/logoipsum2.svg";
import logoipsum3 from "../assets/logoipsum3.svg";
import logoipsum4 from "../assets/logoipsum4.svg";
import logoipsum5 from "../assets/logoipsum5.svg";
import logoipsum6 from "../assets/logoipsum6.svg";
import logoipsum7 from "../assets/logoipsum7.svg";
import logoipsum8 from "../assets/logoipsum8.svg";
import logoipsum9 from "../assets/logoipsum9.svg";

// Importing icons as a string array
const icons = [
  logoipsum1,
  logoipsum2,
  logoipsum3,
  logoipsum4,
  logoipsum5,
  logoipsum6,
  logoipsum7,
  logoipsum8,
  logoipsum9,
];

const Marquee = () => {
  const tapeRef = useRef();

  const handleMouseEnter = () => {
    if (tapeRef.current) {
      tapeRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (tapeRef.current) {
      tapeRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <section id="tape" className="pb-16 overflow-x-clip">
      <div className="bg-gradient-to-r from-orange to-orange -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div
            ref={tapeRef}
            className="flex flex-none gap-20 lg:gap-28 py-3 animate-move-left [animation-duration:30s]"
          >
            {/* Creating a double display of icons */}
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {icons.map((icon, index) => (
                  <div
                    className="items-center inline-flex"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    key={index}
                  >
                    <img src={icon} alt="icon" className="w-120 h-120" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
