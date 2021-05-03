import styles from '../Counter/Counter.module.css';
import SuperButton from '../SuperButton/SuperButton';
import buttonStyles from '../SuperButton/SuperButton.module.css';
import React from 'react';

type CounterWithSettingsPropsType = {
    currentValue: number,
    maxValue: number,
    startValue: number,
    increaseValue: () => void,
    resetValue: () => void,
    onEditorMode: () => void
}

export function CounterWithSettings(props: CounterWithSettingsPropsType) {
    const {
        currentValue,
        maxValue,
        startValue,
        increaseValue,
        resetValue,
        onEditorMode
    } = props;

    const valueIsMax = currentValue === maxValue;
    const valueIsZero = currentValue === startValue;
    const valueClassName = `${styles.valueField} ${valueIsMax ? styles.maxValue : ''}`;
    const increaseButtonClassName = `${valueIsMax ? buttonStyles.disabled : buttonStyles.default}`;
    const resetButtonClassName = `${valueIsZero ? buttonStyles.disabled : buttonStyles.default}`;
    const setButtonClassName = `${buttonStyles.default}`;
    return (
        <div className={styles.container}>
            <div className={valueClassName}>
                {currentValue}
            </div>
            <div className={styles.buttons}>
                <SuperButton children={'inc'} onClick={increaseValue} disabled={valueIsMax}
                             className={increaseButtonClassName}/>
                <SuperButton children={'reset'} onClick={resetValue} disabled={valueIsZero}
                             className={resetButtonClassName}/>
                <SuperButton children={'set'} onClick={onEditorMode}
                             className={setButtonClassName}/>
            </div>
        </div>
    )
}

