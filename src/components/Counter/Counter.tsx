import SuperButton from '../SuperButton/SuperButton';
import styles from './Counter.module.css';
import buttonStyles from './../SuperButton/SuperButton.module.css'

type CounterPropsType = {
    value: number,
    maxValue: number,
    startValue: number,
    editorMode: boolean,
    error: string | undefined,
    increaseValue: () => void,
    resetValue: () => void
}

export function Counter({value, maxValue, editorMode, error, startValue, ...restProps}: CounterPropsType) {

    const valueIsMax = value === maxValue;
    const valueIsZero = value === startValue;
    const valueClassName = `${styles.valueField} ${valueIsMax ? styles.maxValue : ''}`
    const increaseButtonClassName = `${editorMode || valueIsMax ? buttonStyles.disabled : buttonStyles.default}`
    const resetButtonClassName = `${editorMode || valueIsZero ? buttonStyles.disabled : buttonStyles.default}`
    return (
        <div className={styles.container}>
            {!editorMode ?
                <div className={valueClassName}>
                    {value}
                </div> :
                <div
                    className={`${styles.messageField} ${error ? styles.error : ''}`}>{error ? 'incorrect value' : `enter values and press 'set'`}</div>}
            <div className = {styles.buttons}>
                <SuperButton children={'inc'} onClick={restProps.increaseValue} disabled={editorMode || valueIsMax}
                             className={increaseButtonClassName}/>
                <SuperButton children={'reset'} onClick={restProps.resetValue} disabled={editorMode || valueIsZero}
                             className={resetButtonClassName}/>
            </div>
        </div>
    )
}