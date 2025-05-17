'use client';
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import P from "../core/typography/P";

const CoconutTrashCan = () => {
  const [isDraggingOver, setIsDraggingOver] = useState<boolean>(false);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = () => {
    setIsDraggingOver(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDraggingOver(false);
  };

  return (
    <div
      className={`
        absolute bottom-5 right-0 z-[999]
        ${isDraggingOver ? 'scale-110' : ''}
      `}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="relative">
        <FaTrash size={125} className="drop-shadow-sm" />
        <P className="absolute text-white text-center top-2/5 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">Coconuts<br/>Only</P>
      </div>
    </div>
  )
};

export default CoconutTrashCan;
