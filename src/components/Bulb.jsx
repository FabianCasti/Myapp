import { useState } from "react";

const Bulb = () => {
  const [isOn, setIsOn] = useState(true);

  const toggleIsOn = () => setIsOn(!isOn);

  return (
    <div>
      <div
        className={`bulb ${isOn ? "bg-yellow" : "bg-gray"}`}
        // style={{background: isOn ? "yellow" : "gray" }}
      ></div>
      <button onClick={toggleIsOn}>On / off</button>
    </div>
  );
};

export default Bulb;
