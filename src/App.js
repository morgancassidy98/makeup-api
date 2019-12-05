import React, {Component} from 'react';
import Products from './components/products';
import Search from './search';
import Pagetitle from './components/page-title';
import {cartData} from './search';

import {totalPrice} from'./search';
import {itemPrice} from './search';


class App extends Component {
  
  state = {
    query: "",
    products: [],
    filteredProducts: [],
    cartData:[],
    totalPrice,
  
    
   
    itemPrice,
    showCart: false,
    }

  _showCart = (bool) => {
    this.setState({
      showCart: bool
    });
  }
componentDidMount() {
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          products: data,
          cartData,
          

        })
      })
      .catch(console.log)
  }
  handleRemoveClick(product, totalPrice){
    
    totalPrice=totalPrice-itemPrice;
   
    
  
    cartData.pop(product);
    alert("Item has been removed");
    
    
    this.setState({
      cartData,
      totalPrice,
      
   
    })
  }

  



  render() {
    return [
      //<Cart  key = "key2" /> , 
      <div>
         {!this.state.showCart && (<div><Pagetitle key = "key1" /></div>) }
         { this.state.showCart && (<div className="checkout"><h1 className="text-center">Checkout</h1>
         <div className="checkout-items">
           <div><h2>Your Items</h2>
           {this.state.cartData.map((product) => (
          <div className={"container"}>
            <div className={"card-body"}>
            <h5 className={"card-title"}>{product.brand} {product.product_type}</h5>
              
             
              
              <div className={"image"}><img src={product.image_link} alt={product.product_type} />
              </div>
              
       
              </div>
              <center><h5 className={"card-subtitle mb-2 text-muted price"}>
                <button type="button" className="btn btn-outline-info  " onClick={() => this.handleRemoveClick(product, totalPrice)}>Remove </button>${itemPrice}</h5></center>
                
                
          </div>
          
          
        ))}
        <h3>Total:${itemPrice*cartData.length}</h3>

        

          
           
             </div>
         
         <div>
         <form>
           <div className="form-group">
             <h2>Payment</h2>
           <input type="text" placeholder="Card Number"></input>
           <input type="text" placeholder="Name on Card"></input>
           <label>Expiration</label>
           <input type="number" placeholder="MM/YY"></input>
           
           
           <input type="number" placeholder="CVC"></input>
           <h2>Shipping Info</h2>
           <input type="text" placeholder="Address"></input>
           <input type="text" placeholder="City"></input>
           <input type="text" placeholder="Zipcode"></input>
           

           <button type="submit" className="btn btn-outline-info  " >Purchase </button> <button onClick={this._showCart.bind(null, false)} className={"btn btn-outline-info "}>Continue Shopping</button>
           </div>

         </form>
         </div>
         </div>
        
       </div>) }

      <div className={"go-to-cart"}>
        
         
        
        {!this.state.showCart &&(<div><button onClick={this._showCart.bind(null, true)} type="button" className={"btn btn-outline-info cart-btn"}>Cart
        
        </button>
        <img className={"cart-img"} src="https://image.flaticon.com/icons/png/512/34/34627.png"></img>
        <div>{this.state.cartData.length} item(s) in cart</div>
        
        </div>)}
        
        
</div>
{!this.state.showCart && (<div><Search key = "key3" /> </div>)}
</div>





      
      //<Products products = {
        //his.state.products
      //}
      //key = "key4" /> ,

     

        
      
     ];


  }
}


export default App;
