import './App.css';
import ProductPage from './pages/ProductPage';
import ProductDetails from './pages/ProductDetails';
import { BrowserRouter, Routes, Route} from "react-router-dom"; 




function App() {


  

 

return (
    <div >
      
      <BrowserRouter>
        <Routes>
        <Route path='/' exact element={<ProductPage />}  /> 
        <Route path='/product-details'  element={<ProductDetails />}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
