import './Reset.css';
import './App.scss';

import {Header} from "./Components/Header/Header";
import {Presentation} from "./Components/Presentation/Presentation";
import {Gallery} from "./Components/Gallery/Gallery";

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <Gallery />
    </div>
  );
}

export default App;
