import React, {ChangeEvent} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Buttons} from "./components/Buttons/Buttons";
import {ButtonSetValue} from "./components/ButtonSetValue/ButtonSetValue";
import {SetValue} from "./components/SetValue/SetValue";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "./redux/redux-store";
import {
    counterAddOne,
    editCounter, editError, editErrorMax,
    editTextForSet,
    inputNumberCounterMax, inputNumberCounterMin,
    inStateType
} from "./components/reducers/reducers";

// const counterLC = localStorage.getItem('counter')
// const counterMaxLC = localStorage.getItem('counterMax')
// const counterStartLC = localStorage.getItem('counterStart')

function App() {
    // let [counter, setCounter] = useState(counterLC ? JSON.parse(counterLC) : 0)
    // let [counterMax, setCounterMax] = useState(counterMaxLC? JSON.parse(counterMaxLC) : 5)
    // let [counterStart, setCounterStart] = useState(counterStartLC? JSON.parse(counterStartLC) : 0)

    let values = useSelector<rootReducerType, inStateType>((state) => state.values)
    const dispatch = useDispatch()
    let counter = values.counter
    let counterMax = values.counterMax
    let counterMin = values.counterMin
    let textForSet = values.textForSet
    let error = values.error
    // let errorMax = values.errorMax
    const isLimit = counter === counterMax
    const isInitialState = counter === counterMin

    const editCounterNumber = (value: number) => {
        dispatch(counterAddOne())
        // localStorage.setItem('counter', JSON.stringify(value))
    }

    const onClickHandlerPlus = () => {
        if (counter < counterMax) {
            editCounterNumber(counter + 1)
        }
    }

    const onClickHandlerNull = () => {
        dispatch(editCounter(counterMin))
    }

    const onChangeHandlerValueMax = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(inputNumberCounterMax(+e.currentTarget.value))
        dispatch(editTextForSet('Нажмите set'))
        if (+e.currentTarget.value < 0 || +e.currentTarget.value === counterMin) {
            dispatch(editTextForSet('Неверное значение'))
            dispatch(editError(true))
            dispatch(editErrorMax(true))
        } else {
            dispatch(editTextForSet('Нажмите set'))
            dispatch(editError(false))
            dispatch(editErrorMax(false))
        }
    }

    const onChangeHandlerValueStart = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(inputNumberCounterMin(+e.currentTarget.value))
        if (+e.currentTarget.value < 0 || +e.currentTarget.value === counterMax) {
            dispatch(editError(true))
            dispatch(editTextForSet('Неверное значение'))
        } else {
            dispatch(editError(false))
            dispatch(editTextForSet('Нажмите set'))
        }
    }

    const onClickSetValue = () => {
        dispatch(editCounter(counterMin))
        dispatch(editTextForSet(''))
        // localStorage.setItem('counterStart', JSON.stringify(counterStart))
        // localStorage.setItem('counterMax', JSON.stringify(counterMax))
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
                    // errorMax={errorMax}
                    error={error}
                    onChangeHandlerValueStart={onChangeHandlerValueStart}
                    onChangeHandlerValueMax={onChangeHandlerValueMax}
                    counter={counter}
                    counterStart={counterMin}
                    counterMax={counterMax}/>
                <ButtonSetValue
                    error={error}
                    onClickSetValue={onClickSetValue}/>
            </div>
        </div>
    );
}

export default App;
