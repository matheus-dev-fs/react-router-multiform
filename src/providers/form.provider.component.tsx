import { useReducer, type ActionDispatch, type FC } from "react";
import type { FormProviderProps } from "../types/form/form-provider.type";
import { FormContext } from "../contexts/form.context";
import { formReducer } from "../reducers/form.reducer";
import { initialData } from "../constants/form/form-initial-data.constant";
import type { Action } from "../types/form/action.type";
import type { State } from "../types/form/state.type";

export const FormProvider: FC<FormProviderProps> = ({ children }: FormProviderProps) => {
    const [state, dispatch]: [
        State,
        ActionDispatch<[action: Action]>
    ] = useReducer<State, [action: Action]>(formReducer, initialData);

    return (
        <FormContext.Provider value={{ state, dispatch }}>
            {children}
        </FormContext.Provider>
    );
}