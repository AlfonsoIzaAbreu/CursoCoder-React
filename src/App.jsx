import './App.css'
import Content from './components/content/content';
import Footer from './components/footer/Footer';
import ItemCount from './components/ItemCount/ItemCount';
import Navbar from './components/Navbar/Navbar';


function App() {
  
  return (
    <>
    <Navbar/>
    <Footer/>
    <Content/>
    <ItemCount stock= {15} productName= "champion adidas"/>
    <ItemCount stock= {20} productName= "champion nike"/>  
    <ItemCount stock= {7} productName= "champion puma"/> 
      </>
    );
};

export default App;
