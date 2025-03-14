import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import { shoes, statistics } from "../constants";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";
const Hero = () => {
  const [shoeImg, setShoeImg] = useState(bigShoe1);
  return (
    <section
  id="home"
  className="w-full flex xl:flex-row flex-col justify-center min-h-screen  gap-10 max-container p-2"
>
  {/* Left Column - Text + Button + Statistics */}
  <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
    <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
    
    <h1 className="mt-19 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
      <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 ">
        The New Arrival
      </span>
      <br />
      <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
    </h1>
    
    <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-8 sm:max-w-sm">
      Discover stylish Nike arrivals, quality comfort, and innovation for your next adventure.
    </p>
    
    <Button label="Shop Now" iconUrl={arrowRight} />

    {/* Statistics should be BELOW the button */}
    <div className="flex justify-start items-start flex-wrap w-full mt-10 gap-16">
      {statistics.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
          <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Right Column - Image */}
  <div className="xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-hero bg-center w-full relative flex justify-center items-center">
    <img
      src={shoeImg}
      width={610}
      height={500}
      alt="Nike Shoe"
      className="object-contain relative z-10"
    />
  
  <div className="flex sm:gap-6 gap-4 absolute  -bottom-[5%] sm:left-[10%]">{shoes.map((shoe)=>(
    <div className="" key={shoe}><ShoeCard imgUrl={shoe} changeImage={(shoe)=>{setShoeImg(shoe)}} shoeImg={shoeImg}/></div>
  ))}</div>
  </div>
</section>

  );
};

export default Hero;
