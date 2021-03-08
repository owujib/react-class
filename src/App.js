import React from 'react';
import './App.css';
import AddProdct from './components/AddProdct';
import ProductList from './components/ProductList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          name: 'canned fish',
          quantity: 3,
          price: '500',
          img:
            'https://thumbor.thedailymeal.com/SsRiaP4qCn2HvUK4DbTiL8eD93A=/870x565/filters:format(webp)/https://www.thedailymeal.com/sites/default/files/story/2016/Sardines%20ThinkstockPhotos594018716.jpg',
        },
        {
          id: 2,
          name: 'fresh bacon',
          quantity: 3,
          price: '1500',
          img:
            'https://cdn.savorybutcher.com/products/pork/bacon/fresh-thick-cut-bacon-l.jpg',
        },
        {
          id: 3,
          name: 'bottle of milk',
          quantity: 3,
          price: '2000',
          img:
            'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator.com/news/science/children-who-drink-whole-milk-less-likely-to-be-obese-study/10510678-1-eng-GB/Children-who-drink-whole-milk-less-likely-to-be-obese-Study.jpg',
        },
        {
          id: 4,
          name: 'fresh cabbage',
          quantity: 3,
          price: '100',
          img:
            'https://assets.bonappetit.com/photos/57e1b4225a14a530086f03d7/master/pass/ttar_cabbage_03_h_launch.jpg',
        },
      ],
    };
  }

  addProduct = (data) => {
    let newId = this.state.products.length + 1;
    const { name, price, quantity, img } = data;
    let newProduct = {
      id: newId,
      name: name,
      price: price,
      quantity: quantity,
      img: img,
    };
    this.setState({
      products: [...this.state.products, newProduct],
    });
  };

  render() {
    return (
      <div className="App">
        <ProductList products={this.state.products} />

        <AddProdct addProduct={this.addProduct} />
      </div>
    );
  }
}

export default App;
