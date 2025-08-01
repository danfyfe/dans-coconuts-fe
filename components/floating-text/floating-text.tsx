import React from "react";

interface FloatingTextProps {
  text: string;
  highlightWords: string[];
}

const FloatingText: React.FC<FloatingTextProps> = ({ text, highlightWords }) => {
  // Split text into words and spaces
  const parts = text.split(/(\s+)/);

  return (
    <span>
      {parts.map((part, i) => {
        const isHighlight = highlightWords.includes(part.trim());
        if (isHighlight) {
          return (
            <span key={i} style={{ display: "inline-block" }}>
              {part.split("").map((char, j) => (
                <span
                  key={j}
                  className="floating-letter"
                  style={{
                    display: "inline-block",
                    animation: `floatUpDown 1s ease-in-out infinite`,
                    animationDelay: `${j * 0.1}s`,
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
      <style jsx>{`
        @keyframes floatUpDown {
          0%,
          100% {
            transform: translateY(0);
          }
          20% {
            transform: translateY(-8px);
          }
          50% {
            transform: translateY(8px);
          }
          80% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </span>
  );
};

export default FloatingText;