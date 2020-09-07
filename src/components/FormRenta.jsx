import React from 'react';
import { connect } from 'react-redux';
import ToggleableLink from './ToggleableLink';

// import './styles/Form.css';
import '../assets/styles/components/Form.scss';

const FormRenta = ({ renta, status, handleChange, handleClick, handleSubmit }) =>{ 
  return(
  (status !== '')?alert('Hola'):
  <div className="Form__content">
    <h2><span>Ayúdanos</span> con unos datos mas.</h2>
    <p>Porque te queremos dar una oferta hecha a la medida para ti, necesitamos saber un poco más</p>
    <form className="form-group" onSubmit={(e) => handleSubmit(e)}>
      <div className="Form__input">
        <label>¿Cual es tu renta líquida/ingreso mensual?</label>
        <input className="form-control" type="text" placeholder="Ej: $400.000" name="renta" onChange={(e) => handleChange({name:e.target.name, value:e.target.value})} />
      </div>
      <ToggleableLink disabled={(renta === "")?true:false} onClick={(e) => handleClick(e)} to='/renta' >
        <button type="button" className="btn btn-success btn-lg btn-block Form__submit_button" >Continuar</button>
      </ToggleableLink>
    </form>
  </div>
)
}

const mapStateToProps = state => ({
  renta: state.renta,
  status: state.status,
})

const mapDispatchToProps = dispatch => ({
  handleChange(params){
    dispatch({
      type: 'change',
      params
    })
  },
  handleClick(event){
    dispatch({
      type: 'submit_press',
      event
    })
  },
  handleSubmit(e){
    console.log('onsubmit');
    e.prepreventDefault()
    dispatch({
      type: 'sent_form',
      form: 'rent',
      e
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FormRenta);