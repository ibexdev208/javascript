//Imports
import React, { Component } from 'react';
import { FaSave } from 'react-icons/fa';
import axios from 'axios';

const BASE_REST_API_URL = "http://localhost:8080/api/";

class EditMonitor  extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            //needed to get the id route
            id: this.props.match.params.id,
            brand: '',
            resolution: '',
            model: '',
            price: ''
        }
    }//constructor() 

    getMonitorById(monitorId) {
        return axios.get(BASE_REST_API_URL + monitorId);
    }

    updateMonitor(monitorId, monitor) {
        return axios.put(BASE_REST_API_URL + monitorId, monitor);
    }

    componentWillMount() {
        getMonitorById(this.state.id)
        .then((res) => {
            let monitor = res.data;
            this.setState({
                brand: monitor.brand,
                resolution: monitor.resolution,
                model: monitor.model,
                price: monitor.price
            });
        });
    }

    editMonitor = (e) => {
        //To prevent the browser from reloading or refreshing when the submit button is pressed 
        //the preventDefault on an event is used to alleviate this issue.
        e.preventDefault();
         let monitor = {
            brand: this.state.brand,
            resolution: this.state.resolution,
            model: this.state.model,
            price: this.state.price
        }

        updateMonitor(monitor, this.state.id).then(res => {
            this.props.history.push('/monitors')
        })
    }

    render() {
        return (
            <div className="newMonitorArea">
                <form>
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
                    <button className="btn btn-success" onClick = {this.editMonitor} type="submit" name="action"><FaSave /></button>
                </form>
            </div>
        );
    };
}

export default EditMonitor
