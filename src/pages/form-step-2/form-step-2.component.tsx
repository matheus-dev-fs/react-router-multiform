import { useEffect, type FC } from 'react';
import * as S from './form-step-2.styles';
import { Theme } from '../../components/theme/theme.component';
import { Link, useNavigate, type NavigateFunction } from 'react-router-dom';
import { useForm } from '../../hooks/use-form.hook';
import type { ContextType } from '../../types/form/context.type';
import { FormActions } from '../../enums/form-actions.enum';
import { SelectOption } from './select-option/select-option.component';
import type { Level } from '../../types/form/level.type';

export const FormStep2: FC = () => {
    const navigate: NavigateFunction = useNavigate();
    const { state, dispatch }: ContextType = useForm();

    useEffect((): void => {
        const IS_NAME_NOT_FILLED: boolean = state.name === '';

        if (IS_NAME_NOT_FILLED) {
            navigate('/');
            return;
        }

        dispatch({ type: FormActions.setCurrentStep, payload: 2 });
    }, []);

    const handleNextStep = (): void => {
        navigate('/step-3');
    }

    const handleSelectOption = (option: Level): void => {
        dispatch({ type: FormActions.setLevel, payload: option });
    }

    return (
        <Theme>
            <S.Container>
                <S.Step>Passo 2/3</S.Step>
                <S.Title>{state.name}, qual é o seu nível de experiência?</S.Title>
                <S.Description>Selecione uma das opções abaixo</S.Description>

                <S.Hr />

                <SelectOption 
                    title="Sou iniciante"
                    description="Comecei a programar há menos de 2 anos"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={(): void => handleSelectOption(0)}
                />

                <SelectOption 
                    title="Sou programador"
                    description="Já programo há mais de 2 anos"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={(): void => handleSelectOption(1)}
                />

                <Link to="/" className='back-button'>Voltar</Link>
                <S.Button onClick={handleNextStep}>Próximo</S.Button>
            </S.Container>
        </Theme>
    );
};