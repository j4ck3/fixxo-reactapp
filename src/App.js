import React, {useState,useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductsContext } from './contexts/context'
import { ShoppingCartProvider } from './contexts/ShoppingCartContext'

import './App.css'
import Contact from './views/Contact';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Categories from './views/Categories';
import Product from './views/Product';
import Cart from './views/Cart';
import Wishlist from './views/Wishlist';
import Compare from './views/Compare';


function App() {

  const [products, setProducts] = useState ({
    allProducts: [],
    featuredProducts: []
  })

  useEffect (() => {
    const fetchAllProducts= async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setProducts({...products, allProducts: await result.json()}) 
    }
    fetchAllProducts()

    const fetchFeaturedProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setProducts({...products, featuredProducts: await result.json()}) 
    }
    fetchFeaturedProducts()

  }, [setProducts])

  return (
    <BrowserRouter>
      <ShoppingCartProvider>
      <ProductsContext.Provider value={products}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Categories' element={<Categories /> } />
        <Route path='/Product' element={<Product /> } />
        <Route path='/Cart' element={<Cart /> } />
        <Route path='/Wishlist' element={<Wishlist /> } />
        <Route path='/Compare' element={<Compare /> } />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </ProductsContext.Provider>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;
