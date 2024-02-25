import { Link } from 'react-router-dom';

type propsType = {
  toggleMenu: () => void;
  scrollToBottom?: () => void;
};

const Navbar = ({ toggleMenu, scrollToBottom }: propsType) => {
  return (
    <nav className="w-full h-[64px] md:h-[96px] xl:h-[80px] relative flex items-center justify-center md:justify-around">
      <img src="assets\logo.svg" alt="" className="w-[75px] h-5" />
      <img
        src="assets\icons\hamburger.svg"
        alt=""
        className="absolute left-8 top-6 cursor-pointer md:hidden"
        onClick={toggleMenu}
      />
      <div className="hidden h-[25px] md:flex gap-8 xl:mr-[500px]">
        <Link to="about">
          <h2 className="hover:text-[#FCB72B]">About</h2>
        </Link>
        <Link to="locations">
          <h2 className="hover:text-[#FCB72B]">Locations</h2>
        </Link>
        <Link to="Careers">
          <h2 className="hover:text-[#FCB72B]">Careers</h2>
        </Link>
      </div>
      <div className="hidden md:block" onClick={scrollToBottom}>
        <div className="w-[180px] h-[53px] items-center justify-center flex bg-[#FCB72B] cursor-pointer hover:border-[#FCB72B] text-white hover:border-2 hover:text-[#FCB72B] hover:bg-white">
          <p className="text-center  text-md font-md leading-6 font-mono">Get Scootin</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
