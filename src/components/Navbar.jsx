import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { useState } from "react";
import { Button } from "./ui/button";

const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: "1.5rem",
    transition: { delay: 0.3, duration: 0.2 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false); // Close the mobile menu
    navigate(); // Navigate to the path
  };

  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-white lg:min-h-[4.5rem] lg:px-[5%] shadow-md">
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-[4.5rem] lg:min-h-full lg:px-0">
          <NavLink to="/">
            <img
              src="./src/assets/logo-dark.svg"
              alt="Positivus logo"
              width={150}
              height={150}
            />
          </NavLink>

          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black rounded-full"
              animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
              variants={topLineVariants}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black rounded-full"
              animate={isMobileMenuOpen ? "open" : "closed"}
              variants={middleLineVariants}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black rounded-full"
              animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
              variants={bottomLineVariants}
            />
          </button>
        </div>
        <motion.div
          variants={{
            open: {
              height: "var(--height-open, 100dvh)",
            },
            close: {
              height: "var(--height-closed, 0)",
            },
          }}
          initial="close"
          exit="close"
          animate={isMobileMenuOpen ? "open" : "close"}
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] lg:flex gap-6 lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          <div className="first:pt-4 lg:first:pt-0">
            <NavLink
              to="/"
              className="block py-3 lg:py-2 text-base hover:text-black/50"
              onClick={() => handleNavLinkClick("/")}
            >
              About us
            </NavLink>
          </div>
          <div className="first:pt-4 lg:first:pt-0">
            <NavLink
              to="/"
              className="block py-3 lg:py-2 text-base hover:text-black/50"
              onClick={() => handleNavLinkClick("/services")}
            >
              Services
            </NavLink>
          </div>
          <div className="first:pt-4 lg:first:pt-0">
            <NavLink
              to="/"
              className="block py-3 lg:py-2 text-base hover:text-black/50"
              onClick={() => handleNavLinkClick("/cases")}
            >
              Cases
            </NavLink>
          </div>
          <div className="first:pt-4 lg:first:pt-0">
            <NavLink
              to="/"
              className="block py-3 lg:py-2 text-base hover:text-black/50"
              onClick={() => handleNavLinkClick("/pricing")}
            >
              Pricing
            </NavLink>
          </div>
          <div className="first:pt-4 lg:first:pt-0">
            <NavLink
              to="/"
              className="block py-3 lg:py-2 text-base hover:text-black/50"
              onClick={() => handleNavLinkClick("/blog")}
            >
              Blog
            </NavLink>
          </div>
          <div className="first:pt-4 lg:first:pt-0 py-3 lg:py-2">
            <Button variant="outline">Request a quote</Button>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};
export default Navbar;
