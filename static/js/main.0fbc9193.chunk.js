(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),o=(a(14),a(1)),i=a(2),s=a(4),u=a(3),m=a(5),d=[],h=Math.floor(Math.random()*Math.floor(100)+1),p=0,E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",data:[],filteredData:[],cartData:[],totalPrice:p,itemPrice:h},a.handleInputChange=function(e){var t=e.target.value;a.setState((function(e){var a=e.data.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return{query:t,filteredData:a}}))},a.getData=function(){fetch("https://makeup-api.herokuapp.com/api/v1/products.json").then((function(e){return e.json()})).then((function(e){var t=a.state.query,n=e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));a.setState({data:e,filteredData:n})}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.getData()}},{key:"handleAddToCartClick",value:function(e){p+=h,d.push(e),this.setState({cartData:d,totalPrice:p,itemPrice:h}),alert("Item successfully added to cart!")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"searchForm"},r.a.createElement("div",{className:"main"}),r.a.createElement("form",null,r.a.createElement("input",{placeholder:"Search for...",value:this.state.query,onChange:this.handleInputChange})),r.a.createElement("div",{className:"main"},this.state.filteredData.map((function(t){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.brand," ",t.product_type),r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:t.image_link,alt:t.product_type})),r.a.createElement("center",null,r.a.createElement("h5",{className:"card-subtitle mb-2 text-muted price"},r.a.createElement("button",{type:"button",className:"btn btn-outline-info ",onClick:function(){return e.handleAddToCartClick(t)}},"Add to Cart"),"$",h))))}))))}}]),t}(r.a.Component),f=a(8),v=function(e){return Object(f.a)(e),r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Makeup-API Project"))},b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",products:[],filteredProducts:[],cartData:[],totalPrice:p,itemPrice:h,showCart:!1},a._showCart=function(e){a.setState({showCart:e})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://makeup-api.herokuapp.com/api/v1/products.json").then((function(e){return e.json()})).then((function(t){e.setState({products:t,cartData:d})})).catch(console.log)}},{key:"handleRemoveClick",value:function(e,t){t-=h,d.pop(e),alert("Item has been removed"),this.setState({cartData:d,totalPrice:t})}},{key:"render",value:function(){var e=this;return[r.a.createElement("div",null,!this.state.showCart&&r.a.createElement("div",null,r.a.createElement(v,{key:"key1"})),this.state.showCart&&r.a.createElement("div",{className:"checkout"},r.a.createElement("h1",{className:"text-center"},"Checkout"),r.a.createElement("div",{className:"checkout-items"},r.a.createElement("div",null,r.a.createElement("h2",null,"Your Items"),this.state.cartData.map((function(t){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.brand," ",t.product_type),r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:t.image_link,alt:t.product_type}))),r.a.createElement("center",null,r.a.createElement("h5",{className:"card-subtitle mb-2 text-muted price"},r.a.createElement("button",{type:"button",className:"btn btn-outline-info  ",onClick:function(){return e.handleRemoveClick(t,p)}},"Remove "),"$",h)))})),r.a.createElement("h3",null,"Total:$",h*d.length)),r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("h2",null,"Payment"),r.a.createElement("input",{type:"text",placeholder:"Card Number"}),r.a.createElement("input",{type:"text",placeholder:"Name on Card"}),r.a.createElement("label",null,"Expiration"),r.a.createElement("input",{type:"number",placeholder:"MM/YY"}),r.a.createElement("input",{type:"number",placeholder:"CVC"}),r.a.createElement("h2",null,"Shipping Info"),r.a.createElement("input",{type:"text",placeholder:"Address"}),r.a.createElement("input",{type:"text",placeholder:"City"}),r.a.createElement("input",{type:"text",placeholder:"Zipcode"}),r.a.createElement("button",{type:"submit",className:"btn btn-outline-info  "},"Purchase ")," ",r.a.createElement("button",{onClick:this._showCart.bind(null,!1),className:"btn btn-outline-info "},"Continue Shopping")))))),r.a.createElement("div",{className:"go-to-cart"},!this.state.showCart&&r.a.createElement("div",null,r.a.createElement("button",{onClick:this._showCart.bind(null,!0),type:"button",className:"btn btn-outline-info cart-btn"},"Cart"),r.a.createElement("img",{className:"cart-img",src:"https://image.flaticon.com/icons/png/512/34/34627.png"}),r.a.createElement("div",null,this.state.cartData.length," item(s) in cart"))),!this.state.showCart&&r.a.createElement("div",null,r.a.createElement(E,{key:"key3"})," "))]}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.0fbc9193.chunk.js.map