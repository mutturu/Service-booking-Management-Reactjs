import React, { Component } from 'react'
import ServiceService from '../services/ServiceService'

class ViewServiceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            service: {}
        }
    }

    componentDidMount(){
        ServiceService.getServiceById(this.state.id).then( res => {
            this.setState({service: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Service Details</h3>
                    <div className = "card-body">
                    <div className = "row">
                            <label> Id: </label>
                            <div> { this.state.service.id }</div>
                        </div>

                        <div className = "row">
                            <label> Service ProductId: </label>
                            <div> { this.state.service.productId }</div>
                        </div>
                        <div className = "row">
                            <label> Service userId: </label>
                            <div> { this.state.service.userId }</div>
                        </div>
                        <div className = "row">
                            <label> Service ReqDate: </label>
                            <div> { this.state.service.reqDate }</div>
                        </div>
                        <div className = "row">
                            <label> Service Problem: </label>
                            <div> { this.state.service.problem }</div>
                        </div>
                        <div className = "row">
                            <label> Service Description: </label>
                            <div> { this.state.service.description}</div>
                        </div>
                        <div className = "row">
                            <label> Service Status: </label>
                            <div> { this.state.service.status}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewServiceComponent
