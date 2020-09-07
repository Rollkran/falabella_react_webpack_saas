import React, { Component } from 'react';
import Form from '../components/Form';

// import './styles/Home.css';
import '../assets/styles/pages/Home.scss'
import logoCMR from '../assets/static/ico-cmr.png';
import logoUnica from '../assets/static/opu.png';
import logoVisa from '../assets/static/visa-blue-png-2.png';

class Home extends Component {
  render() {
    return (
      <div className="Home__hero">
        <div className="Home__container">
          {/* <div className="row"> */}
          <div className="Home__section">

            <h1>Tu Cuenta Corriente<br />
              <strong>100% on line</strong>
            </h1>
            <div className="Home__menu">
              <div className="Menu__item">
                <img src={logoCMR} alt="" className="img-fluid Menu__image" />
                <label>Acumula<br />CMR Puntos</label>
              </div>
              <div className="Menu__item">
                <img src={logoUnica} alt="" className="img-fluid Menu__image" />
                <label>Acumula<br />CMR Puntos</label>
              </div>
              <div className="Menu__item">
                <img src={logoVisa} alt="" className="img-fluid Menu__image" />
                <label>Acumula<br />CMR Puntos</label>
              </div>
            </div>

          </div>
          <div className="Home__section">
            <Form />
          </div>
          {/* </div> */}
        </div>
      </div>
    )
  }
}

export default Home;
