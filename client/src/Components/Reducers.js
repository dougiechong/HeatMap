import { combineReducers } from 'redux'
import {
  ADD_ACTIVITY,
  TOGGLE_ACTIVITY,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './AddActivity'
const { SHOW_ALL } = VisibilityFilters
 
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}
 
function activities(state = [], action) {
  switch (action.type) {
    case ADD_ACTIVITY:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_ACTIVITY:
      return state.map((activity, index) => {
        if (index === action.index) {
          return Object.assign({}, activity, {
            completed: !activity.completed
          })
        }
        return activity
      })
    default:
      return state
  }
}
 
const activitiesApp = combineReducers({
  visibilityFilter,
  activities
})
 
export default activitiesApp