import React from 'react'
import ModelItem from '../components/ModelItem'

const Product_model_gird = ({title}) => {
  return (
    <>
     <div className="container-xxl">
        <h1 className="featured-title">{title}</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
            <ModelItem />
            <ModelItem />
            <ModelItem />
            <ModelItem />
            <ModelItem />
            <ModelItem />
            <ModelItem />
            <ModelItem />
        </div>
    </div>
    </>
  )
}

export default Product_model_gird