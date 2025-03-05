import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
const Offer = () => {
  return (
    <section className="flex justify-wrap items-start max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col ">
        <h2 className="mt-19 font-palanquin text-4xl capitalize font-bold max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="text-coral-red"> Special </span> Offer
        </h2>

        <p className="mt-4 lg:max-w-lg info-text ">
          Get ready to upgrade your style and performance with exclusive
          discounts on Nike gear! For a limited time, enjoy up to 50% off on
          selected sneakers, apparel, and accessories. Whether you're hitting
          the gym, the streets, or the field, Nike has the perfect fit for you.
        </p>
        <div className="mt-11 flex flex-wrap gap-5">
          <Button label="Shop Now" iconUrl={arrowRight} />
          <Button label="View Details" backgroundColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray'/>
        </div>
      </div>
    </section>
  );
};

export default Offer;
