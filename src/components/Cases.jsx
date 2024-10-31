import Heading from "./Heading";

const Cases = () => {
  return (
    <section id="cases" className="px-[5%] py-16 flex flex-col gap-10">
      <Heading
        label={"Cases"}
        classname={"text-black bg-green"}
        description={
          "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        }
      />
      <div className="rounded-[45px] bg-black px-16 flex items-center justify-between gap-4">
        3 times
      </div>
    </section>
  );
};

export default Cases;
