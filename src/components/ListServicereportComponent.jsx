import React, { Component } from 'react'
import ServicereportService from '../services/ServicereportService'

class ListServicereportComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                servicereports: []
        }
        this.addServicereport = this.addServicereport.bind(this);
        this.editServicereport = this.editServicereport.bind(this);
        this.deleteServicereport = this.deleteServicereport.bind(this);
    }

    deleteServicereport(id){
        ServicereportService.deletereportService(id).then( res => {
            this.setState({servicereports: this.state.servicereports.filter(servicereport => servicereport.id !== id)});
        });
    }
    viewServicereport(id){
        this.props.history.push(`/view-servicereport/${id}`);
    }
    editServicereport(id){
        this.props.history.push(`/add-servicereport/${id}`);
    }

    componentDidMount(){
        ServicereportService.getServicereports().then((res) => {
            this.setState({ servicereports: res.data});
        });
    }

    addServicereport(){
        this.props.history.push('/add-servicereport/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">ServiceReport Management List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addServicereport}> Register ServiceReport</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>SerReqId</th>
                                    <th>ReportDate</th>
                                    <th>ServiceType</th>
                                    <th>ActionTaken</th>
                                    <th>DiagnosisDetails</th>
                                    <th>IsPaid</th>
                                    <th>VisitFees</th>
                                    <th>RepairDetails</th>
                                    <th>Actions                                                                  </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.servicereports.map(
                                        servicereport => 
                                        <tr key = {servicereport.id}>
                                            <td>{servicereport.serReqId}</td>
                                             <td> {servicereport.reportDate} </td>   
                                             <td> {servicereport.serviceType}</td>
                                             <td> {servicereport.actionTaken}</td>
                                             <td> {servicereport.diagnosisDetails}</td>
                                             <td> {servicereport.isPaid}</td>
                                             <td> {servicereport.visitFees}</td>
                                             <td> {servicereport.repairDetails}</td>
                                             <td>
        
                                                 <button onClick={ () => this.editServicereport(servicereport.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteServicereport(servicereport.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewServicereport(servicereport.id)} className="btn btn-info">View </button>
                
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

export default ListServicereportComponent
