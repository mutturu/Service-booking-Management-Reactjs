import React, { Component } from 'react'
import ProductService from '../services/ProductService'

class ViewProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            product: {}
        }
    }

    componentDidMount(){
        ProductService.getProductById(this.state.id).then( res => {
            this.setState({product: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Product Details</h3>
                    <div className = "card-body">
                    <div className = "row">
                            <label> Product Id: </label>
                            <div> { this.state.product.id }</div>
                        </div>

                        <div className = "row">
                            <label> Product Name: </label>
                            <div> { this.state.product.name }</div>
                        </div>
                        <div className = "row">
                            <label> Product Make: </label>
                            <div> { this.state.product.make }</div>
                        </div>
                        <div className = "row">
                            <label> Model Model: </label>
                            <div> { this.state.product.model }</div>
                        </div>
                        <div className = "row">
                            <label> Product Cost: </label>
                            <div> { this.state.product.cost }</div>
                        </div>
                        <div className = "row">
                            <label> Product CreatedDate: </label>
                            <div> { this.state.product.createdDate}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewProductComponent
