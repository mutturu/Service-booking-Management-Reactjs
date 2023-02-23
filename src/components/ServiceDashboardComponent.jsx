import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class ServiceDashboardComponent extends Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete() {
        this.props.onDelete(this.props.char);
    }


    render() {
        return (
            <div>
                <table>
                    <thread>
                        <tr>
                        <th> </th><br></br><td></td>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        </tr>
                    </thread>
                    <tbody>
                    <tr>
                        <td> </td>
                        <td> <Link to="/services" className="btn btn-primary">Click here to go Service</Link><br></br></td>
                        <td></td>
        
                        <td><Link to="/servicereports" className="btn btn-primary">Click here to go Service Report</Link></td>
                        <td> </td>
            
                        </tr>
                    </tbody>
                </table>
            
            </div>
            
            
  
  
        )
    }
}

export default ServiceDashboardComponent
