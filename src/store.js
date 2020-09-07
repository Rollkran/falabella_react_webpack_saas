import {
  createStore
} from 'redux';
import axios from 'axios';

// const [state, dispatch] = useReducer(reducer, initialState, init);
const initialState = {
  rut: '',
  celular: '',
  correo: '',
  renta: '',
  status: ''
}

const reducerData = (state = initialState, action) => {

  console.log(action)
  if (action.type === 'change') {
    return {
      ...state,
      [action.params.name]: action.params.value
    }
  }
  if (action.type === 'submit_press') {
    action.event.preventDefault()
    // if (action.type === 'sent_form' && action.form === 'rent') {
      console.log('LLamada a la API');
      action.event.preventDefault()
      let urlBase = process.env.URL_BASE || 'http://localhost:4100';
      let dummyToken = 'e817c8c863f6e39f1f77370305655551e4b5654d';
      axios({
        method: 'post',
        url: urlBase + '/api/users',
        headers: {
          token: dummyToken,
          'Content-Type': 'application/json',
        },
        data: {
          "rut": state.rut,
          "email": state.email,
          "phone": state.phone,
          "renta": state.renta,
          "x-user-browser": navigator.appCodeName + ' - ' + navigator.appVersion,
          "x-user-os": navigator.oscpu
        }
      }).then(response => {
        console.log(response)
        if (response.data.code === "200") {
          console.log('Mensaje enviado satisfactoriamente!');
        } else {
          console.log('Ha ocurrido un problema');
        }
  
        return {
          ...state,
          status: response.data.code
        }
      }).catch(function (error) {
        console.log('Ha ocurrido un error!!');
        return {
          ...state,
          status: 500
        }
      });
    // }
  }
  if (action.type === 'sent_form' && action.form === 'rent') {
    console.log('LLamada a la API');
    action.event.preventDefault()
    let urlBase = process.env.URL_BASE || 'http://localhost:4000';
    let dummyToken = 'e817c8c863f6e39f1f77370305655551e4b5654d';
    axios({
      method: 'post',
      url: urlBase + '/api/users',
      // headers: {
      //   token: dummyToken
      // },
      data: {
        "rut": state.rut,
        "email": state.email,
        "phone": state.phone,
        "renta": state.renta,
        "x-user-browser": navigator.appCodeName + ' - ' + navigator.appVersion,
        "x-user-os": navigator.oscpu
      }
    }).then(response => {
      if (response.data.code === "200") {
        console.log('Mensaje enviado satisfactoriamente!');
      } else {
        console.log('Ha ocurrido un problema');
      }

      return {
        ...state,
        status: response.data.code
      }
    }).catch(function (error) {
      console.log('Ha ocurrido un error!!');
      return {
        ...state,
        status: 500
      }
    });
  }

  return state
}


export default createStore(reducerData);