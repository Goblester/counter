import {CounterActionsType} from './counterActions';

export type CounterStateType = {
    startValue: number
    maxValue: number
    currentValue: number
    editMode: boolean
    error: string | undefined
}

const initialState: CounterStateType = {
    startValue: 0,
    maxValue: 5,
    currentValue: 0,
    editMode: false,
    error: ''
}


export const counterReducer = (state: CounterStateType = initialState, action: CounterActionsType): CounterStateType => {
    switch (action.type) {
        case 'counter/INCREASE_CURRENT_VALUE':
            return {
                ...state,
                currentValue: state.currentValue + 1,

            }
        case 'counter/NULLIFY_CURRENT_VALUE':
            return {
                ...state,
                currentValue: state.startValue
            }
        case 'counter/CHANGE_EDIT_MODE':
            return {
                ...state,
                ...action.payload
            }
        case 'counter/SET_LIMIT_VALUES':
            return {
                ...state,
                ...action.payload,
                currentValue: action.payload.startValue,

            }
        case 'counter/SET_ERROR':
            return {
                ...state,
                ...action.payload
            }
    }
    return state

}