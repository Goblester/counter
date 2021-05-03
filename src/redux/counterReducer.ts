type CounterStateType = {
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
    error: undefined
}


export const counterReducer = (state:CounterStateType=initialState, action:any):CounterStateType => {
    return state
}