import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      inventory: [],
      selected: {}
    }
    this.getInventory = this.getInventory.bind(this)
    this.setSelected = this.setSelected.bind(this)
  }

  componentDidMount() {
    this.getInventory()
  }

  getInventory(){
    axios.get('/api/inventory/')
    .then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }

  setSelected(val){
    this.setState({
      selected: val
    })
  }

  render() {
    console.log(this.state.selected)
    return (
      <div className="App">
        <Dashboard getInventory={this.getInventory} setSelect={this.setSelected} inventory={this.state.inventory} />
        <Form getInventory={this.getInventory} selected={this.state.selected} inventory={this.state.inventory} />
        <Header />
      </div>
    );
  }
}

export default App;
