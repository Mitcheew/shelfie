import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            ph: ''
        }
        this.removeProduct = this.removeProduct.bind(this)
    }

    removeProduct(id){
        axios.delete(`/api/inventory/${id}`)
        .then(() => {this.props.getInventory()})
        .catch(err => {
            console.log(err);
        });
        
    }

    render() {
        const inv = this.props.inventory.map(product => {
            return (
                <Product key={product.product_id} setSelect={this.props.setSelect} remove={this.removeProduct} id={product.product_id} imageUrl={product.imageurl} productName={product.productname} price={product.price} />
            )
        })
        return (
            <div>
                Dashboard
                {inv}
            </div>
        )
    }
}

export default Dashboard