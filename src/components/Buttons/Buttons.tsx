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

export const Buttons = ({
                            isLimit,
                            isInitialState,
                            textForSet,
                            onClickHandlerPlus,
                            onClickHandlerNull
}: ButtonsPropsType
) => {
    return (
        <div className={s.buttons}>
            <Button disabled={isLimit || Boolean(textForSet)}
                    callback={onClickHandlerPlus}
                    title='+1'
                    className={`${s.btn} ${isLimit || Boolean(textForSet) ? s.disabled : ''}`}
            />
            <Button disabled={isInitialState || Boolean(textForSet)}
                    callback={onClickHandlerNull}
                    title='Заново'
                    className={`${s.btn} ${isInitialState || Boolean(textForSet) ? s.disabled : ''}`}/>
        </div>
    );
};

