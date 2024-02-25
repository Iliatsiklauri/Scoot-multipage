import Button from './Button';

const Careersbox = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-8">
      <h2
        className="text-[#495567] text-center text-3xl font-bold leading-8 tracking-tighter
"
      >
        Your City Not Listed?
      </h2>
      <p
        className="text-[#939CAA] text-center text-sm font-normal leading-6
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
