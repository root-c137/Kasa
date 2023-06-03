import './Reset.css';
import './App.scss';

import {Presentation} from "./Components/Presentation/Presentation";
import {Gallery} from "./Components/Gallery/Gallery";
import {Footer} from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">

        <div className="Container">
            <Presentation />
            <Gallery />
        </div>

    </div>
  );
}

export default App;
