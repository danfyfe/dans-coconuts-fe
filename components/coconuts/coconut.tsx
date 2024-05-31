'use client';
import { MouseEventHandler, useCallback, useEffect, useId, useRef, useState } from 'react';
import { ICoconut } from '@/models/coconuts/Coconut';
import Image from "next/image";
import H2 from '../core/typography/H2';
import P from '../core/typography/P';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/popover";
import { PopoverClose } from '@radix-ui/react-popover';
import { FaPlus } from 'react-icons/fa';


const Coconut = ({ coconut, index }: { coconut: ICoconut, index?: number }) => {
  // TODO: refactor logic into custom hook
  const ID = useId();
  const coconutRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: coconut.xPosition, y: coconut.yPosition });

  const handleDragStart = (event: React.DragEvent<HTMLButtonElement>) => {
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

  const handleDragStartTouch = (event: React.TouchEvent<HTMLButtonElement>) => {
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
      id={`coconut-${index}`}
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
        >
          <Popover>
            <PopoverTrigger
              onDragStart={handleDragStart}
              onTouchStart={handleDragStartTouch}
            >
              <Image
                priority
                height={100}
                width={100}
                src='/images/coconut.png'
                alt='Image of a coconut'
                className=""
              />
            </PopoverTrigger>
            <PopoverContent>
              <div className="relative">
                <PopoverClose className="absolute -top-2 -right-2">
                  <FaPlus className="rotate-45" />
                </PopoverClose>
                <H2 className="text-base text-left">{coconut.title}</H2>
                <div>
                  <div>
                    <P>{coconut.content}</P>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
      </div>
  )
};

export default Coconut;
