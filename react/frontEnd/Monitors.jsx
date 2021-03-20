//Imports
import React, { Component } from 'react';
import axios from 'axios';  

const MONITORS_REST_API_URL = "http://localhost:8080/api/allMonitors";
const DELETE_REST_API_URL = "http://localhost:8080/api/delete/";

class Monitor extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            monitors: []
        };
    } 

    listAllMonitors() {
        return axios.get(MONITORS_REST_API_URL);
    }

    componentDidMount() {
        listAllMonitors().then(res => {
            this.setState({ 
                monitors: res.data
            });
        });
    }

    deleteMonitor(monitorId) {
        axios.delete(DELETE_REST_API_URL + monitorId);
    }

    delete(id) {
        axios.delete(DELETE_REST_API_URL + `${id}`)
        .then(() => {
            this.componentDidMount();
        });
    }

    render() {
        return ( 
            <div className="monitorsArea">
                <h1>Monitors</h1>
                <table className="table"> 
                    <thead>
                        <tr>
                            <th>Brand</th>
                            <th>Resolution</th>
                            <th>Model</th>
                            <th>Price</th>
                        </tr>
                    </thead> 
                    <tbody>
                        {
                            this.state.monitors.map(
                                monitor =>
                                <tr key={monitor.id}>
                                    <td>{monitor.brand}</td>
                                    <td>{monitor.resolution}</td>
                                    <td>{monitor.model}</td>
                                    <td>£{monitor.price}</td>
                                </tr> 
                            )
                        }
                    </tbody> 
                </table>
            </div>
        );
    };
}

export default Monitor