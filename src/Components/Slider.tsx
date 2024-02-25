import { Link } from 'react-router-dom';
import Button from './Button';

type propType = {
  display: boolean;
  toggleMenu: () => void;
  scrollToBottom: () => void;
};

const Slider = ({ display, toggleMenu, scrollToBottom }: propType) => {
  return (
    <div
      className={`z-20 w-[70%] bg-[#333A44;] h-screen absolute transition-all duration-500 ease-in-out flex flex-col gap-80 md:hidden ${
        display ? 'left-[-70%]' : 'left-0'
      }`}
    >
      <div className="flex flex-col mt-14 ml-6 gap-6">
        <Link onClick={toggleMenu} to="about">
          <h2
            className="text-[#E5ECF4] font-mono text-base font-bold leading-6
"
          >
            About
          </h2>
        </Link>
        <Link onClick={toggleMenu} to="careers">
          <h2
            className="text-[#E5ECF4] font-mono text-base font-bold leading-6
"
          >
            Careers
          </h2>
        </Link>
        <Link onClick={toggleMenu} to="locations">
          <h2
            className="text-[#E5ECF4] font-mono text-base font-bold leading-6
"
          >
            Locations
          </h2>
        </Link>
      </div>
      <div
        className="ml-6"
        onClick={() => {
          scrollToBottom();
        }}
      >
        <Button text="Get Scootin" scrollToBottom={scrollToBottom} />
      </div>
    </div>
  );
};

export default Slider;
