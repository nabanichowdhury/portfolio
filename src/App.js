import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Granim from "granim";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home></Home>} />
          <Route path="contact" element={<Contact></Contact>} />
          <Route path="about" element={<About></About>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
