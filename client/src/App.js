import React from 'react';

class App extends React.Component{
  state={data:[]}
  componentDidMount(){
    fetch(`/api/user`)
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
      <ul>
        {this.state.data.map(user=>
          <li key={user.id}> {user.name}</li>)}
          </ul>
    </div>
    )
  }
}
export default App;