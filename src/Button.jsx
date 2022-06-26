import { useState } from "react";
import Bulb from "./components/Bulb";
import "./Style.css";

function Button() {
  const [isVisible, setIsVisible] = useState(true);
  // let isVisible = true;

  const toggleIsVisible = () => setIsVisible(!isVisible);

  return (
    <div className="App">
      <input type={isVisible ? "text" : "password"} />
      <button onClick={toggleIsVisible}>Mostrar / ocultar contraseña</button>
      <Bulb />
    </div>
  );
}

export default Button;
