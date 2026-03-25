import type { FormActions } from "../../enums/form-actions.enum";
import type { State } from "./state.type";

export type Action = 
  | { type: FormActions.setName; payload: State["name"] }
  | { type: FormActions.setLevel; payload: State["level"] }
  | { type: FormActions.setCurrentStep; payload: State["currentStep"] }
  | { type: FormActions.setEmail; payload: State["email"] }
  | { type: FormActions.setGithub; payload: State["github"] }