import { useState } from "react";

const HookUseState = () => {
  // 1- useState
  let userName = "Naruto";

  const [name, setName] = useState("Takashi");

  const changeNames = () => {
    userName = "Naruto Uzumaki";

    setName("Takashi Nishi");
  };

  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes!</button>
      <hr />
    </div>
  );
};

export default HookUseState;
