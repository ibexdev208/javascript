#Basic React Font-End Application&nbsp;
These components can be integrated into a full-stack project with any REST API to dynamically populate data to the clientside.

##AXIOS
- Make XMLHttpRequests from the browser
- Make http requests from node.js
- Supports the Promise API
- Intercept request and response
- Transform request and response data
- Cancel requests
- Automatic transforms for JSON data
- Client side support for protecting against XSRF
[read more...](https://github.com/axios/axios)

&nbsp;
##The Constructor&nbsp;
The object state in the constructor is a data holder awaiting to be rendered, it also puts the object at the component's disposal. This object will be sorted in an array objects [monitors] upon return from the API call.
The prop's role in the other hand is to pass the state data from the parent to the child component, it is similar to a HTML attribute, data is pass down the three as a prop.

>constructor(props) {
>super(props);
>this.state = {
>monitors: []
>
>}

&nbsp;
##ComponentDidMount Method&nbsp;
The method below will be called as soon the component has mounted hence its name. 
Once mounted the componentDidMount will make the API request and store the returned data (payload) in the monitors’ array declared in the constructor.
When the response is received with the data the state is updated then the render method is also updated.

>componentDidMount() {
>listAllMonitors().then(res => {
>this.setState({ 
>monitors: res.data
>});
>});
>}

##Rendering All Monitors&nbsp;
The render method is exposed from the ReactDOM that React calls during the render phase which is where React decides what changes ought to be made to the DOM. The render() is one of the lifecycle methods. 
Once the mapped state returns a payload (data) it is looped through, each item is displayed in a HTML tag of your choosing, the map is a higher-order function (i.e. takes one or more functions as arguments, returns a function as its result).
The key denotes the uniqueness of each row by means of item.id, hence updating only the item that needs to be.

>{
>this.state.monitors.map(
>monitor =>
><tr key={monitor.id}>
><td>{monitor.brand}</td>
><td>{monitor.resolution}</td>
><td>{monitor.model}</td>
><td>£{monitor.price}</td>
></tr> 
>)
>}

&nbsp;
##Components&nbsp;
The project is composed of three components that are needed to complete the CRUD functionalities.
Components can be said to be independent, isolated and reusable pieces of codes that can be used throughout the application provided they are imported where needed.
Components are function or class-based when called they render an output.
Components can be used in conjunction with other components to create larger and more complex applications.
e.g. setting all regions on a page from other components such as the header, footer, navBar etc...

&nbsp;
###Monitors&nbsp;
This component gives the possibility to get all monitors from the back-end and display them in a table by mean of an AXIOS GET.

&nbsp;
###AddMonitor&nbsp;
This component calls the add end-point through AXIOS with the POST method, then gets input's field values subsequently call the saveMonitor method to insert them into the database. Input fields are reset when the initialState object is called.

&nbsp;
###EditMonitor&nbsp;
This component pulls the data that matches the ID passed in the URL once saved the editMonitor method is called.
