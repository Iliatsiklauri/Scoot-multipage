import Aboutimg from '../Components/Aboutimg';
import Careersapply from '../Components/Careersapply';
import Imgtext from '../Components/Imgtext';
import Topcomp from '../Components/Topcomp';

const Careers = () => {
  return (
    <div className="flex items-center flex-col gap-20">
      <Topcomp text="Careers" />
      <div className="flex items-center flex-col gap-20">
        <Imgtext
          display={true}
          heading="Care to join our mission?"
          side="right"
          src="public\assets\images\join-us.jpg"
          src1="public\assets\patterns\left-downward-arrow.svg"
          text="We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!"
        />
        <Aboutimg optional="Why join us ?" />
        <Careersapply />
      </div>
    </div>
  );
};

export default Careers;
