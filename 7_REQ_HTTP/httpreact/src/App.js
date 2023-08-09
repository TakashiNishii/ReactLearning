import "./App.css";
import { useState, useEffect } from "react";

const url = "http://localhost:3000/products";
function App() {
  const [products, setProducts] = useState([]);

  // 1 - Resgatando dados da API
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);

      const data = await res.json();

      setProducts(data);
    }

    fetchData();
  }, []);

  console.log(products);

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R$ {product.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
