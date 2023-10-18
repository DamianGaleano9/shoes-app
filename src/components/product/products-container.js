import React, {Component} from "react";
import ProductItem from "./product-item";



export default class ProductContainer extends Component {
    constructor() {
        console.log('Products is render');
        super();
    }


    productsItems() {
        const data = ["Air Jordan", "Air force1", "Shatters", "Air"];

        return data.map(item => {
            return <ProductItem title={item} price={2.122}/>
        })
    }
    render () {
        return (
            <div>
                {this.productsItems()}
            </div>
        )
    }
}
