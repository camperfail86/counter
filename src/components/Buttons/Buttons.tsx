import React from 'react';
import s from './Buttons.module.css'
import {Button} from "../Button/Button";

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
            <Button disabled={props.isLimit || Boolean(props.textForSet)}
                    callback={props.onClickHandlerPlus}
                    title={'+1'}
                    classname={`${s.btn} ${props.isLimit || Boolean(props.textForSet) ? s.disabled : ''}`}/>
            <Button disabled={props.isInitialState || Boolean(props.textForSet)}
                    callback={props.onClickHandlerNull}
                    title={'Заново'}
                    classname={`${s.btn} ${props.isInitialState || Boolean(props.textForSet) ? s.disabled : ''}`}/>
        </div>
    );
};

