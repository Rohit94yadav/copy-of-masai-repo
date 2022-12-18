
import { useContext } from 'react';
import './App.css';
import ToggleComponent from './Components/ToggleComponent';
import { AppContext } from './Context/ContextProvider';

  function App() {

  const value = useContext(AppContext);
  return (
    <div className="App">
      <h1>Theme</h1>
      <h2>{value.theme}</h2>
      <ToggleComponent/>
    </div>
  );
}

export default App;
