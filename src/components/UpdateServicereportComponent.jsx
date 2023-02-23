import React, { Component } from 'react'
import ServicereportService from '../services/ServicereportService';

class UpdateServicereportComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            serReqId: '',
            reportDate: '',
            serviceType: '',
            actionTaken:'',
            diagonsisDetails:'',
            isPaid:'',
            visitFees:'',
            repairDetails:''
        }
        this.changeSerReqIdHandler = this.changeSerReqIdHandler.bind(this);
        this.changeReportDateHandler = this.changeReportDateHandler.bind(this);
        this.changeServiceTypeHandler = this.changeServicetypeHandler.bind(this);
        this.changeActionTakenHandler = this.changeActionTakenHandler.bind(this);
        this.changeDiagnosisDetailsHandler = this.changeDiagnosisDetailsHandler.bind(this);
        this.changeIsPaidHandler = this.changeIsPaidHandler.bind(this);
        this.changeVisitFeesHandler = this.changeVisitFeesHandler.bind(this);
        this.changeRepairDetailsHandler = this.changeRepairDetailsHandler.bind(this);
        this.updateServicereport = this.updateServicereport.bind(this);
    }

    componentDidMount(){
        ServicereportService.getServicereportById(this.state.id).then( (res) =>{
            let servicereport = res.data;
            this.setState({serReqId: servicereport.serReqId,
                reportDate: servicereport.reportDate,
                serviceType: servicereport.serviceType,
                actionTaken: servicereport.actionTaken,
                diagonsisDetails: servicereport.diagonsisDetails,
                isPaid:servicereport.isPaid,
                visitFees:servicereport.visitFees,
                repairDetails:servicereport.repairDetails

            });
        });
    }

    updateServicereport = (e) => {
        e.preventDefault();
        let servicereport = {serReqId: this.state.serReqId, reportDate: this.state.reportDate, serviceType: this.state.serviceType,actionTaken:this.state.actionTaken,diagonsisDetails:this.state.diagonsisDetails,isPaid:this.state.isPaid,visitFees:this.state.visitFees,repairDetails:this.state.repairDetails};
        console.log('servicereport => ' + JSON.stringify(servicereport));
        console.log('id => ' + JSON.stringify(this.state.id));
        ServicereportService.updateServicereport(servicereport, this.state.id).then( res => {
            this.props.history.push('/servicereports');
        });
    }
    
    changeSerReqIdHandler= (event) => {
        this.setState({serReqId: event.target.value});
    }

    changeReportDateHandler= (event) => {
        this.setState({reportDate: event.target.value});
    }

    changeServiceTypeHandler= (event) => {
        this.setState({serviceType: event.target.value});
    }
    changeActionTakenHandler= (event) => {
        this.setState({actionTaken: event.target.value});
    }
    changeDiagnosisDetailsHandler= (event) => {
        this.setState({description: event.target.value});
    }
    changeIsPaidHandler= (event) => {
        this.setState({isPaid: event.target.value});
    }
    changeVisitFeesHandler= (event) => {
        this.setState({visitFees: event.target.value});
    }
    changeRepairDetailsHandler= (event) => {
        this.setState({repairDetails: event.target.value});
    }

    cancel(){
        this.props.history.push('/servicereports');
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
                                            <label> SerReqId: </label>
                                            <input placeholder="SerReqId" name="serReqId" className="form-control" 
                                                value={this.state.serReqId} onChange={this.changeSerReqIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> ReportDate: </label>
                                            <input placeholder="ReportDate" name="reportDate" className="form-control" 
                                                value={this.state.reportDate} onChange={this.changeReportDateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> ServiceType: </label>
                                            <input placeholder="ServiceType" name="serviceType" className="form-control" 
                                                value={this.state.serviceType} onChange={this.changeServiceTypeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> ActionTaken: </label>
                                            <input placeholder="ActionTaken" name="actionTaken" className="form-control" 
                                                value={this.state.actionTaken} onChange={this.changeActionTakenHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> DiagnosisDetails: </label>
                                            <input placeholder="DiagnosisDetails" name="diagnosisDetails" className="form-control" 
                                                value={this.state.diagonsisDetails} onChange={this.changeDiagnosisDetailsHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> IsPaid: </label>
                                            <input placeholder="IsPaid" name="isPaid" className="form-control" 
                                                value={this.state.isPaid} onChange={this.changeIsPaidHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> VisitFees: </label>
                                            <input placeholder="VisitFees" name="visitFees" className="form-control" 
                                                value={this.state.visitFees} onChange={this.changeVisitFeesHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> RepairDetails: </label>
                                            <input placeholder="RepairDetails" name="repairDetails" className="form-control" 
                                                value={this.state.repairDetails} onChange={this.changeRepairDetailsHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateServicereport}>Update</button>
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

export default UpdateServicereportComponent
