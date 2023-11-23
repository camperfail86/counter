import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';


type DefaultButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = {
    disabled: boolean
    callback: () => void
    title: string
    classname: string
}

type ButtonProps = DefaultButtonProps & {
    callback: () => void
    title: string
   // classname: string
}

export const Button = ({callback, title, ...restProps}: ButtonProps) => {
    return (
        <button
            onClick={callback}
            {...restProps}
        >
            {title}
        </button>
    );
};
