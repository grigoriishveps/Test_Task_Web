import { combineReducers } from 'redux';
import initialState from "./initialState";
import * as actions from "./action"


function reducers(state, action) {
    switch(action.type) {
        case actions.CHANGE_AVIARY: return {...state, currentNumber: action.numAviary};
        case actions.CHANGE_NAME: return { value: action.name };
        case actions.CHANGE_GENDER: return { value: action.gender };
        case actions.CHANGE_HEIGHT: return { value: action.height };
        case actions.CHANGE_WEIGTH: return { value: action.weight };
        case actions.CHANGE_COLOR: return { value: action.color };
        case actions.CHANGE_DIET: return { value: action.diet };
        case actions.CHANGE_CHARACTER: return { value: action.character };
        //case actions.CHANGE_: return { value: action.value_2 };

        case actions.ADD_AVIARY: return { ...state, aviaries: [...state.aviaries, ...action.value] };
        case actions.CHANGE_GIRAFFES: return { ...state, giraffes: action.giraffes};
        case actions.ADD_GIRAFFE: {
            return  {...state, giraffes: [...state.giraffes, action.newGiraffe] };
        }


        //case actions.ADD_: return { value: action.value_2 };

        case actions.SAVE_GIRAFFE:{
            let indexElem = state.giraffes.findIndex((value) =>{
                return action.giraffe.id === value.id;
            })
            let girArray = [...state.giraffes];
            girArray[indexElem] = {...action.giraffe};
            return {...state, giraffes: girArray };
        }
        case actions.DELETE_GIRAFFE:{
            let indexElem = state.giraffes.findIndex((value) =>{
                return action.id === value.id;
            })
            let girArray = [...state.giraffes];
            girArray.splice(indexElem,1);
            return {...state, giraffes: girArray};
        }

        case actions.CLOSE_INFO: return {...state,  visibleInfo: action.value };
        case actions.OPEN_INFO: return { ...state, visibleInfo: action.value };
        case actions.CLOSE_LOG: return {...state, visibleLog: action.value };
        case actions.OPEN_LOG: return {...state, visibleLog: action.value };
        default: return state;
    }
}


export default reducers;