// eslint-disable-next-line react/prop-types
const ShoeCard = ({ imgUrl, changeImage, shoeImg }) => {
  const handleClick = () => {
    if (shoeImg !== imgUrl.bigShoe) {
      changeImage(imgUrl.bigShoe);
    }
  };
  return (
    <div
      className={`border-2  rounded-xl ${
        shoeImg === imgUrl.bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:h-40 sm:w-40 rounded-xl max-sm:p-4">
       
        <img
          src={imgUrl.thumbnail}
          alt=""
          width={127}
          height={103}
          className="object-contain "
        />
      </div>
    </div>
  );
};

export default ShoeCard;
