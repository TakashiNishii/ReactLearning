
import { useState } from 'react';
import './App.css';

import City from './assets/city.jpg';
import ConditionalRender from './components/ConditionalRender';
import { ListRender } from './components/ListRender';
import { ManageData } from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

function App() {
  const [userName] = useState("Takashi");
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

    </div>
  );
}

export default App;
