import { IContentProps } from "@/interfaces/content";
import P from "../typography/P";

const HR = ({ className, text }: { className?: string; text?: string; }) => {
  return (
    <>
    {
      text ? (
        <div className="relative h-8">
          <hr className={`border-coconut_brown ${className ? className : ''} absolute w-full top-1/2 -translate-y-1/2`} />
          <P className="bg-sand_day absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 px-2">{text}</P>
        </div>
      ) : (
        <hr className={`border-coconut_brown mb-2 ${className ? className : ''}`} />
      )
    }
    </>
  )
};

export default HR;
