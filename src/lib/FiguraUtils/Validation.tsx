import { useReducer } from "react";

const initialFormState = {};

export const INITIAL_FORM = "INITIAL_FORM";

export const UPDATE_FORM = "UPDATE_FORM";

export const RESET_FORM = "RESET_FORM";

export function formsReducer(state: any, action: any) {
    switch (action.type) {

        case INITIAL_FORM:
            const fieldNames = action.data
            const initialFields = fieldNames.reduce((acc: any, fieldName: any) => {
                const fieldObject = { [fieldName]: { value: "", type: "", hasError: false, error: "", touched: false, formID: "" } };
                return Object.assign(acc, fieldObject);
            }, {});
            return initialFields

        case UPDATE_FORM:
            const { name, value, type, hasError, error, touched, formID } = action.data;
            return {
                ...state,
                [name]: { value, type, hasError, error, touched, formID },
            };

        case RESET_FORM:
            return {};

        default:
            return state;
    };
};

export function useFormValidation() {
    const [formState, dispatch] = useReducer(formsReducer, initialFormState);
    return {
        formState,
        dispatch,
    };
};