import { useEffect, useState, type ChangeEvent, type Dispatch, type FC, type SetStateAction } from 'react';
import * as S from './form-step-1.styles';
import { Theme } from '../../components/theme/theme.component';
import { useNavigate, type NavigateFunction } from 'react-router-dom';
import { useForm } from '../../hooks/use-form.hook';
import type { ContextType } from '../../types/form/context.type';
import { FormActions } from '../../enums/form-actions.enum';

export const FormStep1: FC = () => {
    const navigate: NavigateFunction = useNavigate();
    const { state, dispatch }: ContextType = useForm();
    const [requiredNameWarning, setRequiredNameWarning]: [
        boolean,
        Dispatch<SetStateAction<boolean>>
    ] = useState<boolean>(false);

    useEffect((): void => {
        dispatch({ type: FormActions.setCurrentStep, payload: 1 });
    }, []);

    const handleNextStep = (): void => {
        const IS_NAME_EMPTY: boolean = state.name.trim() === '';

        if (IS_NAME_EMPTY) {
            setRequiredNameWarning(true);
            return;
        }

        navigate('/step-2');
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const value: string = event.target.value;

        if (requiredNameWarning) {
            setRequiredNameWarning(false);
        }

        dispatch({ type: FormActions.setName, payload: value });
    }

    return (
        <Theme>
            <S.Container>
                <S.Step>Passo 1/3</S.Step>
                <S.Title>Vamos começar com o seu nome</S.Title>
                <S.Description>Preencha o campo abaixo com o seu nome</S.Description>

                <S.Hr />

                <S.Label>
                    Nome Completo
                    <S.Input 
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={handleInputChange}
                    />
                </S.Label>

                {requiredNameWarning && 
                    <S.Warning aria-live="polite">O nome é obrigatório
                    </S.Warning>
                }
                
                <S.Button onClick={handleNextStep}>Próximo</S.Button>

            </S.Container>
        </Theme>
    );
};