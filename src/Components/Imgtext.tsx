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
    <div className="overflow-hidden w-full flex flex-col items-center justify-center xl:justify-around gap-10 relative xl:flex-row xl:w-screen xl:items-start ">
      <img
        src={`${src1}`}
        alt=""
        className={`absolute top-[0] ${
          side === 'left' ? 'left-[-150px]' : 'right-[-150px] md:top-60 md:right'
        }`}
      />
      <img src={`${src}`} alt="" className="rounded-full w-[85%] md:w-[60%] xl:w-[30%]" />
      <div
        className={`flex flex-col w-full items-center justify-center gap-4 md:gap-10 xl:order-[-1] xl:w-[445px]  xl:items-start ${
          side === 'left' ? 'xl:order-[1]' : null
        }`}
      >
        <h2
          className="w-[80%] text-[#495567] text-center text-2xl font-bold leading-8 tracking-tight md:text-4xl md:w-[60%]  xl:text-left
"
        >
          {heading}
        </h2>
        <p
          className="text-[#939CAA] text-center text-sm font-normal xl:text-left leading-6 w-[85%]
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
