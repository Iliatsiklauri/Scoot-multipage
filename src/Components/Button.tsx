type propsType = {
  text: string;
};
const Button = ({ text }: propsType) => {
  return (
    <div className="w-[180px] h-[53px] items-center justify-center flex bg-[#FCB72B]">
      <p className="text-center text-white text-lg font-md leading-6 font-mono">{text}</p>
    </div>
  );
};

export default Button;
