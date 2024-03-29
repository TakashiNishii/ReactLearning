import "./App.css";
import { useState, useEffect } from "react";

// 4- Custom hook
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";
function App() {
  const [products, setProducts] = useState([]);

  // 4 - Custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - Resgatando dados da API
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);

  //     const data = await res.json();

  //     setProducts(data);
  //   }

  //   fetchData();
  // }, []);

  // 2 - Criando um novo produto
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });

    // // 3 - Carregamento dinâmico
    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // 5 - Refatorando post
    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  const handleDelete = async (id) => {
    httpConfig(items, "DELETE", id);
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/* 6 - Loading */}
      {error && <p>{error}</p>}
      {loading ? (
        <p>Carregando dados...</p>
      ) : (
        !error && (
          <ul>
            {items &&
              items.map((product) => (
                <li key={product.id}>
                  {product.name} - R$ {product.price}
                  {/* Button delete */}
                  <input
                    type="button"
                    value="X"
                    onClick={() => handleDelete(product.id)}
                  />
                </li>
              ))}
          </ul>
        )
      )}

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* 7 -  Loading no POST*/}
          {loading ? (
            <input type="submit" value="Aguarde..." disabled />
          ) : (
            <input type="submit" value="Criar" />
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
