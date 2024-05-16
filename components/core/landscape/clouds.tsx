import { FaCloud } from "react-icons/fa";

const Cloud = ({ className }: { className?: string }) => {
  
  return (
    <FaCloud
      className={`
        text-slate-500 text-9xl
        absolute drop-shadow-xl
        ${className ? className : ''}
      `}
    />
  )
};

const Clouds = ({ raining }: { raining?:number }) => {

  return (
    <div className={`
      relative z-[997]
      h-sun w-sun top-[2%] left-[2%] transition-opacity ease-in delay-1000 duration-300
    `}>
        <Cloud className={`
           -bottom-[5%]
          ${!!raining ?
            'translate-x-[50%] visible':
            'translate-x-[100vw] collapse'
          }
         transition-all duration-1000
        `} />
        <Cloud className={`
          top-0
          ${!!raining ?
            '-translate-x-[10%] visible':
            '-translate-x-[100vw] collapse'
          }
         transition-all duration-1000
        `} />
    </div>
  )
};

export default Clouds;
