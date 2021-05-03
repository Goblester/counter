import SuperInputText from '../SuperInputText/SuperInputText';
import SuperButton from '../SuperButton/SuperButton';
import {ChangeEvent} from 'react';
import styles from './Settings.module.css';
import buttonStyles from '../SuperButton/SuperButton.module.css';
import inputStyles from '../SuperInputText/SuperInputText.module.css'

type SettingsPropsType = {
    startValue: number
    maxValue: number
    error: string | undefined
    offEditorMode: () => void
    onChangeLimitValues: (e: ChangeEvent<HTMLInputElement>) => void
}

export function Settings(props: SettingsPropsType) {
    const {
        error,
        maxValue,
        startValue,
        offEditorMode,
        onChangeLimitValues
    } = props
    const hasError = !!error ? true : false;
    const setButtonClassName = `${hasError ? buttonStyles.disabled : buttonStyles.default}`
    return (
        <div className={styles.container}>
            <div>
                <span className={styles.label}>max Value: </span>
                <SuperInputText type={'number'}
                                error={error?.indexOf('maxValue') !== -1}
                                min={-1}
                                value={maxValue}
                                onChange={onChangeLimitValues}
                                className={inputStyles.formField}
                                data-value={'maxValue'}/>
            </div>
            <div>
                <span className={styles.label}>start Value: </span>
                <SuperInputText type={'number'}
                                error={error?.indexOf('start') !== -1}
                                min={-1}
                                value={startValue}
                                onChange={onChangeLimitValues}
                                className={inputStyles.formField}
                                data-value={'startValue'}/>
            </div>
            <SuperButton children={'set'}
                         onClick={offEditorMode}
                         disabled={hasError}
                         className={setButtonClassName}/>

        </div>
    )
}