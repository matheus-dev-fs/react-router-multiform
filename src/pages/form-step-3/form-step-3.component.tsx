import { useEffect, useRef, useState, type ChangeEvent, type Dispatch, type FC, type RefObject, type SetStateAction } from 'react';
import * as S from './form-step-3.styles';
import { Theme } from '../../components/theme/theme.component';
import { Link, useNavigate, type NavigateFunction } from 'react-router-dom';
import { useForm } from '../../hooks/use-form.hook';
import type { ContextType } from '../../types/form/context.type';
import { FormActions } from '../../enums/form-actions.enum';
import type { Action } from '../../types/form/action.type';

export const FormStep3: FC = () => {
    const navigate: NavigateFunction = useNavigate();
    const { state, dispatch }: ContextType = useForm();

    const [requiredEmailWarning, setRequiredEmailWarning]: [
        boolean,
        Dispatch<SetStateAction<boolean>>
    ] = useState<boolean>(false);

    const [requiredGithubWarning, setRequiredGithubWarning]: [
        boolean,
        Dispatch<SetStateAction<boolean>>
    ] = useState<boolean>(false);

    const [invalidEmailWarning, setInvalidEmailWarning]: [
        boolean,
        Dispatch<SetStateAction<boolean>>
    ] = useState<boolean>(false);

    const emailInputRef: RefObject<HTMLInputElement | null> = useRef<HTMLInputElement>(null);
    const githubInputRef: RefObject<HTMLInputElement | null> = useRef<HTMLInputElement>(null);

    useEffect((): void => {
        if (state.name.trim() === '') {
            navigate('/');
            return;
        }

        dispatch({ type: FormActions.setCurrentStep, payload: 3 });
    }, []);

    const handleNextStep = (): void => {
        const IS_EMAIL_EMPTY: boolean = state.email.trim() === '';

        if (IS_EMAIL_EMPTY) {
            setRequiredEmailWarning(true);
            emailInputRef.current?.focus();
            return;
        }

        const EMAIL_REGEX: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const IS_EMAIL_INVALID: boolean = !EMAIL_REGEX.test(state.email);

        if (!invalidEmailWarning && IS_EMAIL_INVALID) {
            setInvalidEmailWarning(true);
            emailInputRef.current?.focus();
            return;
        }

        const IS_GITHUB_EMPTY: boolean = state.github.trim() === '';

        if (IS_GITHUB_EMPTY) {
            setRequiredGithubWarning(true);
            githubInputRef.current?.focus();
            return;
        }


        console.log('Formulário finalizado com sucesso!');
        console.log(state);
    }

    const resetWarningsAndDispatch = (
        warnings: { warningState: boolean, setWarning: Dispatch<SetStateAction<boolean>> }[],
        action: Action
    ): void => {
        warnings.forEach(({ warningState, setWarning }) => {
            if (warningState) {
                setWarning(false);
            }
        });

        dispatch(action);
    };

    const handleEmailInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const value: string = event.target.value;

        resetWarningsAndDispatch(
            [
                { warningState: requiredEmailWarning, setWarning: setRequiredEmailWarning },
                { warningState: invalidEmailWarning, setWarning: setInvalidEmailWarning }
            ],
            { type: FormActions.setEmail, payload: value }
        );
    }

    const handleGithubInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const value: string = event.target.value;

        resetWarningsAndDispatch(
            [
                { warningState: requiredGithubWarning, setWarning: setRequiredGithubWarning }
            ],
            { type: FormActions.setGithub, payload: value }
        );
    }

    return (
        <Theme>
            <S.Container>
                <S.Step>Passo 3/3</S.Step>
                <S.Title>Legal, {state.name}! Onde te encontramos?</S.Title>
                <S.Description>Preencha com seus contatos para que possamos te localizar</S.Description>

                <S.Hr />

                <S.Label>
                    Qual seu email?
                    <S.Input
                        type="email"
                        value={state.email}
                        onChange={handleEmailInputChange}
                        ref={emailInputRef}
                    />
                </S.Label>

                {requiredEmailWarning &&
                    <S.Warning aria-live="polite">O email é obrigatório
                    </S.Warning>
                }

                {invalidEmailWarning &&
                    <S.Warning aria-live="polite">O email é inválido
                    </S.Warning>
                }

                <S.Label>
                    Qual seu github?
                    <S.Input
                        type="text"
                        value={state.github}
                        onChange={handleGithubInputChange}
                        ref={githubInputRef}
                    />
                </S.Label>

                {requiredGithubWarning &&
                    <S.Warning aria-live="polite">O github é obrigatório
                    </S.Warning>
                }


                <Link to="/step-2" className='back-button'>Voltar</Link>
                <S.Button onClick={handleNextStep}>Finalizar cadastro</S.Button>

            </S.Container>
        </Theme>
    );
};