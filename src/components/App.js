import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  changeFilters(type) {
    this.setState({
      ...this.state,
      filters: {
        type: type
      }
    })
  }

  addAdoptedPet(petId) {
    this.setState({
      ...this.state,
      adoptedPets: [...this.state.adoptedPets, petId]
    })
  }

  fetchPets = () => {
    let url = '/api/pets'

    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`
    }

    fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({ pets }))
  }


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
              filters={this.state.filters}
              onChangeType={this.changeFilters.bind(this)}/>
              onFindPetsClick={this.fetchPets}
            </div>
            <div className="twelve wide column">
              <PetBrowser
              pets={this.state.pets}
              adoptedPets={this.state.adoptedPets}
              onAdoptPet={this.addAdoptedPet.bind(this)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
