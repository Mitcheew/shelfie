import React from 'react'

function Product(props) {
    return (
        <div>
            <div>
                <img src={props.imageUrl} alt=""/>
                <h3>{props.productName}</h3>
                <p>{props.price}</p>
            </div>
        </div>
    )
}

export default Product