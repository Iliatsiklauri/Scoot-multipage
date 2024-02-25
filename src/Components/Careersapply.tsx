import Button from './Button';

type propType = {
  title: string;
  text: string;
};

const Box = ({ title, text }: propType) => {
  return (
    <div className=" bg-[#F2F5F9] w-full h-[190px] flex flex-col items-center justify-center gap-4">
      <div>
        <h2
          className="text-[#495567] text-center text-base font-bold leading-6 tracking-tighter
        "
        >
          {title}
        </h2>
        <h2
          className="text-[#495567] text-center text-sm font-normal leading-6
        "
        >
          {text}
        </h2>
      </div>
      <Button text="Apply" />
    </div>
  );
};

const Careersapply = () => {
  return (
    <div className="flex flex-col w-[85%] gap-4 mb-20">
      <Box text="Jakarta, Indonesia" title="General Manager" />
      <Box text="Yokohama, Japan" title="UI/UX Designer" />
      <Box text="New York, United States" title="Blog Content Copywriter" />
      <Box text="New York, United States" title="Graphic Designer" />
      <Box text="Jakarta, Indonesia" title="Fleet Supervisor" />
      <Box text="London, United Kingdom" title="UX Analyst" />
    </div>
  );
};

export default Careersapply;
