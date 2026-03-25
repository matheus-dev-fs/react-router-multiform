import { useContext } from "react";
import type { ContextType } from "../types/form/context.type";
import { FormContext } from "../contexts/form.context";

export const useForm = (): ContextType => {
    const context: ContextType | null = useContext<ContextType | null>(FormContext);

    if (!context) {
        throw new Error('useForm deve ser usado dentro de um FormProvider.');
    }

    return context;
}