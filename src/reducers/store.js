import {createStore,combineReducers} from "redux"
import itinerary from "./itineraryReducer"

export default createStore(combineReducers({itinerary}))