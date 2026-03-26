import { FormActions } from "../enums/form-actions.enum";
import type { Action } from "../types/form/action.type";
import type { State } from "../types/form/state.type";

export const formReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case FormActions.setCurrentStep:
            return {
                ...state,
                currentStep: action.payload
            };
        case FormActions.setName:
            return {
                ...state,
                name: action.payload
            };
        case FormActions.setLevel:
            return {
                ...state,
                level: action.payload
            };
        case FormActions.setEmail:
            return {
                ...state,
                email: action.payload
            };
        case FormActions.setGithub:
            return {
                ...state,
                github: action.payload
            };
        default:
            return state;
    }
};