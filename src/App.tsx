import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterWithSettings} from './components/CounterWithSettings/CounterWithSettings';
import {Settings} from './components/Settings/Settings';

function App() {
    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5);
    const [value, setValue] = useState<number>(startValue);
    const [editorMode, setEditorMode] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>(undefined);


    useEffect(() => {
        const newValueAsString = localStorage.getItem('counterValue');
        const newEditorModeAsString = localStorage.getItem('editorMode');
        if (newValueAsString) {
            const newValue = JSON.parse(newValueAsString);
            setValue(newValue);
        }
        if (newEditorModeAsString) {
            const newValue = JSON.parse(newEditorModeAsString);
            setEditorMode(newValue);
        }

    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value));
    }, [value]);

    useEffect(() => {
        localStorage.setItem('editorMode', JSON.stringify(editorMode));
    }, [editorMode]);


    const increaseValue = () => {
        debugger;
        value < maxValue && setValue(prev => prev + 1);
    }
    const resetValue = () => {
        setValue(startValue);
    }
    const setNewStartValue = (value: number) => {
        setStartValue(value);
    }
    const setNewMaxValue = (value: number) => {
        setMaxValue(value);
    }
    const setNewValue = (value: number) => {
        setValue(value);
    }
    const changeEditorMode = (switcher: boolean) => {
        setEditorMode(switcher);
    }
    const changeError = (error: string | undefined) => {
        debugger;
        setError(error);
    }
    return (
        <div className="App">

            {/*<Settings error={error}
                      editorMode={editorMode}
                      setNewStartValue={setNewStartValue}
                      setNewMaxValue={setNewMaxValue}
                      changeEditorMode={changeEditorMode}
                      setNewValue={setNewValue}
                      changeError={changeError}/>

            <Counter value={value}
                     maxValue={maxValue}
                     startValue={startValue}
                     error = {error}
                     increaseValue={increaseValue}
                     resetValue={resetValue}
                     editorMode={editorMode}/>*/}
            {editorMode?
            <Settings error={error}
                      editorMode={editorMode}
                      setNewStartValue={setNewStartValue}
                      setNewMaxValue={setNewMaxValue}
                      changeEditorMode={changeEditorMode}
                      setNewValue={setNewValue}
                      changeError={changeError}/>:
            <CounterWithSettings value={value}
                                 maxValue={maxValue}
                                 startValue={startValue}
                                 error={error}
                                 increaseValue={increaseValue}
                                 resetValue={resetValue}
                                 editorMode={editorMode}
                                 changeEditorMode={changeEditorMode}/>}
        </div>
    );
}

export default App;
