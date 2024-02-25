const Topcomp = ({ text }: { text: string }) => {
  return (
    <div className="topcomp">
      <p
        className="text-white text-center text-4xl font-mono font-semibold leading-10 tracking-tighter md:left-[20%] md:absolute
"
      >
        {text}
      </p>
      <img
        src="assets\patterns\white-circles.svg"
        alt=""
        className="hidden md:block  md:absolute right-[-40px]"
      />
    </div>
  );
};

export default Topcomp;
