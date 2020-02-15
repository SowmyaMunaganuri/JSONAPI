import React from 'react';

class App extends React.Component{
  state={data:[],name:''}
  componentDidMount(){
    fetch(`/api/user`)
    .then((response)=>response.json())
    .then((responseJson)=>
       this.setState({
           data:responseJson
         })
       )
    }
    onChange=e=>{
      this.setState({
        [e.target.name]:e.target.value})
    }
    handlesubmit=e=>{
      e.preventDefault();
      fetch(`/api/user/post`, {
        method: 'POST',
        body: JSON.stringify({
          id:(Object.keys(this.state.data).length)+1,
          name: this.state.name
        }),
        headers: {"Content-Type": "application/json"}
      })
    .then((response)=>response.json())
    .then((responseJson)=>
       this.setState({
           data:responseJson
         })
       )
    }
  render(){
    return(
    <div>
      <input type="text" value={this.state.name} name="name" onChange={e=>this.onChange(e)} />
      <button onClick={e=>this.handlesubmit(e)}>SUBMIT</button>
      <ul>
        {this.state.data.map(user=>
          <li key={user.id}> {user.name}</li>)}
          </ul>
    </div>
    )
  }
}
export default App;