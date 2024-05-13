'use client';
import { MouseEventHandler, useCallback, useEffect, useId, useRef, useState } from 'react';
import { ICoconut } from "@/context/CoconutProvider";
import Image from "next/image";


const Coconut = ({ coconut }: { coconut: ICoconut }) => {
  // TODO: refactor logic into custom hook
  const ID = useId();
  const coconutRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: coconut.xPosition, y: coconut.yPosition });

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text/plain", event.currentTarget.id);
    event.preventDefault();
    setDragging(true);
  };

  const handleDrag = useCallback((event: MouseEvent) => {
    if (dragging) {
      const x: number = event.clientX - 32;
      const y: number = event.clientY -32;
      setPosition({ x, y });
    }
  }, [dragging, setPosition]);
  
  const handleDragEnd = () => {
    setDragging(false);
    if (coconutRef?.current) {
      const { current } = coconutRef;
      current.classList.add('animate-bottom');
    }
  };

  const handleDragStartTouch = (event: React.TouchEvent<HTMLDivElement>) => {
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
    if (coconutRef?.current) {
      const { current } = coconutRef;
      if (dragging) {
        current.style.left = `${position.x}px`;
        current.style.top = `${position.y}px`;
        current.classList.remove('animate-fall');
        current.classList.remove('animate-bottom');
      }
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

  return (
    <div
      id={`coconut-${ID}`}
      draggable="true"
      ref={coconutRef}
      className={`
        absolute ease-in-out h-16 w-16 md:drop-shadow-coconut cursor-grab z-[999]
        animate-fall
      `}
      style={{
        left: coconut.xPosition,
        animationDuration: coconut.animationDuration
      }}
      onDragStart={handleDragStart}
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
