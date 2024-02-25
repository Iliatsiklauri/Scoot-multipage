import { useState } from 'react';

const Accordionabout = () => {
  type propsType = {
    title: string;
    text: string;
  };
  const [selected, setSelected] = useState<number | null>(null);
  const [selected1, setSelected1] = useState<number | null>(null);
  const toggle = (i: number) => {
    setSelected((prev: number | null) => (prev === i ? null : i));
  };
  const toggle1 = (i: number) => {
    setSelected1((prev: number | null) => (prev === i ? null : i));
  };
  const arr = [
    {
      title: 'How do I download the app?',
      text: 'To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.',
    },
    {
      title: 'Can I find a nearby Scoots?',
      text: 'Ready for a city adventure? Easily locate a nearby Scoots with the app. Quick, convenient, and ready to roll! Let the journey begin',
    },
    {
      title: 'Do I need a license to ride?',
      text: 'Yes, you typically need a valid drivers license to legally ride a scooter. Make sure to check your local regulations as they may vary. safe on the road!',
    },
  ];
  const arr1 = [
    {
      title: 'Should I wear a helmet?',
      text: 'Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.',
    },
    {
      title: 'How about the rules & regulations?',
      text: 'Make sure to wear a helmet, following local laws. Meet the minimum age requirement for scooter rental. Obey all traffic laws, signals, and signage. Park in designated areas to avoid fines. Possess a valid drivers license. ',
    },
    {
      title: 'What if I damage my Scoot?',
      text: 'If you damage your Scoot, its important to follow the guidelines provided by the scooter rental service. In most cases, you should report the damage through the app or contact customer support. ',
    },
  ];
  return (
    <div className="flex flex-col gap-12 w-[85%] mb-32">
      <h2
        className="text-[#495567] text-center text-2xl font-bold leading-8 tracking-tighter
"
      >
        FAQS
      </h2>
      <div className=" flex flex-col gap-5">
        <h2
          className="text-[#495567] text-center text-xl font-bold leading-7 tracking-tighter
"
        >
          How it works
        </h2>
        <div className="flex flex-col items-center justify-center gap-4">
          {arr.map((obj: propsType, key: number) => (
            <div
              className="bg-[#F2F5F9] w-full p-6 gap-4 flex flex-col"
              key={key}
              onClick={() => {
                toggle1(key);
              }}
            >
              <div className="flex items-center justify-between">
                <h2
                  className="text-[#495567] font-mono text-base font-bold leading-6 tracking-tighter
                "
                >
                  {obj.title}
                </h2>
                {selected1 === key ? (
                  <img
                    src="public\assets\icons\chevron.svg"
                    alt=""
                    className="transition-transform ease-in-out duration-300 transform rotate-180

                  "
                  />
                ) : (
                  <img src="public\assets\icons\chevron.svg" alt="" />
                )}
              </div>
              {selected1 === key ? (
                <p
                  className="transition-all ease-in-out duration-300 text-[#495567] font-sans text-base font-normal leading-6
"
                >
                  {obj.text}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <div className=" flex flex-col gap-5">
        <h2
          className="text-[#495567] text-center text-xl font-bold leading-7 tracking-tighter
"
        >
          Safe driving
        </h2>
        <div className="flex flex-col items-center justify-center gap-4">
          {arr1.map((obj: propsType, key: number) => (
            <div
              className="bg-[#F2F5F9] w-full p-6 gap-4 flex flex-col"
              key={key}
              onClick={() => toggle(key)}
            >
              <div className="flex items-center justify-between">
                <h2
                  className="text-[#495567] font-mono text-base font-bold leading-6 tracking-tighter
                "
                >
                  {obj.title}
                </h2>
                {selected === key ? (
                  <img
                    src="public\assets\icons\chevron.svg"
                    alt=""
                    className="transition-transform ease-in-out duration-300 transform rotate-180

                  "
                  />
                ) : (
                  <img src="public\assets\icons\chevron.svg" alt="" />
                )}
              </div>
              {selected === key ? (
                <p
                  className="transition-all ease-in-out duration-300 text-[#495567] font-sans text-base font-normal leading-6
"
                >
                  {obj.text}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordionabout;
