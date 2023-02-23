import React, { Component } from 'react'
//import UserService from '../services/UserManagementService'
import { Link } from 'react-router-dom';

class UserDashboardComponent extends Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete() {
        this.props.onDelete(this.props.char);
    }


    render() {
        return (
            <div className='row'>
                <div className='column'><br></br>
                <h2>User Management</h2><br></br>
    <p>Some text..</p> 
                <Link to="/Users" className="btn btn-primary">Click here to go User</Link>

                </div>
                <div className='column'><br></br>
                <h2>Product Mnagement</h2><br></br>
    <p>Some text..</p>
                <Link to="/Products" className="btn btn-primary">Click here to go Product</Link>

                </div>
                <div className='column'><br></br>
                <h2>Service Management</h2><br></br>
    <p>Some text..</p>
                <Link to="/servicedashboard" className="btn btn-primary">Click here to go to Services</Link>

                </div>
            </div>
            
            
  
  
        )
    }
}

export default UserDashboardComponent
