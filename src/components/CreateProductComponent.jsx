import React, { Component } from 'react'
import ProductService from '../services/ProductService';

class CreateProductComponent extends Component {
    constructor(props) {

        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
            make: '',
            model: '',
            cost:'',
            createdDate:''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeMakeHandler = this.changeMakeHandler.bind(this);
        this.changeModelHandler = this.changeModelHandler.bind(this);
        this.changeCostHandler = this.changeCostHandler.bind(this);
        this.changeCreatedDateHandler = this.changeCreatedDateHandler.bind(this);
        this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            ProductService.getProductById(this.state.id).then( (res) =>{
                let product = res.data;
                this.setState({name: product.name,
                    make: product.make,
                    model : product.model,
                    cost: product.cost,
                    createdDate:product.createdDate
                });
            });
        }        
    }
    saveOrUpdateProduct = (e) => {
        e.preventDefault();
        let product = {name: this.state.name, make: this.state.make, model: this.state.model,cost: this.state.cost,createdDate: this.state.createdDate};
        console.log('product => ' + JSON.stringify(product));

        // step 5
        if(this.state.id === '_add'){
            ProductService.createProduct(product).then(res =>{
                this.props.history.push('/products');
            });
        }else{
            ProductService.updateProduct(product, this.state.id).then( res => {
                this.props.history.push('/products');
            });
        }
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeMakeHandler= (event) => {
        this.setState({make: event.target.value});
    }

    changeModelHandler= (event) => {
        this.setState({model: event.target.value});
    }
    changeCostHandler= (event) => {
        this.setState({cost: event.target.value});
    }

    changeCreatedDateHandler= (event) => {
        this.setState({createdDate: event.target.value});
    }

    cancel(){
        this.props.history.push('/products');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Product</h3>
        }else{
            return <h3 className="text-center">Update Product</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Make: </label>
                                            <input placeholder="Make" name="make" className="form-control" 
                                                value={this.state.make} onChange={this.changeMakeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Model: </label>
                                            <input placeholder="Model" name="model" className="form-control" 
                                                value={this.state.model} onChange={this.changeModelHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Cost: </label>
                                            <input placeholder="Cost" name="cost" className="form-control" 
                                                value={this.state.cost} onChange={this.changeCostHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Created Date: </label>
                                            <input placeholder="CreatedDate" name="createdDate" className="form-control" 
                                                value={this.state.createdDate} onChange={this.changeCreatedDateHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateProduct}>Register</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateProductComponent
