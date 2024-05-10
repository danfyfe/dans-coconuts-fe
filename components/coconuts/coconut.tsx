'use client';
import { MouseEventHandler, useCallback, useEffect, useRef, useState } from 'react';
import { ICoconut } from "@/context/CoconutProvider";
import Image from "next/image";


const Coconut = ({ coconut }: { coconut: ICoconut }) => {
  // TODO: refactor logic into custom hook
  const coconutRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDragStart = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log('drag start')
    setDragging(true);
  };

  const handleDrag = useCallback((event: MouseEvent) => {
    if (dragging) {
      const x: number = event.clientX - 32;
      const y: number = event.clientY -32;
      setPosition({ x, y});
    }
  }, [dragging, setPosition]);
  
  const handleDragEnd = () => {
    console.log('drag end')
    setDragging(false);
  };

  const handleDragStartTouch = (event: React.TouchEvent<HTMLDivElement>) => {
    console.log('drag start')
    setDragging(true);
  };

  const handleDragTouch = useCallback((event: TouchEvent) => {
    if (dragging && event.touches.length === 1) {
      const touch = event.touches[0];
      const x: number = touch.clientX - 32;
      const y: number = touch.clientY -32;
      setPosition({ x, y});
    }
  }, [dragging, setPosition]);

  useEffect(() => {
    if (coconutRef?.current && dragging) {
      const { current } = coconutRef;
      current.style.left = `${position.x}px`;
      current.style.top = `${position.y}px`;
    }
  }, [position, dragging]);

  useEffect(() => {

    document.addEventListener("mousemove", (event) => handleDrag(event));
    document.addEventListener("touchmove", (event) => handleDragTouch(event));
    document.addEventListener("mouseup", handleDragEnd);
    document.addEventListener("touchend", handleDragEnd);
    
    return () => {
      document.removeEventListener("mousemove", (event) => handleDrag(event));
      document.removeEventListener("touchmove", (event) => handleDragTouch(event));
      document.removeEventListener("mouseup", handleDragEnd);
      document.removeEventListener("touchend", handleDragEnd);
    };
  }, [handleDrag, handleDragTouch]);

  console.log('dragging: ', dragging)

  return (
    <div
      ref={coconutRef}
      className={`
        absolute ${dragging ? '' : 'animate-bottom'} ease-in-out h-16 w-16 drop-shadow-coconut cursor-grab
      `}
      style={{
        left: coconut.xPosition,
        animationDuration: coconut.animationDuration
      }}
      onMouseDown={handleDragStart}
      onTouchStart={handleDragStartTouch}
    >
      <Image
        priority
        height={100}
        width={100}
        alt={coconut.alt}
        src={coconut.image}
        className=""
      />
    </div>
  )
};

export default Coconut;
