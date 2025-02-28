import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

const Quality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-19 font-palanquin text-4xl capitalize font-bold max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <br />
          <span className="text-coral-red">Quality </span>
          Shoes
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Nike has long been synonymous with high-quality footwear that combines
          cutting-edge technology, superior comfort, and sleek design. Whether
          you're a professional athlete, a fitness enthusiast, or a casual
          sneaker lover, Nike offers a range of shoes that cater to every need.
          In this article, we’ll explore some of the best quality Nike shoes
          that stand out for their durability, comfort, and performance.
        </p>
<div className="mt-11 "><Button label="View Details" /></div>
        
      </div>
      <div className="flex-1 flex justify-center items-center"><img className="object-contain" src={shoe8} alt="" width={570} height={522} /></div>
    </section>
  );
};

export default Quality;
