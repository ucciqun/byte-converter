import React from "react";
import "./BitButton.css";

interface BitButtonProps {
  onClick: () => void;
  bit: boolean;
}
export const BitButton: React.FC<BitButtonProps> = ({ onClick, bit }) => {
  return (
    <button
      className={`bitButton__root bitButton__${bit ? "ON" : "OFF"}`}
      onClick={onClick}
    >
      {bit ? "1" : "0"}
    </button>
  );
};
