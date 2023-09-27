import React from 'react';
import s from './Counter.module.css'

type CounterPropsType = {
  counter: number
  isLimit: boolean
  textForSet: string
  error: boolean
}

export const Counter = (props: CounterPropsType) => {
  let textForSet = props.textForSet
  return (
    <div className={`${s.counter} ${props.isLimit ? s.limit : ''} ${props.error ? s.error : ''}`}>
      {textForSet ? textForSet : props.counter}
    </div>
  );
};
