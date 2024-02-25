const Rootfooter = () => {
  return (
    <footer className="text-white flex flex-col items-center w-full justify-center">
      <div className="w-full h-[320px] gap-10 flex flex-col items-center justify-center bg-[#495567]">
        <h2
          className="w-[85%] text-center text-2xl font-bold leading-8 tracking-tight
"
        >
          Sign up and Scoot off today
        </h2>
        <div className="flex gap-4">
          <img className="w-32" src="public\assets\icons\app-store.svg" alt="" />
          <img className="w-32" src="public\assets\icons\google-play.svg" alt="" />
        </div>
      </div>
      <div className="bg-[#333A44] w-full h-[435px] flex flex-col items-center justify-around">
        <img src="public\assets\whitelogo.svg" alt="" className="fill-white" />
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-[#939CAA] font-mono text-lg font-bold leading-6">About</p>
          <p className="text-[#939CAA] font-mono text-lg font-bold leading-6">Location</p>
          <p className="text-[#939CAA] font-mono text-lg font-bold leading-6">Careers</p>
        </div>
        <div className="flex justify-between items-center w-[120px]">
          <img src="public\assets\icons\facebook.svg" alt="" />
          <img src="public\assets\icons\twitter.svg" alt="" />
          <img src="public\assets\icons\instagram.svg" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Rootfooter;
