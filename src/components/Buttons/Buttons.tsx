import React from 'react';
import s from './Buttons.module.css'

type ButtonsPropsType = {
    onClickHandlerPlus: () => void
    onClickHandlerNull: () => void
    isLimit: boolean
    isInitialState: boolean
    textForSet: string
}

export const Buttons = (props: ButtonsPropsType) => {
    return (
        <div className={s.buttons}>
            <button
                onClick={props.onClickHandlerPlus}
                className={`${s.btn} ${props.isLimit || Boolean(props.textForSet) ? s.disabled : ''}`}
                disabled={props.isLimit || Boolean(props.textForSet)}
            >+1
            </button>
            <button
                onClick={props.onClickHandlerNull}
                className={`${s.btn} ${props.isInitialState || Boolean(props.textForSet) ? s.disabled : ''}`}
                disabled={props.isInitialState || Boolean(props.textForSet)}
            >Заново
            </button>
        </div>
    );
};

