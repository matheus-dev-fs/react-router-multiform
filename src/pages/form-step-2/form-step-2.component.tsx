import { useEffect, useRef, useState, type Dispatch, type FC, type RefObject, type SetStateAction } from 'react';
import * as S from './form-step-2.styles';
import { Theme } from '../../components/theme/theme.component';
import { useNavigate, type NavigateFunction } from 'react-router-dom';
import { useForm } from '../../hooks/use-form.hook';
import type { ContextType } from '../../types/form/context.type';
import { FormActions } from '../../enums/form-actions.enum';
import { SelectOption } from './select-option/select-option.component';

export const FormStep2: FC = () => {
    const navigate: NavigateFunction = useNavigate();
    const { state, dispatch }: ContextType = useForm();
    const [requiredNameWarning, setRequiredNameWarning]: [
        boolean,
        Dispatch<SetStateAction<boolean>>
    ] = useState<boolean>(false);
    const inputRef: RefObject<HTMLInputElement | null> = useRef<HTMLInputElement>(null);

    useEffect((): void => {
        dispatch({ type: FormActions.setCurrentStep, payload: 2 });
    }, []);

    const handleNextStep = (): void => {
        const IS_NAME_EMPTY: boolean = state.name.trim() === '';

        if (IS_NAME_EMPTY) {
            setRequiredNameWarning(true);
            inputRef.current?.focus();
            return;
        }

        navigate('/step-2');
    }

    return (
        <Theme>
            <S.Container>
                <S.Step>Passo 2/3</S.Step>
                <S.Title>Vamos começar com o seu nome</S.Title>
                <S.Description>Preencha o campo abaixo com o seu nome</S.Description>

                <S.Hr />

                <SelectOption 
                    title="Sou iniciante"
                    description="Comecei a programar há menos de 2 anos"
                    icon="🥳"
                />

                <SelectOption 
                    title="Sou programador"
                    description="Já programo há mais de 2 anos"
                    icon="😎"
                />

                {requiredNameWarning && 
                    <S.Warning aria-live="polite">O nome é obrigatório
                    </S.Warning>
                }

                <S.Button onClick={handleNextStep}>Próximo</S.Button>

            </S.Container>
        </Theme>
    );
};