import './Reset.css';
import './App.scss';

import {Header} from "./Components/Header/Header";
import {Presentation} from "./Components/Presentation/Presentation";

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
    </div>
  );
}

export default App;
