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
            <Button className={`${s.btn} ${props.error ? s.disabled : ''}`}
                    disabled={props.error}
                    callback={props.onClickSetValue}
                    title='set'/>
        </div>
    );
};
