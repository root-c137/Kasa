import './Reset.css';
import './App.scss';

import {Header} from "./Components/Header/Header";
import {Presentation} from "./Components/Presentation/Presentation";
import {Gallery} from "./Components/Gallery/Gallery";
import {Footer} from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">

        <div className="Container">
            <Header />
            <Presentation />
            <Gallery />
        </div>
      <Footer />
    </div>
  );
}

export default App;
