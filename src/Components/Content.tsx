import ContentChild from './ContentChild';

const Content = () => {
  return (
    <div className="w-[full] flex flex-col items-center justify-center gap-12 mt-40 md:relative xl:flex-row">
      <div className="hidden md:block absolute w-2 h-full bg-[#E5ECF4] left-6 top-[-100px] xl:h-3 xl:w-[1060px] xl:left-[-180px] xl:top-6"></div>
      <ContentChild
        heading="Locate with app"
        src="assets\icons\locate.svg"
        text="Us e the app to find the nearest scooter to you. We are continuously placing 
        scooters in the areas with most demand, so one should never be too far away. "
      />
      <ContentChild
        heading="Pick your scooter"
        src="assets\icons\scooter.svg"
        text="We show the most important info for the scooters closest to you. So you know 
        how much charge they have left and can see roughly how much it will cost."
      />
      <ContentChild
        heading="Enjoy the ride"
        src="assets\icons\ride.svg"
        text="Scan the QR code and the bike will unlock. Retract the cable lock, put on a 
        helmet, and youre off! Always lock bikes away from walkways and accessibility ramps."
      />
    </div>
  );
};

export default Content;
