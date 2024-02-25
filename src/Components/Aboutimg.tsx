type propsType = {
  img: string;
  text: string;
  title: string;
  num: string;
};

const Child = ({ img, text, title, num }: propsType) => {
  return (
    <div className="flex flex-col w-[85%] items-center justify-center h-[460px] gap-12">
      <div className="relative flex flex-col items-center justify-center">
        <img src={`${img}`} alt="" className="rounded-full flex-shrink-0" />
        <div className="flex items-center justify-center absolute bottom-[-40px] w-[96px] h-[96px] rounded-full bg-[#FCB72B]">
          <p
            className="text-[#495567] text-center text-xl font-bold leading-7 tracking-tighter nmbr
"
          >
            {num}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <h2
          className="text-[#495567] text-center text-xl font-bold leading-7 tracking-tighter
        "
        >
          {title}
        </h2>
        <p
          className="text-[#939CAA] text-center text-sm font-normal leading-6
        "
        >
          {text}
        </p>
      </div>
    </div>
  );
};

const Aboutimg = ({ optional }: { optional?: string }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-10">
      <h2 className="text-[#495567] text-center text-3xl font-bold leading-8 tracking-tighter">
        {optional ? optional : 'Our Values'}
      </h2>
      <div className="flex flex-col items-center justify-center gap-10">
        <Child
          img="assets\images\our-tech.jpg"
          text="We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!"
          title="Our tech"
          num="01"
        />
        <Child
          img="assets\images\our-integrity.jpg"
          num="02"
          text="We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve."
          title="Our integrity"
        />
        <Child
          img="assets\images\our-community.jpg"
          num="03"
          text="We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees."
          title="Our community"
        />
      </div>
    </div>
  );
};

export default Aboutimg;
