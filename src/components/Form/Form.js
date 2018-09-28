import React, { Component } from 'react'
import axios from 'axios'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageUrl: '',
            productName: '',
            price: 0,
            product_id: this.props.product_id,
            edit: false
        }
    }

    componentDidUpdate(id) {
        if (id === this.props.selected) {
            let product = this.props.inventory.indexOf(this.props.selected)
            this.setState({
                imageUrl: product.imageurl,
                productName: product.productname,
                price: product.price,
                product_id: product.product_id,
                edit: true
            })
        }
    }

    handleImageChange(val) {
        this.setState({
            imageUrl: val
        })
    }

    handleProductNameChange(val) {
        this.setState({
            productName: val
        })
    }

    handlePriceChange(val) {
        this.setState({
            price: val
        })
    }

    cancelForm() {
        this.setState({
            imageUrl: '',
            productName: '',
            price: 0,
            product_id: null
        })
    }

    addToInventory() {
        const { imageUrl, productName, price } = this.state;
        console.log(imageUrl, productName, price)
        axios.post('/api/inventory/', { imageUrl, productName, price })
            .then(() => { this.props.getInventory() })
    }

    render() {
        return (
            <div>
                Form
                <h3>Images URL:</h3>
                <input onChange={(e) => { this.handleImageChange(e.target.value) }} value={this.state.imageUrl} />
                <h3>Product Name:</h3>
                <input onChange={(e) => { this.handleProductNameChange(e.target.value) }} value={this.state.productName} />
                <h3>Price:</h3>
                <input onChange={(e) => { this.handlePriceChange(e.target.value) }} value={this.state.price} />
                <button onClick={() => { this.cancelForm() }}>Cancel</button>
                {
                    this.state.product_id ?
                        <button onClick={() => { this.addToInventory() }}>Save Changes</button>
                        :
                        <button onClick={() => { this.addToInventory() }}>Add to Inventory</button>
                }
            </div>
        )
    }
}

export default Form