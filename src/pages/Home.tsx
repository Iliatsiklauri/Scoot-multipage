import Button from '../Components/Button';
import Content from '../Components/Content';
import Imgtext from '../Components/Imgtext';
import './home.css';
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="home text-white flex flex-col items-center justify-center gap-12">
        <div className="w-[85%] gap-6 flex flex-col items-center justify-center">
          <h2 className="heading">Scooter sharing made simple</h2>
          <p className="para">
            Scoot takes the hassle out of urban mobility. Our bikes are placed in
            convenient locations in each of our cities. Use our app to locate the nearest
            bike, unlock it with a tap, and youre away!
          </p>
        </div>
        <Button text="Get Scootin" />
        <img
          src="public\assets\patterns\Group 8 Copy.png"
          alt=""
          className="absolute left-0 bottom-[0]"
        />
      </div>
      <Content />
      <div className="flex items-center justify-center flex-col gap-28 mt-20 mb-20">
        <Imgtext
          display={true}
          side="right"
          src1="public\assets\patterns\left-downward-arrow.svg"
          heading="Easy to use
riding telemetry"
          src="public\assets\images\telemetry.jpg"
          text="The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
        />
        <Imgtext
          display={true}
          side="left"
          src1="public\assets\patterns\right-arrow.svg"
          heading="Coming to a city near you"
          src="public\assets\images\near-you.jpg"
          text="Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."
        />
        <Imgtext
          display={true}
          side="right"
          src1="public\assets\patterns\left-downward-arrow.svg"
          heading="Zero hassle payments"
          text="Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
          src="public\assets\images\payments.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
