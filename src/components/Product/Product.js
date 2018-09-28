import React from 'react'

function Product(props) {
    const select = {
        id: props.id, 
        imageUrl: props.imageUrl,
        productName: props.productName,
        price: props.price
    }
    return (
        <div>
            <img src={select.imageUrl} alt="" />
            <h3>{select.productName}</h3>
            <p>{select.price}</p>
            <button onClick={() => {props.setSelect(select)}}>Edit</button>
            <button onClick={() => {props.remove(props.id)}}>Delete</button>
        </div>
            )
        }
        
export default Product