// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";
const Products = () => {
  const { counter } = useCounterContext();

  // 6 - Alterando contexto complexo
  const { color } = useTitleColorContext();
  return (
    <div>
      <h1 style={{ color: color }}>Produtos</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default Products;
