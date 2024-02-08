import Image from "next/image";

const CoconutBreak = () => (
  <div className="flex relative my-20 min-w-[125px] min-h-[125px]">
    <Image
      priority={true}
      className={`
        w-full h-full absolute -left-[50px]
        animate-roll-left
      `}
      src="/images/half-coconut.png"
      alt="Broken coconut"
      width={100}
      height={100}
    />
    <Image
      priority={true}
      className={`
        w-full h-full absolute -rotate-[100deg] left-[50px]
        animate-roll-right
      `}
      src="/images/half-coconut.png"
      alt="Broken coconut"
      width={100}
      height={100}
    />
  </div>
);

export default CoconutBreak;
