type propsType = {
  toggleMenu: () => void;
};

const Navbar = ({ toggleMenu }: propsType) => {
  return (
    <nav className="w-full h-[64px] relative flex items-center justify-center">
      <img
        src="assets\icons\hamburger.svg"
        alt=""
        className="absolute left-8 top-6 cursor-pointer"
        onClick={toggleMenu}
      />
      <img src="public\assets\logo.svg" alt="" className="w-[75px] h-5" />
    </nav>
  );
};

export default Navbar;
