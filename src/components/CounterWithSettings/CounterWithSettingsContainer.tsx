import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IGlobalState} from '../../redux/state';
import {CounterWithSettings} from './CounterWithSettings';
import {Dispatch} from 'redux';
import {
    changeEditMode,
    CounterActionsType,
    increaseCurrentValue,
    nullifyCurrentValue,
    setError,
    setLimitValues
} from '../../redux/counterActions';
import {Settings} from '../Settings/Settings';

export const CounterWithSettingsContainer: React.FC = () => {
    const {
        currentValue,
        maxValue,
        startValue,
        editMode,
        error
    } = useSelector((state: IGlobalState) => state.counter);

    const dispatch = useDispatch<Dispatch<CounterActionsType>>();

    const increaseValue = () => {
        dispatch(increaseCurrentValue())
    }
    const resetValue = () => {
        dispatch(nullifyCurrentValue())
    }
    const onEditorMode = () => {
        dispatch(changeEditMode(true))
    }
    const offEditorMode = () => {
        dispatch(changeEditMode(false))
    }
    const changeLimitValues = (e: ChangeEvent<HTMLInputElement>) => {
        let newStartValue = startValue;
        let newMaxValue = maxValue;
        if (e.currentTarget.dataset.value) {
            const trigger: string = e.currentTarget.dataset.value;
            if (trigger === 'startValue') {
                newStartValue = +e.currentTarget.value;
            } else {
                newMaxValue = +e.currentTarget.value;
            }
        }
        dispatch(setLimitValues(newStartValue, newMaxValue));
        if (newStartValue >= newMaxValue || (newStartValue < 0 && newMaxValue < 0)) {
            dispatch(setError('startValue maxValue'));
        } else if (newStartValue < 0) {
            dispatch(setError('startValue'));
        } else if (newMaxValue < 0) {
            dispatch(setError('maxValue'));
        } else {
            dispatch(setError(''));
        }
    }
    return (
        <React.Fragment>
            {editMode ?
                <Settings error={error}
                          startValue={startValue}
                          maxValue={maxValue}
                          offEditorMode={offEditorMode}
                          onChangeLimitValues={changeLimitValues}
                />
                :
                <CounterWithSettings currentValue={currentValue}
                                     maxValue={maxValue}
                                     startValue={startValue}
                                     increaseValue={increaseValue}
                                     resetValue={resetValue}
                                     onEditorMode={onEditorMode}/>
            }
        </React.Fragment>
    )
}