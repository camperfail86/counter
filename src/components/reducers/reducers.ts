export type inStateType = {
    counter: number
    counterMax: number
    counterMin: number
    textForSet: string
    error: boolean
    errorMax: boolean
}


let initialState: inStateType = {
    counter: 0,
    counterMax: 5,
    counterMin: 0,
    textForSet: '',
    error: false,
    errorMax: false
}

type ActionType =
    editTextForSetType
    | counterAddOneType
    | inputNumberCounterMaxType
    | inputNumberCounterMinType
    | editCounterType
    | editErrorType
    | editErrorMaxType

export const CounterReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-ONE': {
            return {...state, counter: state.counter + 1}
        }
        case "EDIT-TEXT": {
            return {...state, textForSet: action.text}
        }
        case "EDIT-ERROR": {
            return {...state, error: action.error}
        }
        case "EDIT-COUNTER": {
            return {...state, counter: action.value}
        }
        case "EDIT-ERROR-MAX": {
            return {...state, errorMax: action.error}
        }
        case "INPUT-COUNTER-MAX": {
            return {...state, counterMax: action.value}
        }
        case "INPUT-COUNTER-MIN": {
            return {...state, counterMin: action.value}
        }
        default:
            return state
    }
}

export type counterAddOneType = ReturnType<typeof counterAddOne>
export const counterAddOne = () => {
    return {
        type: 'ADD-ONE',
    } as const
}

export type editTextForSetType = ReturnType<typeof editTextForSet>
export const editTextForSet = (text: string) => {
    return {
        type: 'EDIT-TEXT', text
    } as const
}

export type inputNumberCounterMaxType = ReturnType<typeof inputNumberCounterMax>
export const inputNumberCounterMax = (value: number) => {
    return {
        type: 'INPUT-COUNTER-MAX', value
    } as const
}


export type inputNumberCounterMinType = ReturnType<typeof inputNumberCounterMin>
export const inputNumberCounterMin = (value: number) => {
    return {
        type: 'INPUT-COUNTER-MIN', value
    } as const
}

export type editCounterType = ReturnType<typeof editCounter>
export const editCounter = (value: number) => {
    return {
        type: 'EDIT-COUNTER', value
    } as const
}

export type editErrorType = ReturnType<typeof editError>
export const editError = (error: boolean) => {
    return {
        type: 'EDIT-ERROR', error
    } as const
}

export type editErrorMaxType = ReturnType<typeof editErrorMax>
export const editErrorMax = (error: boolean) => {
    return {
        type: 'EDIT-ERROR-MAX', error
    } as const
}