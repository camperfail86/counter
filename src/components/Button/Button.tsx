import React from 'react';

type ButtonPropsType = {
    disabled: boolean
    callback: () => void
    title: string
    classname: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button
            disabled={props.disabled}
            onClick={props.callback}
            className={props.classname}>{props.title}
        </button>
    );
};
