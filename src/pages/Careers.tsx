import Aboutimg from '../Components/Aboutimg';
import Careersapply from '../Components/Careersapply';
import Imgtext from '../Components/Imgtext';
import Topcomp from '../Components/Topcomp';

const Careers = () => {
  return (
    <div className="flex items-center flex-col w-ful gap-20 relative overflow-hidden">
      <Topcomp text="Careers" />
      <div className="flex items-center flex-col gap-20">
        <div className="z-0">
          <Imgtext
            display={true}
            heading="Care to join our mission?"
            side="right"
            src="assets\images\join-us.jpg"
            src1="assets\patterns\left-downward-arrow.svg"
            text="We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!"
          />
        </div>
        <img
          src="assets\patterns\circle.svg"
          alt=""
          className="hidden md:block absolute top-[6%] xl:top-[9%] z-10 right-[-340px]"
        />
        <Aboutimg optional="Why join us ?" />
        <Careersapply />
      </div>
    </div>
  );
};

export default Careers;
