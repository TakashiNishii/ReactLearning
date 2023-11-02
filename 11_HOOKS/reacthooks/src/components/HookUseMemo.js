import { useMemo, useEffect, useState } from "react";
const HookUseMemo = () => {
  const [number, setNumber] = useState(0);

  //const premiumNumber = ["0", "100". "200"];
  const premiumNumber = useMemo(() => ["0", "100", "200"], []);

  useEffect(() => {
    console.log("Premium numbers foi alterado!");
  }, [premiumNumber]);

  return (
    <div>
      <h2>useMemo</h2>
      <input type="text" onChange={(e) => setNumber(e.target.value)} />
      {premiumNumber.includes(number) && <p>Acertou o número!</p>}
      <hr />
    </div>
  );
};

export default HookUseMemo;
