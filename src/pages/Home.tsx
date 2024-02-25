import { useRef } from 'react';
import Button from '../Components/Button';
import Content from '../Components/Content';
import Imgtext from '../Components/Imgtext';
import './home.css';
const Home = () => {
  const bottomRef = useRef(null);
  const scrollToBottom = async () => {
    await new Promise((resolve) => setTimeout(resolve, 200));

    if (bottomRef.current) {
      (bottomRef.current as HTMLElement).scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="flex flex-col items-center justify-center  xl:relative overflow-hidden">
      <div className="relative home text-white flex flex-col items-center justify-center gap-12 md:overflow-hidden xl:h-[615px]">
        <div className="w-[85%] gap-6 xl:absolute left-[165px] xl:top-[150px] xl:w-[500px] xl:items-start flex flex-col items-center justify-center">
          <h2 className="heading md:w-[60%] xl:w-[80%] xl:text-left">
            Scooter sharing made simple
          </h2>
          <p className="para xl:text-left xl:ml-[100px]">
            Scoot takes the hassle out of urban mobility. Our bikes are placed in
            convenient locations in each of our cities. Use our app to locate the nearest
            bike, unlock it with a tap, and youre away!
          </p>
        </div>
        <div onClick={scrollToBottom} className="xl:absolute left-[260px] bottom-[150px]">
          <Button text="Get Scootin" />
        </div>

        <img
          src="assets\patterns\Group 8 Copy.png"
          alt=""
          className="absolute left-0  md:hidden bottom-5"
        />
        <img
          src="assets\patterns\line.svg"
          alt=""
          className="hidden xl:block absolute left-0"
        />
        <img
          src="assets\patterns\right-arrow.svg"
          alt=""
          className="hidden md:block absolute left-[-20%]  bottom-5 xl:bottom-[164px] xl:left-[800px]"
        />
        <img
          src="assets\patterns\white-circles.svg"
          alt=""
          className="hidden md:block absolute right-[-30px] bottom-10 xl:bottom-[164px]"
        />
      </div>
      <Content />
      <div className="flex items-center justify-center flex-col gap-28 mt-20 mb-20 overflow-hidden relative w-full]">
        <div>
          <img
            src="assets\patterns\circle.svg"
            alt=""
            className="hidden md:block absolute right-[-350px]"
          />
          <Imgtext
            display={true}
            side="right"
            src1="assets\patterns\left-downward-arrow.svg"
            heading="Easy to use
          riding telemetry"
            src="assets\images\telemetry.jpg"
            text="The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
          />
          <img
            src="assets\patterns\circle.svg"
            alt=""
            className="hidden md:block absolute left-[-350px] mt-28"
          />
        </div>
        <div>
          <Imgtext
            display={true}
            side="left"
            src1="assets\patterns\right-arrow.svg"
            heading="Coming to a city near you"
            src="assets\images\near-you.jpg"
            text="Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."
          />
          <img
            src="assets\patterns\circle.svg"
            alt=""
            className="hidden md:block absolute right-[-350px] mt-28"
          />
        </div>
        <div>
          <Imgtext
            display={true}
            side="right"
            src1="assets\patterns\left-downward-arrow.svg"
            heading="Zero hassle payments"
            text="Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
            src="assets\images\payments.jpg"
          />
        </div>
      </div>
      <div ref={bottomRef} className="absolute bottom-0"></div>
    </div>
  );
};

export default Home;
