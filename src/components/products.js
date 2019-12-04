import React from 'react'


    const Products = ({ products }) => {
 
   
      
      
      return (
        
        <div >
          
          <div className={"main"}>
          {products.map((product) => (
            <div className={"container"}>
              <div className={"card-body"}>
                <h5 className={"card-title"}>{product.brand}</h5>
                <h6 className={"card-subtitle mb-2 text-muted"}>{product.product_type}</h6>
                
                <div className={"image"}><img src={product.image_link} alt={product.product_type} /></div>
                <center><h5 className={"card-subtitle mb-2 text-muted price"}>
                
                   <button type="button" className="btn btn-outline-info ">Add to Cart</button>$19.99</h5></center>
        
                
              </div>
            </div>
            
          ))}
          </div>
        </div>
      )
    };

    export default Products;