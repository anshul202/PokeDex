import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pokedex from "./pages/Pokedex"
import Items from "./pages/Items"
import Moves from "./pages/Moves"
import Locations from "./pages/Locations"
import Abilities from "./pages/Abilities"
import Types from "./pages/Types"
import Gymleaders from "./pages/Gymleaders"
import NavMenu from "./components/NavMenu";

function App() {
  return (
    <div>
      <Router>
        
        <NavMenu/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pokedex" element={<Pokedex/>} />
          <Route path="/items" element={<Items/>} />
          <Route path="/moves" element={<Moves/>} />
          <Route path="/locations" element={<Locations/>} />
          <Route path="/abilities" element={<Abilities/>} />
          <Route path="/types" element={<Types/>} />
          <Route path="Gymleaders" element={<Gymleaders/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

Abilities
Types
Gymleaders