// function getProductList(){
//   return [
//     {
//       picture: '../assets/images/products/product-1.jpg',
//       name: 'Limited Price',
//       price: 299,
//       onsale: true
//     },
//     {
//       picture: '../assets/images/products/product-2.jpg',
//       name: 'Amazing Product',
//       price: 299,
//       onsale: false
//     },
//     {
//       picture: '../assets/images/products/product-3.jpg',
//       name: 'New Product',
//       price: 79,
//       onsale: false
//     },
//     {
//       picture: '../assets/images/products/product-4.jpg',
//       name: 'Limited Price',
//       price: 99,
//       onsale: true
//     }
//   ]
// }

// document.addEventListener('DOMContentLoaded', function(){
//
//   var parent   = document.querySelector('#product-list .row');
//   var products = getProductList();
//   for(var i=0;i<products.length;i++){
//     var element  = document.createElement('div');
//     element.setAttribute('class', 'col-xs-12 col-sm-6 col-md-3 product-box');
//     element.innerHTML = (products[i].onsale ? `<span class="on-sale-bubble">Sale!</span>` : ``)+`
//     <div class="product">
//         <a href="#" class="add-to-card">Add to card</a>
//         <a href ="product.html">
//             <img src="`+products[i].picture+`">
//         </a>
//
//         <div class="thumb-info">
//             <a href="#">
//                 <h4>`+products[i].name+`</h4>
//
//                 <h3>$`+products[i].price+`</h3>
//             </a>
//         </div>
//     </div>`;
//     parent.appendChild(element);
//   }
// })
document.addEventListener('DOMContentLoaded',function(){
    var products = getProductList();
    //es6 template syntax
    var templateProduct = `<div class="product">
        <a href="#" class="add-to-card">Add to cart</a>
        __ONSALE__
        <a href ="product.html?id=__ID__">
            <img src="__PICTURE__">
        </a>

        <div class="thumb-info">
            <a href="#">
                <h4> __NAME__</h4>

                <h3>$__PRICE__</h3>
            </a>
        </div>
    </div>`;
    //get a reference to our product list container
    var productListNode =  document.querySelector('#product-list .row');
    var onSaleTemplate = '<span class="on-sale-bubble">Sale!</span>';
    for(var i=0;i<products.length;i++) {
      var div = document.createElement('div');
      div.className = 'col-xs-12 col-sm-6 col-md-3 product-box';
      var productHTML = templateProduct.replace('__NAME__', products[i].name)
                                       .replace('__PRICE__', products[i].price)
                                       .replace('__PICTURE__', products[i].picture)
                                       .replace('__ID__',i);
      //is the product on Sale?
      var onSaleString = products[i].onSale ? onSaleTemplate : '';
      productHTML = productHTML.replace('__ONSALE__', onSaleString);
      div.innerHTML = productHTML;
      productListNode.appendChild(div);
    }
})
