import React from "react";
import { BitButton } from "./BitButton";
import { byteToArray } from "./utils";
import "./ByteConverter.css";

const ByteConverter: React.FC = () => {
  const [byte, setByte] = React.useState(0);
  const handleTurn = React.useCallback(
    (index: number) => {
      setByte(byte ^ (1 << index));
    },
    [byte]
  );
  return (
    <div className="byteConverter__root">
      <div>
        {byteToArray(byte)
          .reverse()
          .map((bit, index) => (
            <BitButton
              bit={bit}
              onClick={() => handleTurn(7 - index)}
              key={7 - index}
            />
          ))}
      </div>

      <button className="byteConverter__reset" onClick={() => setByte(0)}>
        RESET
      </button>
      <h2 className="byteConverter__hex">
        0x{byte.toString(16).toUpperCase().padStart(2, "0")}
      </h2>
    </div>
  );
};

export default ByteConverter;
