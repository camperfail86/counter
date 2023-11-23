import s from './Counter.module.css'

type CounterPropsType = {
  counter: number
  isLimit: boolean
  textForSet: string
  error: boolean
}

export const Counter = (props: CounterPropsType) => {
  const  {textForSet, isLimit, error, counter} = props
  return (
    <div className={`${s.counter} ${isLimit ? s.limit : ''} ${error ? s.error : ''}`}>
      {textForSet ? textForSet : counter}
    </div>
  );
};
