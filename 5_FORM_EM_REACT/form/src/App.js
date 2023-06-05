import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm
        user={{
          name: "Takashi",
          email: "takashi@gmail.com",
          bio: "Sou um desenvolvedor",
          role: "admin",
        }}
      />
    </div>
  );
}

export default App;
