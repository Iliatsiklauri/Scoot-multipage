import { Link } from 'react-router-dom';

const Rootfooter = () => {
  return (
    <footer className="text-white flex flex-col items-center w-full justify-center">
      <div className="w-full h-[320px] gap-10 flex flex-col items-center justify-center bg-[#495567] md:relative md:overflow-hidden xl:flex-row xl:justify-around">
        <h2
          className="w-[85%] text-center text-2xl font-bold leading-8 tracking-tight
md:text-4xl md:w-[60%] xl:w-[30%] xl:text-left"
        >
          Sign up and Scoot off today
        </h2>
        <div className="flex gap-4 ">
          <img className="w-32" src="assets\icons\app-store.svg" alt="" />
          <img className="w-32" src="assets\icons\google-play.svg" alt="" />
          <img
            src="assets\patterns\semi-circles.svg"
            alt=""
            className="hidden md:block md:absolute bottom-0 left-0 h-[50%] xl:right-0 xl:left-auto"
          />
        </div>
      </div>
      <div className="bg-[#333A44] w-full h-[435px] flex flex-col items-center justify-around md:h-24 md:flex-row xl:">
        <img src="assets\whitelogo.svg" alt="" className="fill-white" />
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 xl:mr-80">
          <Link to="about">
            <p className="text-[#939CAA] font-mono text-lg font-bold leading-6">About</p>
          </Link>
          <Link to="locations">
            <p className="text-[#939CAA] font-mono text-lg font-bold leading-6">
              Location
            </p>
          </Link>
          <Link to="Careers">
            <p className="text-[#939CAA] font-mono text-lg font-bold leading-6">
              Careers
            </p>
          </Link>
        </div>
        <div className="flex justify-between items-center w-[120px]">
          <img src="assets\icons\facebook.svg" alt="" />
          <img src="assets\icons\twitter.svg" alt="" />
          <img src="assets\icons\instagram.svg" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Rootfooter;
