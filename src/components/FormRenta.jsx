import React from 'react';
import { connect } from 'react-redux';
import ToggleableLink from './ToggleableLink';

import '../assets/styles/components/Form.scss';

const FormRenta = ({ handleChange, handleClick, ...data }) => (
  <div className="Form__content">
    <h2><span>Ayúdanos</span> con unos datos mas.</h2>
    <p>Porque te queremos dar una oferta hecha a la medida para ti, necesitamos saber un poco más</p>
    <form className="form-group">
      <div className="Form__input">
        <label>¿Cual es tu renta líquida/ingreso mensual?</label>
        <input className="form-control" type="text" placeholder="Ej: $400.000" name="renta" onChange={(e) => handleChange({name:e.target.name, value:e.target.value})} />
      </div>
      <ToggleableLink disabled={(data.renta === "")?true:false} onClick={(e) => handleClick(data)} to='#' >
        <button type="button" className="btn btn-success btn-lg btn-block Form__submit_button" >Continuar</button>
      </ToggleableLink>
    </form>
  </div>
)

const mapStateToProps = state => ({
  renta: state.renta,
  status: state.status,
  rut: state.rut,
  correo: state.correo,
  celular: state.celular
})

const mapDispatchToProps = dispatch => ({
  handleChange(params){
    dispatch({
      type: 'change',
      params
    })
  },
  handleClick(params){
    let urlBase = process.env.URL_BASE || 'http://localhost:4100';
    params["x-user-browser"] = navigator.appCodeName + ' - ' + navigator.appVersion;
    params["x-user-os"] = navigator.platform;

    fetch(urlBase+'/api/users', {
      method: 'POST',
      body: JSON.stringify(params),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .catch(error => {
        alert('Problema con el servidor')
      })
      .then(response => {
        if(response != null)
          alert(response.info)
      });
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(FormRenta);