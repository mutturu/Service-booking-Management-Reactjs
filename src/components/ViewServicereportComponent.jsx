import React, { Component } from 'react'
import ServicereportService from '../services/ServicereportService'

class ViewServicereportComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            servicereport: {}
        }
    }

    componentDidMount(){
        ServicereportService.getServicereportById(this.state.id).then( res => {
            this.setState({servicereport: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View ServiceReport Details</h3>
                    <div className = "card-body">
                    <div className = "row">
                            <label> Id: </label>
                            <div> { this.state.servicereport.id }</div>
                        </div>

                        <div className = "row">
                            <label> ServiceReport SerReqId: </label>
                            <div> { this.state.servicereport.serReqId }</div>
                        </div>
                        <div className = "row">
                            <label> ServiceReport ReportDate: </label>
                            <div> { this.state.servicereport.reportDate }</div>
                        </div>
                        <div className = "row">
                            <label> ServiceReport ServiceType: </label>
                            <div> { this.state.servicereport.serviceType }</div>
                        </div>
                        <div className = "row">
                            <label> ServiceReport ActionTaken: </label>
                            <div> { this.state.servicereport.actionTaken}</div>
                        </div>
                        <div className = "row">
                            <label> ServiceReport DiagnosisDetails: </label>
                            <div> { this.state.servicereport.diagnosisDetails}</div>
                        </div>
                        <div className = "row">
                            <label> ServiceReport IsPaid: </label>
                            <div> { this.state.servicereport.isPaid}</div>
                        </div>
                        <div className = "row">
                            <label> ServiceReport VisitFees: </label>
                            <div> { this.state.servicereport.visitFees}</div>
                        </div>
                        <div className = "row">
                            <label> ServiceReport RepairDetails: </label>
                            <div> { this.state.servicereport.repairDetails}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewServicereportComponent
