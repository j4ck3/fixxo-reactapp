import React, {useContext, useEffect, useState} from 'react'
import { TabPanel, useTabs } from 'react-headless-tabs'
import { TabSelector } from '../views/TabSelector.tsx'
import { ProductsContext } from '../contexts/context'
import { useParams } from 'react-router-dom'
/* import { useProductsContext } from '../contexts/context' */

import NavBar from '../sections/NavBar'
import Footer from '../sections/Footer'
import SaleNote from '../sections/SaleNote'
import BreadCrumb from '../sections/BreadCrumb'
import product_img_1 from '../sections/home/imgs/home-container-1.svg'
import product_img_2 from '../sections/home/imgs/home-container-2.svg'
import ProductModelGird from '../sections/Product_model_gird'

/* ------------Change image on hover------------------*/
/* function change_image(image){
    const container = document.getElementById("main-image");
    container.src = image.src;
} */

/* -------------Product-input-qty------------------*/
/* var i = 1;
const qtyInput = document.getElementById('qty')
const buttonClickInc = () => {
    qtyInput.value = i;
    i++;

}

const buttonClickDec = () => {
    if (i <= 1){}
    if (i >= 2){
        qtyInput.value = i;
        i--;

    }
} */



/* -------------produt-colapse------------------*/
/* const productColapse = document.querySelectorAll('#productColapse');
const toggleColapse = (i) => {
    productColapse[i].classList.toggle('active')
} */



/* ----------TEXT TOGGLE------------------*/
/* function toggleText() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.querySelector(".readmore-btn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
 */

const Product = () => {

    const {id} = useParams()
/*     const {product, getProduct} = useProductsContext()
    useEffect(() => {
        getProduct(id)
    }, []) */


    const [selectedTab, setSelectedTab] = useTabs([
        'Description',
        'Additional',
        'Shopping-Returns',
        'Reviews',
      ]);

    const handleClick = (item) => {
    setCart([...cart, item])
    console.log(item)
    }
    const [cart, setCart] = useState ([])

  const productsContext = useContext(ProductsContext) 

  return (
    <>
    <NavBar />
    <SaleNote />
    <BreadCrumb currentPage="Product" />


    <div className="container-xxl">
    <div className="row mt-5 product-container">
        <div className="col-md-6">
            <div className="images">
                <div className="text-center mb-4"><img id="main-image" /* src={item.imageName} */ alt="product" /></div>
                    <div className="text-center"> <img className="sec-image" /* onmousehover={change_image(this)} */ src={product_img_1} alt="product" />
                                                  <img className="sec-image" /* onmousehover={change_image(this)} */ src={product_img_2} alt="product" />
                    </div>
            </div>
        </div>
        <form className='col'>
        <div className="col-2 w-100">
            <h1>{/* {item.name} */}</h1>
            <h3 className="text-uppercase">SKU: 12345670 BRAND: The Northland</h3>
            <div className="product-rating mt-3">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
            <h4 className="mt-3">$35.00</h4>
            <p>Discovered had get considered projection who favourable. 
                Necessary up knowledge it tolerably. Unwilling departure education 
                is be dashwoods or an. Use off agreeable law unwilling sir 
                deficient curiosity instantly. <span id="dots">...</span><span id="more">Lorem enim ligula
                venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus 
                vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at 
                libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. 
                Integer fringilla congue eros non fermentum. Sed dapibus.</span>
                (<button href="#"/*  onclick={toggleText} */ className="readmore-btn">Read more</button>)
            </p>
               
            
            
                <div className="product-input-container">
                    <label className="label-product">Size: </label>
                    <label className="product-input-size">
                        <input className='product-size-radio' type="radio" name="size"  value="S"  />
                        <span className="product-input-size-text">S</span>
                    </label>
                    <label className="product-input-size">
                        <input className='product-size-radio' type="radio" name="size"  value="M" defaultChecked />
                        <span className="product-input-size-text">M</span>
                    </label>
                    <label className="product-input-size">
                        <input className='product-size-radio' type="radio" name="size" value="L" />
                        <span className="product-input-size-text">L</span>
                    </label>
                    <label className="product-input-size">
                        <input className='product-size-radio' type="radio" name="size"  value="XL" />
                        <span className="product-input-size-text">XL</span>
                    </label>
                </div>

                <div className="product-input-container">
                    <label className="label-product" htmlFor="color">Color:</label>
                    <select id="color">
                        <option defaultValue disabled>Choose a Color</option>
                        <option value="black">Black</option>
                        <option>Off white</option>
                        <option>Red</option>
                    </select>
                </div>

                <div className="product-input-container">
                    <label className="label-product" htmlFor="number">Qty:</label>
                    <div className="product-input-qty-container d-flex justify-content-center">
                        <input className="product-input-qty" id="qty" type="number" value="1" min="1" max="100"/>
                        <div id="inc-button" /* onClick={buttonClickInc} */ className="spinner-button"><i className="fa-solid fa-plus"></i></div>
                        <div id="dec-button" /* onClick={buttonClickDec} */ className="spinner-button"><i className="fa-solid fa-minus"></i></div>
                    </div>
                    <button className="button-product" type="submit">ADD TO CART</button>
                </div>
                
                <div className="product-input-container">
                    <label className="label-product">Share:</label>
                    <div className="product-share d-flex">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-google"></i>
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>

<div className='container-xxl'>
<nav className="flex border-b border-gray-300">
        <TabSelector
          isActive={selectedTab === 'Description'}
          onClick={() => setSelectedTab('Description')}
        >
        Description
        </TabSelector>
        <TabSelector
          isActive={selectedTab === 'Additional'}
          onClick={() => setSelectedTab('Additional')}
        >
          Additional
        </TabSelector>
        <TabSelector
          isActive={selectedTab === 'Shopping-Returns'}
          onClick={() => setSelectedTab('Shopping-Returns')}
        >
          Shopping & Returns
        </TabSelector>
        <TabSelector
          isActive={selectedTab === 'Reviews'}
          onClick={() => setSelectedTab('Reviews')}
        >
          Reviews
        </TabSelector>
      </nav>
      <div className="p-4">
        <TabPanel hidden={selectedTab !== "Description"}>Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard. 
            * Village did removed enjoyed explain nor ham saw calling talking.
            * Securing as informed declared or margaret.
            * Joy horrible moreover man feelings own shy.
            On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.
        </TabPanel>
        <TabPanel hidden={selectedTab !== "Additional"}>Additional</TabPanel>
        <TabPanel hidden={selectedTab !== "Shopping-Returns"}>Shopping & Returns</TabPanel>
        <TabPanel hidden={selectedTab !== "Reviews"}>Reviews</TabPanel>
      </div>
</div>




    <ProductModelGird title="Related Products" items={productsContext.allProducts} handleClick={handleClick} />
    <Footer />
    </>
  )
}



export default Product