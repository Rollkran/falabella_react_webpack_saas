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

  if (action.type === 'change') {
    return {
      ...state,
      [action.params.name]: action.params.value
    }
  }
  return state
}

export default createStore(reducerData);