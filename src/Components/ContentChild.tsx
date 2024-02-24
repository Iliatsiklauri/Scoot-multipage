type propsType = {
  src: string;
  text: string;
  heading: string;
};
const ContentChild = ({ src, text, heading }: propsType) => {
  return (
    <div className="flex items-center flex-col justify-center gap-6 relative">
      <img src={`${src}`} alt="" className="h-14 w-14" />

      <h2
        className="text-[#495567] text-center w-[85%] text-base font-bold leading-7 tracking-tight
"
      >
        {heading}
      </h2>
      <p
        className="text-[#939CAA] text-center w-[85%] text-sm font-normal leading-6
"
      >
        {text}
      </p>
    </div>
  );
};

export default ContentChild;
