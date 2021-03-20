//Imports
import React, { Component } from 'react';
import { FaSave } from 'react-icons/fa';
import axios from 'axios';

const CREATE_REST_API_URL = "http://localhost:8080/api/monitor/add";

class AddMonitor extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            brand: '',
            resolution: '',
            model: '',
            price: ''
        } 
    }//constructor()  

    initialState = { 
        brand: '',
        resolution: '',
        model: '',
        price: ''
     }

    createMonitor(monitor) {
        return axios.post(CREATE_REST_API_URL, monitor);
    }

    saveMonitor = (e) => {
        e.preventDefault();
        let monitor = {
            brand: this.state.brand,
            resolution: this.state.resolution,
            model: this.state.model,
            price: this.state.price
        }

        createMonitor(monitor).then(res => {
            //Reset all fields
            this.setState(() => this.initialState);
        });
    }

    render() {
        return (
            <div className="newMonitorArea">
                <form id="myForm">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Brand:</td><td><input type="text" id="brand" name="brand"
                                onChange={(e) => this.setState({brand: e.target.value})} value={this.state.brand} /></td>
                            </tr>
                            <tr>
                                <td>Resolution:</td><td><input type="text" id="resolution" name="resolution"
                                onChange={(e) => this.setState({resolution: e.target.value})} value={this.state.resolution} /></td>
                            </tr>
                            <tr>
                                <td>Model:</td><td><input type="text" id="model" name="model"
                                onChange={(e) => this.setState({model: e.target.value})} value={this.state.model} /></td>
                            </tr>
                            <tr>
                                <td>Price:</td><td><input type="text" id="price" name="price"
                                onChange={(e) => this.setState({price: e.target.value})} value={this.state.price} /></td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="btn btn-success" onClick = {this.saveMonitor} type="submit"><FaSave /></button>
                </form>
            </div>
        );
    };
}

export default AddMonitor
