import React, { useState }  from 'react'
import ModelItem from '../components/ModelItem'


const Product_model_gird = ({title}) => {

const [products, setProducts] = useState ([
  { id: 1, name: "Modern Black blouse",  category: "Shirts", price: "$29.00", rating: 3, imgUrl: "https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 2, name: "Modern Black",         category: "Shirts", price: "$2.00", rating: 3, imgUrl: "https://images.pexels.com/photos/4210863/pexels-photo-4210863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 3, name: "Modern",               category: "Shirts", price: "$100.00", rating: 3, imgUrl: "https://images.pexels.com/photos/1751150/pexels-photo-1751150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 4, name: "Modern Black blouse",  category: "Shirts", price: "$229.00", rating: 3, imgUrl: "https://images.pexels.com/photos/1096849/pexels-photo-1096849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 5, name: "Modern Black blouse",  category: "Shirts", price: "$229.00", rating: 3, imgUrl: "https://images.pexels.com/photos/4066296/pexels-photo-4066296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 6, name: "Modern Black blouse",  category: "Shirts", price: "$229.00", rating: 3, imgUrl: "https://images.pexels.com/photos/46212/men-s-shirt-shirt-attire-clothing-46212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 7, name: "Modern Black blouse",  category: "Shirts", price: "$229.00", rating: 3, imgUrl: "https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 8, name: "Modern Black blouse",  category: "Shirts", price: "$229.00", rating: 3, imgUrl: "https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
])

  return (
    <>
     <div className="container-xxl">
        <h1 className="featured-title">{title}</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {
            products.map(product => <ModelItem key={product.id} item={product}/>)
          }
        </div>
    </div>
    </>
  )
}

export default Product_model_gird