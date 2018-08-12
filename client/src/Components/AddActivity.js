/*
 * adding strava activity IDs to the list
 */
 
export const ADD_ACTIVITY = 'ADD_ACTIVITY'
export const TOGGLE_ACTIVITY = 'TOGGLE_ACTIVITY'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
 
/*
 * other constants
 */
 
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
 
/*
 * action creators
 */
 
export function addActivity(text) {
  return { type: ADD_ACTIVITY, text }
}
 
export function toggleActivity(index) {
  return { type: TOGGLE_ACTIVITY, index }
}
 
export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}