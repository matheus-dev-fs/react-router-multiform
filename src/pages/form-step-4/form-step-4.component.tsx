import { useEffect, type Dispatch, type FC } from "react";
import * as S from "./form-step-4.styles";
import { Theme } from "../../components/theme/theme.component";
import { useForm } from "../../hooks/use-form.hook";
import type { State } from "../../types/form/state.type";
import { useNavigate, type NavigateFunction } from "react-router";
import { FormActions } from "../../enums/form-actions.enum";
import type { Action } from "../../types/form/action.type";

export const FormStep4: FC = () => {
    const { state, dispatch }: { 
        state: State; 
        dispatch: Dispatch<Action> 
    } = useForm();
    const navigate: NavigateFunction = useNavigate();

    useEffect((): void => {
        const { name, email, github } = state;

        const IS_NAME_EMPTY: boolean = name.trim() === '';

        if (IS_NAME_EMPTY) {
            navigate('/');
            return;
        }

        const IS_EMAIL_EMPTY: boolean = email.trim() === '';
        const IS_GITHUB_EMPTY: boolean = github.trim() === '';

        if (IS_EMAIL_EMPTY || IS_GITHUB_EMPTY) {
            navigate('/step-3');
            return;
        }

        dispatch({ type: FormActions.setCurrentStep, payload: 4 });
    }, []);

    return (
        <Theme>
            <S.Container>
                <S.Title>🎉 Cadastro concluído com sucesso! 🎉</S.Title>
                <S.Description>
                    Obrigado, {state.name}! Seu perfil como {state.level === 0 ? "iniciante" : "programador"} foi registrado.
                </S.Description>
                <S.MessageArea>
                    <S.Message>
                        Parabéns, <S.Highlight>{state.name}</S.Highlight>! Seu cadastro como <S.Highlight>{state.level === 0 ? "iniciante" : "programador"}</S.Highlight> foi realizado com sucesso. Em breve, entraremos em contato pelo e-mail <S.Email>{state.email}</S.Email> para compartilhar novidades, oportunidades e conteúdos exclusivos para o seu perfil.
                    </S.Message>
                    <S.Message>
                        E claro, vamos conferir seu GitHub <S.Github>{state.github}</S.Github> para conhecer ainda mais sobre o seu trabalho e trajetória. Fique atento à sua caixa de entrada e seja muito bem-vindo à nossa comunidade de desenvolvedores! Estamos felizes em ter você conosco nessa jornada de aprendizado e crescimento profissional.
                    </S.Message>
                </S.MessageArea>
            </S.Container>
        </Theme>
    );
}