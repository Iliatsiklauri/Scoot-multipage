import Aboutimg from '../Components/Aboutimg';
import Accordionabout from '../Components/Accordionabout';
import Imgtext from '../Components/Imgtext';
import Topcomp from '../Components/Topcomp';

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-20 overflow-hidden relative">
      <Topcomp text="About" />
      <Imgtext
        display={false}
        heading="Mobility for the digital era"
        text="Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips."
        side="right"
        src="assets\images\digital-era.jpg"
        src1="assets\patterns\left-upward-arrow.svg"
      />
      <img
        src="assets\patterns\circle.svg"
        alt=""
        className="hidden md:block absolute top-56 right-[-350px]"
      />
      <img
        src="assets\patterns\circle.svg"
        alt=""
        className="hidden md:block absolute top-[24%] xl:top-[28%] left-[-340px]"
      />
      <Imgtext
        display={false}
        heading="Better urban living"
        text="We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride."
        side="left"
        src="assets\images\better-living.jpg"
        src1="assets\patterns\right-arrow.svg"
      />
      <Aboutimg />
      <Accordionabout />
    </div>
  );
};

export default About;
