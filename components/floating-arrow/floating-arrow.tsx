import React, { ReactNode } from "react";

type Side = "top" | "bottom" | "left" | "right";

interface FloatingArrowProps {
  children: ReactNode;
  side?: Side;
  distance?: number; // px
  arrowSize?: number; // px
  className?: string;
}

const getArrowPosition = (side: Side, distance: number, arrowSize: number) => {
  switch (side) {
    case "top":
      return {
        arrowStyle: {
          bottom: `calc(100% + ${distance}px)`,
          left: "50%",
          transform: "translateX(-50%)",
        },
        containerStyle: { position: "relative", display: "inline-block" },
      };
    case "bottom":
      return {
        arrowStyle: {
          top: `calc(100% + ${distance}px)`,
          left: "50%",
          transform: "translateX(-50%) rotate(180deg)",
        },
        containerStyle: { position: "relative", display: "inline-block" },
      };
    case "left":
      return {
        arrowStyle: {
          right: `calc(100% + ${distance}px)`,
          top: "50%",
          transform: "translateY(-50%) rotate(-90deg)",
        },
        containerStyle: { position: "relative", display: "inline-block" },
      };
    case "right":
      return {
        arrowStyle: {
          left: `calc(100% + ${distance}px)`,
          top: "50%",
          transform: "translateY(-50%) rotate(90deg)",
        },
        containerStyle: { position: "relative", display: "inline-block" },
      };
    default:
      return {};
  }
};

export const FloatingArrow: React.FC<FloatingArrowProps> = ({
  children,
  side = "top",
  distance = 16,
  arrowSize = 24,
  className,
}) => {
  const { arrowStyle, containerStyle } = getArrowPosition(side, distance, arrowSize);

  return (
    <div style={containerStyle} className={className}>
      <div
        style={{
          position: "absolute",
          width: arrowSize,
          height: arrowSize,
          ...arrowStyle,
          pointerEvents: "none",
          animation: "floatArrow 1.2s ease-in-out infinite alternate",
        }}
      >
        <svg
          width={arrowSize}
          height={arrowSize}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2 L12 18 M12 18 L6 12 M12 18 L18 12"
            stroke="#333"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {children}
      <style>
        {`
          @keyframes floatArrow {
            0% { transform: translateY(0) scale(1); }
            100% { transform: translateY(8px) scale(1.05); }
          }
          /* Side-specific animation direction */
          .floating-arrow-top > div { animation-name: floatArrowY; }
          .floating-arrow-bottom > div { animation-name: floatArrowY; }
          .floating-arrow-left > div { animation-name: floatArrowX; }
          .floating-arrow-right > div { animation-name: floatArrowX; }
          @keyframes floatArrowY {
            0% { transform: translateY(0); }
            100% { transform: translateY(8px); }
          }
          @keyframes floatArrowX {
            0% { transform: translateX(0); }
            100% { transform: translateX(8px); }
          }
        `}
      </style>
    </div>
  );
};