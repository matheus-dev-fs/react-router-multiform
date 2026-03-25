import type { Dispatch } from "react";
import type { State } from "./state.type";
import type { Action } from "./action.type";

export type ContextType = {
    state: State;
    dispatch: Dispatch<Action>;
}
