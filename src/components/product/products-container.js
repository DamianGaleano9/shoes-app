import React, {Component} from "react";
import ProductItem from "./product-item";



export default class ProductContainer extends Component {
    constructor() {
        console.log('Products is render');
        super();

        this.state = {
            pageName: "Welcome to my eCommerce",
            data : [
                {name: "aj1dior"},
                {name: "banned"},
                {name:  "Shatters"}, 
                {name: "metallicpurple"},
                {name: "midnightnavy"},
                {name: "neutralgray"},
                {name: "obsidian"},
                {name: "shadow"},
                {name: "shattered"},
                {name: "shatteredbackboard"},
                {name: "spiderman"},
                {name: "trophyroom"},

            ]
        }


        this.handlePageNameUpdate = this.handlePageNameUpdate.bind(this);
    }


    productsItems() {
        return this.state.data.map(item => {
            return <ProductItem name={item.name} url={"Google"}/>
        })
    }

    handlePageNameUpdate() {
        this.setState({
            pageName: "Welcome Damian"
        })
    }


    render () {
        return (
            <div>
                {this.productsItems()} 
                {this.state.pageName}
            </div>
        )
    }
}
