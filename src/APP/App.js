import React from 'react';
import './App.css';
import CardList from '../APP/components/card-list/card-list.component'
import SearchBox from '../APP/components/search-box/search.component'
import Axios from 'axios'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      persons: [],
      searchFiled: ''
    }
  }


  async componentDidMount() {
    const response = await Axios.get('https://jsonplaceholder.typicode.com/users')
    const persons = response.data

    this.setState({ persons })
  }
  onChangeEvent = (e) => {
    this.setState({ searchFiled: e.target.value })
  }

  render() {
    const filterData = this.state.persons.filter(person =>
      person.name.toLowerCase().includes(this.state.searchFiled.toLowerCase())
    )

    return (
      <div className="App">
        <h1>Rolodex</h1>
        <SearchBox
          placeholder='Search Monoster'
          onChangeEvent={this.onChangeEvent}
        />
        <CardList persons={filterData} />
      </div>
    )
  }
}

export default App;
