import React from 'react';

class Pet extends React.Component {
  constructor(props) {
    super(props);
  }
  returnGender() {
    var male = '♂'
    var female = '♀'
    if (this.props.pet.gender === 'male') {
      return male
    } else {
      return female
    }
  }

  adoptPet(event) {
    return this.props.onAdoptPet(this.props.pet.id)
  }


  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} (gender: {this.returnGender()})</a>
          <div className="meta">
            <span className="date">Pet type {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age} </p>
            <p>Weight: {this.props.pet.weight} </p>
          </div>
        </div>
        <div className="extra content">
          {!this.props.isAdopted && <button className="ui primary button" onClick={this.adoptPet.bind(this)}>Adopt pet</button>}
          {this.props.isAdopted && <button className="ui disabled button">Already adopted</button>}
        </div>
      </div>
    );
  }
}

export default Pet;
