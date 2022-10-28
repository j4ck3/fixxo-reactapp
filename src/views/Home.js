import React from 'react'
import NavBar from '../sections/NavBar';
import Landing from '../sections/Landing';
import SaleBanner21 from '../sections/SaleBanner2_1';
import ProductModelGird from '../sections/Product_model_gird';
import SaleBanner11 from '../sections/SaleBanner1_1';
import ProductActions from '../sections/ProductActions';
import BigBannerModel from '../sections/BigBannerModel';
import BigBannerModelMirror from '../sections/BigBannerModelMirror';
import SaleBanner1 from '../sections/SaleBanner1';
import ProductModelCategory from '../sections/Product_model_category';
import SalesPoint from '../sections/SalesPoint';
import Footer from '../sections/Footer';


const Home = () => {
  return (
    <>
    <React.StrictMode>
      <NavBar />
      <Landing />
      <SaleBanner21 />
      <ProductModelGird />
      <SaleBanner11 />
      <ProductActions />
      <BigBannerModel />
      <BigBannerModelMirror />
      <SaleBanner1 />
      <ProductModelCategory />
      <SalesPoint />
      <Footer />
    </React.StrictMode>
    </>
  )
}

export default Home