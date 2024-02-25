import Careersbox from '../Components/Careersbox';
import Careersdiv from '../Components/Careersdiv';
import Topcomp from '../Components/Topcomp';

const Locations = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Topcomp text="Locations" />
      <div className="flex flex-col items-center justify-center w-[85%] gap-16 m-20">
        <img src="public\assets\images\world-map-mobile.png" alt="" />
        <Careersdiv />
        <Careersbox />
      </div>
    </div>
  );
};

export default Locations;
