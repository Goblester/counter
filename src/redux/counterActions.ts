enum ACTIONS_TYPE {
    CHANGE_CURRENT_VALUE = 'counter/INCREASE_CURRENT_VALUE',
    CHANGE_EDIT_MODE = 'counter/CHANGE_EDIT_MODE',
    SET_LIMIT_VALUES = 'counter/SET_LIMIT_VALUES',
    SET_ERROR = 'counter/SET_ERROR'
}

export type ChangeCurrentValue = {
    type: typeof ACTIONS_TYPE.CHANGE_CURRENT_VALUE,
    payload: {
        currentValue: number
    }
}
export type ChangeEditMode = {
    type: typeof ACTIONS_TYPE.CHANGE_EDIT_MODE,
    payload: {
        editMode: boolean
    }
}
export type SetLimitValues = {
    type: typeof ACTIONS_TYPE.SET_LIMIT_VALUES,
    payload: {
        startValue: number
        maxValue: number
    }
}
export type SetError = {
    type: typeof ACTIONS_TYPE.SET_ERROR,
    payload: {
        error: string | undefined
    }
}

export const changeCurrentValue = (currentValue: number):ChangeCurrentValue=>({
    type:  ACTIONS_TYPE.CHANGE_CURRENT_VALUE,
    payload:{
        currentValue
    }
});

export const changeEditMode = (editMode:boolean):ChangeEditMode=>({
    type: ACTIONS_TYPE.CHANGE_EDIT_MODE,
    payload:{
        editMode
    }
});

export const setLimitValues = (startValue:number, maxValue: number):SetLimitValues=>({
    type: ACTIONS_TYPE.SET_LIMIT_VALUES,
    payload:{
        startValue,
        maxValue
    }
});

export const SetError = (error:string|undefined):SetError=>({
    type:ACTIONS_TYPE.SET_ERROR,
    payload:{
        error
    }
})