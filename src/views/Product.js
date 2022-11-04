import React, {useContext} from 'react'
import NavBar from '../sections/NavBar';
import Footer from '../sections/Footer';
import SaleNote from '../sections/SaleNote';
import BreadCrumb from '../sections/BreadCrumb';
import product_img_1 from '../imgs/home-container-1.svg'
import product_img_2 from '../imgs/home-container-2.svg'
import ProductModelGird from '../sections/Product_model_gird';
import { ProductsContext } from '../contexts/context'
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
                <div className="text-center mb-4"><img id="main-image" src={product_img_1} alt="product" /></div>
                    <div className="text-center"> <img className="sec-image" /* onmousehover={change_image(this)} */ src={product_img_1} alt="product" />
                                                  <img className="sec-image" /* onmousehover={change_image(this)} */ src={product_img_2} alt="product" />
                    </div>
            </div>
        </div>
        <form className='col'>
        <div className="col-2 w-100">
            <h1>Modern Black Blouse</h1>
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
                        <input type="radio" name="size"  value="S"  />
                        <span className="product-input-size-text">S</span>
                    </label>
                    <label className="product-input-size">
                        <input type="radio" name="size"  value="M" defaultChecked />
                        <span className="product-input-size-text">M</span>
                    </label>
                    <label className="product-input-size">
                        <input type="radio" name="size" value="L" />
                        <span className="product-input-size-text">L</span>
                    </label>
                    <label className="product-input-size">
                        <input type="radio" name="size"  value="XL" />
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


<div className="container-xxl">
    <p>
        <div className="colapse-container">
            <a id="productColapse" className="product-colapse" /* onclick={toggleColapse(0)}  */data-bs-toggle="collapse" href="#Description" role="button" aria-expanded="false" aria-controls="collapseExample">
                Description
            </a>
            <a id="productColapse" className="product-colapse" /* onclick={toggleColapse(1)} */ data-bs-toggle="collapse" href="#Additional" role="button" aria-expanded="false" aria-controls="collapseExample">
                Additional
            </a>
            <a id="productColapse" className="product-colapse" /* onclick={toggleColapse(2)} */ data-bs-toggle="collapse" href="#Shopping" role="button" aria-expanded="false" aria-controls="collapseExample">
                Shopping & Returns
            </a>
            <a id="productColapse" className="product-colapse" /* onclick={toggleColapse(3)} */ data-bs-toggle="collapse" href="#Reviews" role="button" aria-expanded="false" aria-controls="collapseExample">
                Reviews
            </a>
        </div>
    </p>
    
    <div className="collapse" id="Description">
        <div className="card card-body">
            <span>
                Way extensive and dejection get delivered deficient sincerity gentleman age. 
                Too end instrument possession contrasted motionless. Calling offence six joy feeling.
                Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery
                    incommode earnestly no he commanded if. Put still any about manor heard.<br />
                    * Village did removed enjoyed explain nor ham saw calling talking.<br />
                    * Securing as informed declared or margaret.<br />
                    * Joy horrible moreover man feelings own shy.<br />
                    On even feet time have an no at. Relation so in confined smallest children unpacked delicate. 
                    Why sir end believe uncivil respect. Always get adieus nature day course for common. My little 
                    garret repair to desire he esteem. 
            </span>
        </div>    
    </div>
    <div className="collapse" id="Additional">
        <div className="card card-body">
            <span>Additional</span>
        </div>
    </div>
    <div className="collapse" id="Shopping">
        <div className="card card-body">
            <span>Shopping & Returns</span>
        </div>
    </div>
    <div className="collapse" id="Reviews">
        <div className="card card-body">
            <span>Reviews</span>
        </div>
    </div>
</div>



    <ProductModelGird title="Related Products" items={productsContext.allProducts} />
    <Footer />
    </>
  )
}



export default Product