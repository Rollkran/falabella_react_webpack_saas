import React from 'react';
import { connect } from 'react-redux';
import ToggleableLink from './ToggleableLink';

// import './styles/Form.css';
import '../assets/styles/components/Form.scss';

const Form = ({ rut, celular, correo, handleChange, handleClick, handleSubmit }) => (
  <div className="Form__content">
    <h2><span>Ingresa</span> tus datos.</h2>
    <p>Solo necesitas tener tu cédula para realizar la solicitud</p>
    <form className="form-group" onSubmit={() => handleSubmit()} >
      <div className="Form__input">
        <label>Rut</label>
        <input className="form-control" type="text" placeholder="Ej: 11.111.111-1" name="rut" onChange={(e) => handleChange({name:e.target.name, value:e.target.value})} />
      </div>
      <div className="Form__input">
        <label>Celular</label>
        <input className="form-control" type="text" placeholder="Ej: 987654321" name="celular" onChange={(e) => handleChange({name:e.target.name, value:e.target.value})} />
      </div>
      <div className="Form__input">
        <label>Correo electrónico</label>
        <input className="form-control" type="email" placeholder="Ej: correo@correo.cl" name="correo" onChange={(e) => handleChange({name:e.target.name, value:e.target.value})} />
      </div>
      <ToggleableLink disabled={(rut === "" || celular === "" || correo === "")?true:false} to="/Renta">
        <button type="button" className="btn btn-success btn-lg btn-block Form__submit_button" >Continuar</button>
      </ToggleableLink>
    </form>
  </div>
)


const mapStateToProps = state => ({
  rut: state.rut,
  celular: state.celular,
  correo: state.correo
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
  handleSubmit(){
    dispatch({
      type: 'sent_form',
      form: 'home'
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);