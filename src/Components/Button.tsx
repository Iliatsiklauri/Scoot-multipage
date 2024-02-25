type propsType = {
  text: string;
};
const Button = ({ text }: propsType) => {
  return (
    <div className="w-[180px] h-[53px] items-center justify-center flex bg-[#FCB72B] cursor-pointer hover:bg-white hover:border-2 text-white hover:border-[#FCB72B] hover:text-[#FCB72B]">
      <p className="text-center  text-md font-md leading-6 font-mono">{text}</p>
    </div>
  );
};

export default Button;
