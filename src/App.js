import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './views/Contact';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Categories from './views/Categories';
import Product from './views/Product';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Categories' element={<Categories /> } />
        <Route path='/Product' element={<Product /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
