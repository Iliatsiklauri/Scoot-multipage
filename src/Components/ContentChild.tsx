type propsType = {
  src: string;
  text: string;
  heading: string;
};
const ContentChild = ({ src, text, heading }: propsType) => {
  return (
    <div className="flex items-center flex-col justify-center gap-6 relative md:flex-row xl:flex-col xl:items-start">
      <img src={`${src}`} alt="" className="h-14 w-14 xl:ml-6" />
      <div className="flex items-center justify-center flex-col gap-4 md:w-[400px] md:items-center xl:w-[350px]">
        <h2
          className="text-[#495567] text-center md:text-left w-[85%] text-base font-bold leading-7 tracking-tight  xl:text-lg
        "
        >
          {heading}
        </h2>
        <p
          className="text-[#939CAA] xl:text-md text-center md:text-left w-[85%] text-sm font-normal leading-6
        "
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default ContentChild;
