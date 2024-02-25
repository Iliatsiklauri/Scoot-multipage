import Careersbox from '../Components/Careersbox';
import Careersdiv from '../Components/Careersdiv';
import Topcomp from '../Components/Topcomp';

const Locations = () => {
  return (
    <div className="flex flex-col items-center justify-center relative overflow-hidden ">
      <Topcomp text="Locations" />
      <div className="flex flex-col  items-center justify-center w-[85%] gap-16 m-20 xl:relative">
        <img src="assets\images\world-map-mobile.png" alt="" className="xl:hidden" />
        <div
          className="xl:flex items-center justify-center
         hidden absolute w-[189px] h-16 top-0 left-[400px] bg-[#FCB72B]"
        >
          <p>London</p>
        </div>
        <div
          className="xl:flex items-center justify-center
         hidden absolute w-[189px] h-16 top-[70px] left-[170px] bg-[#FCB72B]"
        >
          <p>New York</p>
        </div>
        <div
          className="xl:flex items-center justify-center
         hidden absolute w-[189px] h-16 top-20 right-20 bg-[#FCB72B]"
        >
          <p>Yokohama</p>
        </div>
        <div
          className="xl:flex items-center justify-center
         hidden absolute w-[189px] h-16 top-60 right-40 bg-[#FCB72B]"
        >
          <p>Jakarta</p>
        </div>
        <img
          src="assets\images\world-map-desktop.png"
          alt=""
          className="hidden xl:block"
        />
        <div className="md:hidden w-full">
          <Careersdiv />
        </div>
        <Careersbox />
      </div>
    </div>
  );
};

export default Locations;
