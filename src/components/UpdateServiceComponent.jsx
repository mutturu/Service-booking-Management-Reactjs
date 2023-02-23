import React, { Component } from 'react'
import ServiceService from '../services/ServiceService';

class UpdateServiceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            productId: '',
            userId: '',
            reqDate: '',
            problem:'',
            description:'',
            status:''
        }
        this.changeProductIdHandler = this.changeProductIdHandler.bind(this);
        this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
        this.changeReqDateHandler = this.changeReqDateHandler.bind(this);
        this.changeProblemHandler = this.changeProblemHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.updateService = this.updateService.bind(this);
    }

    componentDidMount(){
        ServiceService.getServiceById(this.state.id).then( (res) =>{
            let service = res.data;
            this.setState({productId: service.productId,
                userId: service.userId,
                reqDate: service.reqDate,
                problem: service.problem,
                description: service.description,
                status:service.status

            });
        });
    }

    updateService = (e) => {
        e.preventDefault();
        let service = {productId: this.state.productId, userId: this.state.userId, reqDate: this.state.reqDate,problem:this.state.problem,description:this.state.description,status:this.state.status};
        console.log('service => ' + JSON.stringify(service));
        console.log('id => ' + JSON.stringify(this.state.id));
        ServiceService.updateService(service, this.state.id).then( res => {
            this.props.history.push('/services');
        });
    }
    
    changeProductIdHandler= (event) => {
        this.setState({productId: event.target.value});
    }

    changeUserIdHandler= (event) => {
        this.setState({userId: event.target.value});
    }

    changeReqDateHandler= (event) => {
        this.setState({reqDate: event.target.value});
    }
    changeProblemHandler= (event) => {
        this.setState({problem: event.target.value});
    }
    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }
    changeStatusHandler= (event) => {
        this.setState({status: event.target.value});
    }

    cancel(){
        this.props.history.push('/services');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update User</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> ProductId: </label>
                                            <input placeholder="ProductId" name="productId" className="form-control" 
                                                value={this.state.productId} onChange={this.changeProductIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> userId: </label>
                                            <input placeholder="userId" name="userId" className="form-control" 
                                                value={this.state.userId} onChange={this.changeUserIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> ReqDate: </label>
                                            <input placeholder="ReqDate" name="reqDate" className="form-control" 
                                                value={this.state.reqDate} onChange={this.changeReqDateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Problem: </label>
                                            <input placeholder="Problem" name="problem" className="form-control" 
                                                value={this.state.problem} onChange={this.changeProblemHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Status: </label>
                                            <input placeholder="Status" name="status" className="form-control" 
                                                value={this.state.status} onChange={this.changeStatusHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateService}>Update</button>
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

export default UpdateServiceComponent
