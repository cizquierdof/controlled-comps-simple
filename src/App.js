import React, { Component } from 'react'
import Search from './components/Search'
import TablaFiltrada from './components/TablaFiltrada'
import axios from 'axios'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      filtro: ''
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(result => this.setState({ posts: result.data }));
  }

  onChangeInputHandler = e => {
    this.setState({ filtro: e.target.value });
  }

  render() {
    return (
      <div>
        <Search setFilter={this.onChangeInputHandler} />
        <TablaFiltrada datos={this.state.posts} filtro={this.state.filtro} />
      </div>
    )
  }
}

export default App

