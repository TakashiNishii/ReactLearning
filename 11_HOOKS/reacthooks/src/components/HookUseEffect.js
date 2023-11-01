import { useEffect, useState } from "react";

const HookUseEffect = () => {
  // 1 - useEffect, sem dependência
  useEffect(() => {
    console.log("Estou sendo executado!");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  // 2 - Array de deps. vazio
  useEffect(() => {
    console.log("Serei executado apenas uma vez!");
  }, []);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar!</button>
    </div>
  );
};

export default HookUseEffect;
