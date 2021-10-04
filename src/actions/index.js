export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const SET_MEM = 'SET_MEM';
export const SET_TOTAL = 'SET_TOTAL';
export const CLEAR_MEM = 'CLEAR_MEM';
export const CLEAR_TOTAL = 'CLEAR_TOTAL';

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) => {
    return({type:CHANGE_OPERATION, payload:operation});
}

export const setMemory = () => {
    return({type:SET_MEM});
}

export const setTotal = () => {
    return({type:SET_TOTAL});
}

export const clearMemory = () => {
    return({type:CLEAR_MEM});
}

export const clearTotal = () => {
    return({type:CLEAR_TOTAL});
}