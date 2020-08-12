import { GLOBAL } from '../../constants/global'
import { combineReducers } from 'redux'

const INITIAL_STATE = {
    index: 0
}

export function global (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GLOBAL.PAGEINDEX:
      return {
        ...state,
        index:action.index
      }
    default:
      return state
  }
}

export default combineReducers({
    global
})