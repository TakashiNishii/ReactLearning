//components
import FirstComponent from './components/FirstComponent';

// Styles / CSS
import './App.css';
import TemplateExpression from './components/TemplateExpression';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
