import { Badge } from "./ui/badge";

const Heading = ({ label, classname, description }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center lg:w-3/5">
      <Badge className={classname}>{label}</Badge>
      <p className="text-sm lg:text-base text-center md:text-start">
        {description}
      </p>
    </div>
  );
};

export default Heading;
