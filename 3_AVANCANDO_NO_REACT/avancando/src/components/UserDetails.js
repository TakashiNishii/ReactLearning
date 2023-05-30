import React from "react";

const UserDetails = ({ name, age, profession }) => {
  return (
    <div>
      <h2>Detalhes do usuário:</h2>
      <ul>
        <li>Nome: {name}</li>
        <li>Idade: {age}</li>
        <li>Profissão: {profession}</li>
      </ul>

      {age >= 18 ? (
        <p>Este usuário pode tirar carteira de habilitação</p>
      ) : null}
    </div>
  );
};

export default UserDetails;
