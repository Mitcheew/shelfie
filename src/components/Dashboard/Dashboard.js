import React, { Component } from 'react'
import Product from '../Product/Product'

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        const inv = this.props.inventory.map(product => {
            return (
                <Product key={product.product_id} imageUrl={product.imageurl} productName={product.productname} price={product.price} />
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