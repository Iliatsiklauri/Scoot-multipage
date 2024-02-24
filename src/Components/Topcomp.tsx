const Topcomp = ({ text }: { text: string }) => {
  return (
    <div className="topcomp">
      <p
        className="text-white text-center text-3xl font-mono font-semibold leading-10 tracking-tighter
"
      >
        {text}
      </p>
    </div>
  );
};

export default Topcomp;
