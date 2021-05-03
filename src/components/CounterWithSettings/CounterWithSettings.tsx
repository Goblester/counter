import styles from '../Counter/Counter.module.css';
import SuperButton from '../SuperButton/SuperButton';
import buttonStyles from '../SuperButton/SuperButton.module.css';

type CounterWithSettingsPropsType = {
    value: number,
    maxValue: number,
    startValue: number,
    editorMode: boolean,
    error: string | undefined,
    increaseValue: () => void,
    resetValue: () => void
    changeEditorMode: (switcher: boolean) => void
}

export function CounterWithSettings({
                                        value,
                                        maxValue,
                                        startValue,
                                        editorMode,
                                        error,
                                        ...restProps
                                    }: CounterWithSettingsPropsType) {
    const valueIsMax = value === maxValue;
    const valueIsZero = value === startValue;
    const valueClassName = `${styles.valueField} ${valueIsMax ? styles.maxValue : ''}`
    const increaseButtonClassName = `${editorMode || valueIsMax ? buttonStyles.disabled : buttonStyles.default}`
    const resetButtonClassName = `${editorMode || valueIsZero ? buttonStyles.disabled : buttonStyles.default}`
    const setButtonClassName = `${buttonStyles.default}`
    const onSetButtonClick = () => {
        restProps.changeEditorMode(true);
    }
    return (
        <div className={styles.container}>
            {!editorMode ?
                <div className={valueClassName}>
                    {value}
                </div> :
                    <div
                    className={`${styles.messageField} ${error ? styles.error : ''}`}>{error ? 'incorrect value' : `enter values and press 'set'`}</div>}
            <div className={styles.buttons}>
                <SuperButton children={'inc'} onClick={restProps.increaseValue} disabled={editorMode || valueIsMax}
                             className={increaseButtonClassName}/>
                <SuperButton children={'reset'} onClick={restProps.resetValue} disabled={editorMode || valueIsZero}
                             className={resetButtonClassName}/>
                <SuperButton children={'set'} onClick={onSetButtonClick}
                             className={setButtonClassName}/>
            </div>
        </div>
    )
}