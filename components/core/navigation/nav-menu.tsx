
'use client'
import { INavProps } from "@/interfaces/navigation";
import Button from "../utility/button";
import { useContext } from "react";
import { WeatherContext } from "@/context/WeatherProvider";

const NavMenu = ({ open }: INavProps) => {
  const { displayWeather, setDisplayWeather } = useContext(WeatherContext);
  return (
    <div
      className={`
        relative w-full bg-inherit h-[calc(100vh-64px)] flex
        ${ open ? 'md:border-l-2 md:border-l-black' : ''}
      `}
    >
      {
        open ? (
        <div className="
          w-full flex justify-end
          px-5 py-2 bg-inherit flex-col items-end
        ">
          <Button
            className="self-center"
            onClick={() => setDisplayWeather(!displayWeather)}
          >
            Toggle weather effects
          </Button>
        </div>
        ) : null
      }
    </div>
  )
};

export default NavMenu;
