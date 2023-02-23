import React, { Component } from 'react'
import UserManagementService from '../services/UserManagementService'

class ViewUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            user: {}
        }
    }

    componentDidMount(){
        UserManagementService.getUserById(this.state.id).then( res => {
            this.setState({user: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View User Details</h3>
                    <div className = "card-body">
                    <div className = "row">
                            <label> Id: </label>
                            <div> { this.state.user.id }</div>
                        </div>

                        <div className = "row">
                            <label> User Name: </label>
                            <div> { this.state.user.name }</div>
                        </div>
                        <div className = "row">
                            <label> User Password: </label>
                            <div> { this.state.user.password }</div>
                        </div>
                        <div className = "row">
                            <label> User Email ID: </label>
                            <div> { this.state.user.emailId }</div>
                        </div>
                        <div className = "row">
                            <label> User Mobile: </label>
                            <div> { this.state.user.mobile }</div>
                        </div>
                        <div className = "row">
                            <label> User RegistrationDate: </label>
                            <div> { this.state.user.registrationDate}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewUserComponent
