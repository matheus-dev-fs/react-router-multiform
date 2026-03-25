import { useReducer, type FC } from "react";
import type { FormProviderProps } from "../types/form/form-provider.type";
import { FormContext } from "../contexts/form.context";
import { formReducer } from "../reducers/form.reducer";
import { initialData } from "../constants/form/form-initial-data.constant";

export const FormProvider: FC<FormProviderProps> = ({ children }: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData);

    return (
        <FormContext.Provider value={{ state, dispatch }}>
            {children}
        </FormContext.Provider>
    );
}