import SuperInputText from '../SuperInputText/SuperInputText';
import SuperButton from '../SuperButton/SuperButton';
import {ChangeEvent, useEffect, useState} from 'react';
import {minValueValidator, oneValueShouldBeGreaterValidator} from '../../validators/validators';
import styles from './Settings.module.css';
import buttonStyles from '../SuperButton/SuperButton.module.css';
import inputStyles from '../SuperInputText/SuperInputText.module.css'

type SettingsPropsType = {
    error: string | undefined
    editorMode: boolean
    setNewStartValue: (value: number) => void
    setNewMaxValue: (value: number) => void
    changeEditorMode: (switcher: boolean) => void
    setNewValue: (value: number) => void
    changeError: (error: string | undefined) => void
}

export function Settings({editorMode, error, ...restProps}: SettingsPropsType) {
    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5);
    const [errorForStart, setErrorForStart] = useState<string | undefined>(undefined);
    const [errorForMax, setErrorForMax] = useState<string | undefined>(undefined);
    const hasError = error ? true : false;
    useEffect(() => {
        const newStartValue = localStorage.getItem('startValue');
        const newMaxValue = localStorage.getItem('maxValue');
        if (newStartValue) {
            const newValue = JSON.parse(newStartValue);
            setStartValue(newValue);
            restProps.setNewStartValue(newValue);
        }
        if (newMaxValue) {
            const newValue = JSON.parse(newMaxValue);
            setMaxValue(newValue);
            restProps.setNewMaxValue(newValue);
        }
    }, []);



    useEffect(() => {
        const newError = oneValueShouldBeGreaterValidator({max: maxValue, start: startValue});
        const startLimitError = minValueValidator(0)(startValue);
        const maxLimitError = minValueValidator(0)(maxValue);
        setErrorForStart(newError || startLimitError);
        setErrorForMax(newError || maxLimitError);
    }, [startValue, maxValue]);

    useEffect(() => {
        restProps.changeError(errorForMax || errorForStart);
    }, [errorForMax, errorForStart]);

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue));
    }, [startValue]);

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
    }, [maxValue]);

    const onStartInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        restProps.changeEditorMode(true);
        setStartValue(Number(e.currentTarget.value));
    }
    const onMaxInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        restProps.changeEditorMode(true);
        setMaxValue(Number(e.currentTarget.value));
    }
    const onButtonClick = () => {
        restProps.changeEditorMode(false);
        restProps.setNewMaxValue(maxValue);
        restProps.setNewStartValue(startValue);
        restProps.setNewValue(startValue);
    }

    const setButtonClassName = `${hasError || !editorMode ? buttonStyles.disabled : buttonStyles.default}`

    return (
        <div className={styles.container}>
            <div>
                <span className ={styles.label}>max Value: </span>
                <SuperInputText type={'number'}
                                error={errorForMax}
                                min={-1}
                                value={maxValue}
                                onChange={onMaxInputChange}
                                className={inputStyles.formField}/>
            </div>
            <div>
                <span className ={styles.label}>start Value: </span>
                <SuperInputText type={'number'}
                                error={errorForStart}
                                min={-1}
                                value={startValue}
                                onChange={onStartInputChange}
                                className={inputStyles.formField}/>
            </div>
            <SuperButton children={'set'}
                         onClick={onButtonClick}
                         disabled={hasError || !editorMode}
                         className={setButtonClassName}/>

        </div>
    )
}