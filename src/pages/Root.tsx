import { Outlet } from 'react-router-dom';
import Rootfooter from '../Components/Rootfooter';
import { useRef, useState } from 'react';
import Slider from '../Components/Slider';
import Navbar from '../Components/Navbar';

const Root = () => {
  const bottomRef = useRef(null);
  const [display, setDisplay] = useState(true);

  const toggleMenu = () => {
    setDisplay(!display);
  };

  const scrollToBottom = async () => {
    setDisplay(!display);

    await new Promise((resolve) => setTimeout(resolve, 200));

    if (bottomRef.current) {
      (bottomRef.current as HTMLElement).scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`w-full relative md:overflow-auto ${
        display ? null : 'h-screen overflow-hidden'
      }`}
    >
      <Navbar toggleMenu={toggleMenu} scrollToBottom={scrollToBottom} />
      <Slider display={display} toggleMenu={toggleMenu} scrollToBottom={scrollToBottom} />
      <div
        className={`w-full md:hidden h-full bg-black z-10  absolute transition-opacity duration-500 ease-in-out ${
          display ? 'opacity-0 hidden' : 'opacity-85'
        }`}
      ></div>

      <Outlet />
      <div>
        <Rootfooter />
      </div>
      <div ref={bottomRef}></div>
    </div>
  );
};

export default Root;
