import Button from './Button';

type propsType = {
  src: string;
  heading: string;
  text: string;
  side: string;
  src1: string;
  display: boolean;
};
const Imgtext = ({ text, heading, src, src1, side, display }: propsType) => {
  return (
    <div className="overflow-hidden w-full flex flex-col items-center justify-center gap-10 relative">
      <img
        src={`${src1}`}
        alt=""
        className={`absolute top-[0] ${
          side === 'left' ? 'left-[-150px]' : 'right-[-150px]'
        }`}
      />
      <img src={`${src}`} alt="" className="rounded-full w-[85%]" />
      <div className="flex flex-col w-full items-center justify-center gap-4">
        <h2
          className="w-[80%] text-[#495567] text-center text-2xl font-bold leading-8 tracking-tight
"
        >
          {heading}
        </h2>
        <p
          className="text-[#939CAA] text-center text-sm font-normal leading-6 w-[85%]
"
        >
          {text}
        </p>
        {display ? <Button text="Learn More" /> : null}
      </div>
    </div>
  );
};

export default Imgtext;
