import React from 'react';
import s from "./ButtonSetValue.module.css"

type ButtonSetValuePropsType = {
    onClickSetValue: () => void
    error: boolean
}

export const ButtonSetValue = (props: ButtonSetValuePropsType) => {
    return (
        <div className={s.buttonBlock}>
            <button
                disabled={props.error}
                onClick={props.onClickSetValue}
                className={`${s.btn} ${props.error ? s.disabled : ''}`}>set
            </button>
        </div>
    );
};
