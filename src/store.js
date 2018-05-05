import {createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"

const defaultState = {
    topFood:null
}

const rankReducer = (state=defaultState,action) => {
    switch(action.type){
        case("setTopFood"):
            return {...state,topFood:action.topFood}
        case("setTopFlight"):
            return {...state,topFlight:action.topFlight}
        default:
            return state
    }
}

export default createStore(combineReducers({rankReducer}),applyMiddleware(thunk))