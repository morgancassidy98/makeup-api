import React from 'react'

const cartData = []
var itemPrice = Math.floor(Math.random() * Math.floor(100)+1);
var totalPrice = 0;



class Search extends React.Component{

  
 

state = {
      query: "",
      data: [],
      filteredData: [],
      cartData:[],
      totalPrice,
      itemPrice
    
      
    };
  
    handleInputChange = event => {
      const query = event.target.value;
  
      this.setState(prevState => {
        const filteredData = prevState.data.filter(element => {
          return element.name.toLowerCase().includes(query.toLowerCase());
        });
  
        return {
          query,
          filteredData
        };
      });
    };
  
    getData = () => {
      fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
        .then(response => response.json())
        .then(data => {
         
          const { query } = this.state;
          const filteredData = data.filter(element => {
            return element.name.toLowerCase().includes(query.toLowerCase());
          });
  
          this.setState({
            data,
            filteredData,
            
            
          });
        });
    };
  
    componentWillMount() {
      this.getData();
    }
    


    handleAddToCartClick(product){
      totalPrice = totalPrice+itemPrice;
     
     
      
      
      fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
        .then(response => response.json())
        .then(data => {
          cartData.push(product);
          
          
         
         //const cartData= data.filter(element => {
           
            //return element;
            
           
         // });
     
        this.setState({
            data,
            cartData,
            totalPrice,
            itemPrice
           
           
            
          });
          alert("Item successfully added to cart!");
         
         
          });
       
        
    }
  
    
  
  
    render() {
      
      return (
        
    
        
        <div className="searchForm">
              <div className={"main"}>
             
      
        </div>
          <form>
            <input
              placeholder="Search for..."
              value={this.state.query}
              onChange={this.handleInputChange}
            />
          </form>
          <div className={"main"}>
          {this.state.filteredData.map((product) => (
            <div className={"container"}>
              <div className={"card-body"}>
              <h5 className={"card-title"}>{product.brand} {product.product_type}</h5>
                
               
                
                <div className={"image"}><img src={product.image_link} alt={product.product_type} />
                </div>
                <center><h5 className={"card-subtitle mb-2 text-muted price"}>
                
                   <button type="button" className="btn btn-outline-info " onClick={() => this.handleAddToCartClick(product)}>Add to Cart</button>${itemPrice}</h5></center>
                </div>
            </div>
            
          ))}
          </div>
        </div>
      );
    }
  }




export default Search;
export {cartData};
export {totalPrice};
export {itemPrice};





