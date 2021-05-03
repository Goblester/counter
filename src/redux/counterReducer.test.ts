import {counterReducer, CounterStateType} from './counterReducer';
import {changeEditMode, increaseCurrentValue, nullifyCurrentValue, setError, setLimitValues} from './counterActions';




test('increaseCurrentValue should work correct', () => {
    const initialState:CounterStateType = {
        startValue: 1,
        maxValue: 5,
        currentValue: 3,
        editMode: false,
        error: undefined
    }

    const newState: CounterStateType = counterReducer(initialState, increaseCurrentValue());

    expect(newState).toEqual({
        startValue: 1,
        maxValue: 5,
        currentValue: 4,
        editMode: false,
        error: undefined
    });

});

test('nullifyCurrentValue should work correct', () => {
    const initialState:CounterStateType = {
        startValue: 1,
        maxValue: 5,
        currentValue: 3,
        editMode: false,
        error: undefined
    }
    const newState: CounterStateType = counterReducer(initialState, nullifyCurrentValue());

    expect(newState).toEqual({
        startValue: 1,
        maxValue: 5,
        currentValue: 1,
        editMode: false,
        error: undefined
    });
});

test('changeEditMode should work correct', () => {
    const initialState:CounterStateType = {
        startValue: 1,
        maxValue: 5,
        currentValue: 3,
        editMode: false,
        error: undefined
    }
    const newState: CounterStateType = counterReducer(initialState, changeEditMode(true));

    expect(newState).toEqual({
        startValue: 1,
        maxValue: 5,
        currentValue: 3,
        editMode: true,
        error: undefined
    });
});

test('setLimitValues should work correct', () => {
    const initialState:CounterStateType = {
        startValue: 1,
        maxValue: 5,
        currentValue: 3,
        editMode: false,
        error: 'sdasd'
    }
    const newState: CounterStateType = counterReducer(initialState, setLimitValues(6, 7));

    expect(newState).toEqual({
        startValue: 6,
        maxValue: 7,
        currentValue: 6,
        editMode: false,
        error: undefined
    });
});

test('SetError should work correct', () => {
    const initialState:CounterStateType = {
        startValue: 1,
        maxValue: 5,
        currentValue: 3,
        editMode: false,
        error: 'initial error'
    }
    let newState: CounterStateType = counterReducer(initialState, setError(undefined));

    expect(newState).toEqual({
        startValue: 1,
        maxValue: 5,
        currentValue: 3,
        editMode: false,
        error: undefined
    });

    newState = counterReducer(initialState, setError('new error'));

    expect(newState).toEqual({
        startValue: 1,
        maxValue: 5,
        currentValue: 3,
        editMode: false,
        error: 'new error'
    });
});