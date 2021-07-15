import React from 'react' 


class App extends React.Component {

    componentDidMount() {
      fetch('http://localhost3000/api/v1/accounts')
      .then(response => response.json())
      .then(data => console.log(data))
    }
  render() {
    return (
      <div className="App">
         App
      </div>
    );
  }
  
}

export default App;
