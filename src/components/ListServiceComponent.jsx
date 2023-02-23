import React, { Component } from 'react'
import ServiceService from '../services/ServiceService'

class ListServiceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                services: []
        }
        this.addService = this.addService.bind(this);
        this.editService = this.editService.bind(this);
        this.deleteService = this.deleteService.bind(this);
    }

    deleteService(id){
        ServiceService.deleteService(id).then( res => {
            this.setState({services: this.state.services.filter(service => service.id !== id)});
        });
    }
    viewService(id){
        this.props.history.push(`/view-service/${id}`);
    }
    editService(id){
        this.props.history.push(`/add-service/${id}`);
    }

    componentDidMount(){
        ServiceService.getServices().then((res) => {
            this.setState({ services: res.data});
        });
    }

    addService(){
        this.props.history.push('/add-service/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Service Management List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addService}> Register Service</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Service ProductId</th>
                                    <th> Service UserId</th>
                                    <th> Service ReqDate</th>
                                    <th> Service Problem</th>
                                    <th> Service Description</th>
                                    <th> Service Status</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.services.map(
                                        service => 
                                        <tr key = {service.id}>
                                            <td>{service.productId}</td>
                                             <td> {service.userId} </td>   
                                             <td> {service.reqDate}</td>
                                             <td> {service.problem}</td>
                                             <td> {service.description}</td>
                                             <td> {service.status}</td>
                                             <td>
                                                 <button onClick={ () => this.editService(service.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteService(service.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewService(service.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListServiceComponent
