import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/Detalles/:id" element={<ItemDetail/>} />
        </Routes>
        <Footer />
      </BrowserRouter>

  
  );
}

export default App;
