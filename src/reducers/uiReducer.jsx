import { types } from "../types/types";
const initialState = {
    number: 0,
    operator1: null,
    operator2: null,
    operation: null,
    done: false,
};
export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.number:
            return { ...state, number: action.payload };
        case types.operation:
            return {
                ...state,
                operation: action.payload.operation,
                operator1: action.payload.operator1,
                number: 0,
            };

        case types.operation2:
            return {
                ...state,
                operator2: action.payload.operator2,
                number: 0,
            };
        case types.result:
            return {
                ...initialState,
                number: action.payload,
                done: true,
            };

        case types.restart:
            return {
                ...initialState,
            };
        default:
            return state;
    }
};
