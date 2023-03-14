//components
import FirstComponent from './components/FirstComponent';

// Styles / CSS
import './App.css';
import TemplateExpression from './components/TemplateExpression';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
    </div>
  );
}

export default App;
