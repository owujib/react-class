import React from 'react';
import '../App.css';

class ProductList extends React.Component {
  render() {
    const products = this.props.products;
    const productList = products.map((element) => {
      return (
        <div key={element.id} className="product-content">
          <img src={element.img} alt={element.name} />
          <p className="p-3">name: {element.name}</p>
          <p className="p-3">price: &#8358;{element.price}</p>
          <p className="p-3">quantity: {element.quantity}</p>
        </div>
      );
    });
    return (
      <div>
        <h1> a list of projects sitting here</h1>
        <div className="product-container">{productList}</div>
      </div>
    );
  }
}

export default ProductList;
