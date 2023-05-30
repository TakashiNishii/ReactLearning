import { useState } from "react";
import "./App.css";

import City from "./assets/city.jpg";
import ConditionalRender from "./components/ConditionalRender";
import { ListRender } from "./components/ListRender";
import { ManageData } from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";

function App() {
  const [userName] = useState("Takashi");
  const [cars] = useState([
    { brand: "Ferrari", km: 0, color: "Amarela", newCar: true },
    { brand: "KIA", km: 5000, color: "Cinza", newCar: false },
    { brand: "BMW", km: 10000, color: "Branca", newCar: false },
  ]);
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em asset */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />

      {/* Props */}
      <ShowUserName name={userName} />

      {/* Destructuring props */}
      <CarDetails brand="Ford" km="10000" color="Preto" newCar={false} />

      {/* Reaproveitando components */}
      <CarDetails brand="Fiat" km="5000" color="Branco" newCar={false} />
      <CarDetails brand="Volkswagen" km="0" color="Vermelho" newCar={true} />

      {/* Loop em array de objetos */}
      {cars.map((car, index) => (
        <CarDetails
          key={index}
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar}
        />
      ))}

      {/* Fragment */}
      <Fragment propFragment="Teste" />

      {/* Children */}
      <Container myValue="Testing">
        <p>Este é o conteúdo</p>
      </Container>

      <Container myValue="Testing 2">
        <h5>Testando o container</h5>
      </Container>
    </div>
  );
}

export default App;
