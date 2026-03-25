import type { FormActions } from "../../enums/form-actions.enum";

export type Action = {
    type: FormActions;
    payload: any;
}
