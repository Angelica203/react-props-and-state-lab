import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
  onChangeType = ({target: { value }}) => {
    this.setState({
      filters: {...this.state.filters, type: value}
    })
  }
fetchPets = () => {
  let  endpoint = '/api/pets';

  {this.state.filters.type ? 'all' : endpoint += `?type=${this.state.filters.type}`}
    // endpoint += `{?type=}`
    fetch(endpoint)
    .then(r => r.json())
    .then(pets => this.setState({pets: pets}))
  

};


 

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
                onChangeType={this.filters.type}
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column" onChhange>
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
