import Button from './Button';

const Careersbox = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-8 xl:flex-row xl:gap-36">
      <h2
        className="text-[#495567] text-center text-3xl font-bold leading-8 tracking-tighter xl:text-left xl:w-[20%]
"
      >
        Your City Not Listed?
      </h2>
      <p
        className="text-[#939CAA] text-center text-sm font-normal leading-6 xl:w-[30%] xl:text-left
"
      >
        If you’d like to see Scoot in your hometown, be sure to let us know. We track
        requests and plan launches based on demand. Feel free to message us by clicking
        the link or messaging us on social.
      </p>
      <Button text="Message Us" />
    </div>
  );
};

export default Careersbox;
