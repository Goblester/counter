enum ACTIONS_TYPE {
    INCREASE_CURRENT_VALUE = 'counter/INCREASE_CURRENT_VALUE',
    NULLIFY_CURRENT_VALUE = 'counter/NULLIFY_CURRENT_VALUE',
    CHANGE_EDIT_MODE = 'counter/CHANGE_EDIT_MODE',
    SET_LIMIT_VALUES = 'counter/SET_LIMIT_VALUES',
    SET_ERROR = 'counter/SET_ERROR'
}

export type IncreaseCurrentValue = {
    type: typeof ACTIONS_TYPE.INCREASE_CURRENT_VALUE
}

export type NullifyCurrentValue = {
    type: typeof ACTIONS_TYPE.NULLIFY_CURRENT_VALUE
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

export const increaseCurrentValue = (): IncreaseCurrentValue => ({
    type: ACTIONS_TYPE.INCREASE_CURRENT_VALUE
});

export const nullifyCurrentValue = (): NullifyCurrentValue => ({
    type: ACTIONS_TYPE.NULLIFY_CURRENT_VALUE
});

export const changeEditMode = (editMode: boolean): ChangeEditMode => ({
    type: ACTIONS_TYPE.CHANGE_EDIT_MODE,
    payload: {
        editMode
    }
});

export const setLimitValues = (startValue: number, maxValue: number): SetLimitValues => ({
    type: ACTIONS_TYPE.SET_LIMIT_VALUES,
    payload: {
        startValue,
        maxValue
    }
});

export const setError = (error: string | undefined): SetError => ({
    type: ACTIONS_TYPE.SET_ERROR,
    payload: {
        error
    }
})

export type CounterActionsType = IncreaseCurrentValue
    | NullifyCurrentValue
    | ChangeEditMode
    | SetLimitValues
    | SetError;