import "./styles.css";
import ByteConverter from "./ByteConverter";

export default function App() {
  return (
    <div className="App">
      <h1>byte変換器</h1>
      <div className="byteConverters">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
          <ByteConverter key={index} />
        ))}
      </div>
    </div>
  );
}
