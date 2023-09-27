import React, {ChangeEvent} from 'react';
import s from './SetValue.module.css'

type setValuePropsType = {
    errorMax: boolean
    error: boolean
    counter: number
    counterMax: number
    counterStart: number
    onChangeHandlerValueMax:(e: ChangeEvent<HTMLInputElement>) => void
    onChangeHandlerValueStart:(e: ChangeEvent<HTMLInputElement>) => void
}

export const SetValue = (props: setValuePropsType) => {
    return (
        <div className={s.setValueBlock}>
            <div className={s.element}>
                <span>max value:</span>
                <input onChange={props.onChangeHandlerValueMax} className={`${s.input} ${props.errorMax ? s.error : ''}`} type="number" value={props.counterMax}/>
            </div>
            <div className={s.element}>
                <span>start value:</span>
                <input onChange={props.onChangeHandlerValueStart} className={`${s.input} ${props.error ? s.error : ''}`} type="number" value={props.counterStart}/>
            </div>
        </div>
    );
};
