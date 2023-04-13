import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Form from "./components/Form";
import "../src/styles/app.scss";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
