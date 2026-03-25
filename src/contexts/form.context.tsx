import { createContext, type Context } from "react";
import type { ContextType } from "../types/form/context.type";

export const FormContext: Context<ContextType | null> = createContext<ContextType | null>(null);
