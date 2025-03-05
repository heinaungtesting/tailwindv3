// eslint-disable-next-line react/prop-types
const Button = ({ label, iconUrl, backgroundColor, textColor, borderColor,width }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg shadow-xl rounded-full border-slate-gray leading-none${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor} `
          : " bg-coral-red rounded-full text-white border-coral-red"
      }`}
    >
      {label}{" "}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
