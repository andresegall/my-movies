import { Header } from "./components/Header";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Home } from "./views/Home";
import { About } from "./views/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
