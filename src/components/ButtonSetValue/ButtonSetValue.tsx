import React from 'react';
import s from "./ButtonSetValue.module.css"
import {Button} from "../Button/Button";

type ButtonSetValuePropsType = {
    onClickSetValue: () => void
    error: boolean
}

export const ButtonSetValue = (props: ButtonSetValuePropsType) => {
    return (
        <div className={s.buttonBlock}>
            {/*<button*/}
            {/*    disabled={props.error}*/}
            {/*    onClick={props.onClickSetValue}*/}
            {/*    className={`${s.btn} ${props.error ? s.disabled : ''}`}>set*/}
            {/*</button>*/}
            <Button classname={`${s.btn} ${props.error ? s.disabled : ''}`}
                    disabled={props.error}
                    callback={props.onClickSetValue}
                    title={'set'}/>
        </div>
    );
};
