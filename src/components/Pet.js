import React from 'react'

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name}
            {this.props.pet.gender === 'female' ? '♀' : '♂' }
            PET NAME
          </a>
          <div className="meta">
            <span className="date">PET TYPE</span>
            {this.props.pet.type}
          </div>
          <div className="description">
            {this.props.pet.age}
            <p>Age: PET AGE</p>
            {this.props.pet.weight}
            <p>Weight: PET WEIGHT</p>
          </div>
        </div>
        <div className="extra content">
        {this.props.pet.isAdopted ? (
          <button className="ui disabled button">Already adopted</button>
        ) : (
          <button 
          onClick={() => this.props.onAdoptPet(this.props.pet.id)}
          className="ui primary button">Adopt pet</button>
          )}
        
        </div>
      </div>
    )
  }
}

export default Pet
