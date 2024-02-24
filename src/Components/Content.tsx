import ContentChild from './ContentChild';

const Content = () => {
  return (
    <div className="w-[full] flex flex-col items-center justify-center gap-12 mt-40">
      <ContentChild
        src1="public\assets\patterns\left-downward-arrow.svg"
        heading="Locate with app"
        src="public\assets\icons\locate.svg"
        text="Us e the app to find the nearest scooter to you. We are continuously placing 
        scooters in the areas with most demand, so one should never be too far away. "
        side="right"
      />
      <ContentChild
        src1="public\assets\patterns\right-arrow.svg"
        heading="Pick your scooter"
        src="public\assets\icons\scooter.svg"
        text="We show the most important info for the scooters closest to you. So you know 
        how much charge they have left and can see roughly how much it will cost."
        side="left"
      />
      <ContentChild
        src1="public\assets\patterns\left-downward-arrow.svg"
        heading="Enjoy the ride"
        src="public\assets\icons\ride.svg"
        text="Scan the QR code and the bike will unlock. Retract the cable lock, put on a 
        helmet, and youre off! Always lock bikes away from walkways and accessibility ramps."
        side="right"
      />
    </div>
  );
};

export default Content;
