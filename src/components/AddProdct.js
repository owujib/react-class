import React, { Component } from 'react';

class AddProdct extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      img: '',
      price: '',
      quantity: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
      //   img: e.target.value,
      //   price: e.target.value,
      //   quantity: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addProduct(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">name</label>
            <input
              type="text"
              value={this.state.name}
              id="name"
              onChange={this.handleChange}
              name="name"
              placeholder="enter product name"
            />
          </div>
          <div>
            <label htmlFor="name">price</label>
            <input
              type="text"
              value={this.state.price}
              id="price"
              onChange={this.handleChange}
              name="price"
              placeholder="enter product price"
            />
          </div>
          <div>
            <label htmlFor="name">quantity</label>
            <input
              type="text"
              value={this.state.quantity}
              id="quantity"
              onChange={this.handleChange}
              name="quantity"
              placeholder="enter product quantity"
            />
          </div>
          <div>
            <label htmlFor="name">image</label>
            <input
              type="text"
              value={this.state.img}
              id="image"
              onChange={this.handleChange}
              name="image"
              placeholder="enter product url here"
            />
          </div>
          <input type="submit" value="add product" />
        </form>
      </div>
    );
  }
}

export default AddProdct;
