import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    var petsArr = this.props.pets.map(pet => {
      return (
        <Pet
          pet = {pet}
          key = {pet.id}
          onAdoptPet = {this.props.onAdoptPet}
          isAdopted = {this.props.adoptedPets.includes(pet.id)}
        />
      )
    })
    return (
      <div className="ui cards">
        {petsArr}
      </div>
    );
  }
}

export default PetBrowser;
