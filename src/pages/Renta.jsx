import React, { Component } from 'react';
import FormRenta from '../components/FormRenta';

// import './styles/Renta.css';
import '../assets/styles/pages/Renta.scss';

class Renta extends Component {
  render() {
    return (
      <div className="Renta__hero">
        <div className="Renta__container">
          <div className="Renta__section">
            <FormRenta/>
          </div>
        </div>
      </div>
    )
  }
}

export default Renta
