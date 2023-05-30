import React from "react";

const ChangeMessageState = ({ handleMessage }) => {
  const messages = [
    "Oi",
    "Olá",
    "Tudo bem?",
    "Como vai?",
    "Tudo bem com você?",
  ];
  return (
    <div>
      <button onClick={() => handleMessage(messages[0])}>1</button>
      <button onClick={() => handleMessage(messages[1])}>2</button>
      <button onClick={() => handleMessage(messages[2])}>3</button>
      <button onClick={() => handleMessage(messages[3])}>4</button>
      <button onClick={() => handleMessage(messages[4])}>5</button>
    </div>
  );
};

export default ChangeMessageState;
