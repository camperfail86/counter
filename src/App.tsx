import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Buttons} from "./components/Buttons/Buttons";
import {ButtonSetValue} from "./components/ButtonSetValue/ButtonSetValue";
import {SetValue} from "./components/SetValue/SetValue";

const counterLC = localStorage.getItem('counter')
const counterMaxLC = localStorage.getItem('counterMax')
const counterStartLC = localStorage.getItem('counterStart')

function App() {
    let [counter, setCounter] = useState(counterLC ? JSON.parse(counterLC) : 0)
    let [counterMax, setCounterMax] = useState(counterMaxLC? JSON.parse(counterMaxLC) : 5)
    let [counterStart, setCounterStart] = useState(counterStartLC? JSON.parse(counterStartLC) : 0)
    let [textForSet, setTextForSet] = useState('');
    let [error, setError] = useState(false)
    let [errorMax, setErrorMax] = useState(false)

    const isLimit = counter === counterMax
    const isInitialState = counter === counterStart

    const editCounterNumber = (value: number) => {
        setCounter(value)
        localStorage.setItem('counter', JSON.stringify(value))
    }

    const onClickHandlerPlus = () => {
        if (counter < counterMax) {
            editCounterNumber(counter + 1)
        }
    }

    const onClickHandlerNull = () => {
        editCounterNumber(counterStart)
    }

    const onChangeHandlerValueMax = (e: ChangeEvent<HTMLInputElement>) => {
        setCounterMax(Number(e.currentTarget.value))
        setTextForSet('Нажмите set')
        if (+e.currentTarget.value < 0 || +e.currentTarget.value === counterStart) {
            setTextForSet('Неверное значение')
            setError(true)
            setErrorMax(true)
        } else {
            setTextForSet('Нажмите set')
            setError(false)
            setErrorMax(false)
        }
    }

    const onChangeHandlerValueStart = (e: ChangeEvent<HTMLInputElement>) => {
        setCounterStart(+e.currentTarget.value)
        if (+e.currentTarget.value < 0) {
            setError(true)
            setTextForSet('Неверное значение')
        } else {
            setError(false)
            setTextForSet('Нажмите set')
        }
    }

    const onClickSetValue = () => {
        setCounter(counterStart)
        setTextForSet('')
        localStorage.setItem('counterStart', JSON.stringify(counterStart))
        localStorage.setItem('counterMax', JSON.stringify(counterMax))
    }


    return (
        <div className="App">
            <div className="block">
                <Counter error={error} isLimit={isLimit} counter={counter} textForSet={textForSet}/>
                <Buttons
                    textForSet={textForSet}
                    isLimit={isLimit}
                    isInitialState={isInitialState}
                    onClickHandlerPlus={onClickHandlerPlus}
                    onClickHandlerNull={onClickHandlerNull}
                />
            </div>
            <div className="block">
                <SetValue
                    errorMax={errorMax}
                    error={error}
                    onChangeHandlerValueStart={onChangeHandlerValueStart}
                    onChangeHandlerValueMax={onChangeHandlerValueMax}
                    counter={counter}
                    counterStart={counterStart}
                    counterMax={counterMax}/>
                <ButtonSetValue
                    error={error}
                    onClickSetValue={onClickSetValue}/>
            </div>
        </div>
    );
}

export default App;
