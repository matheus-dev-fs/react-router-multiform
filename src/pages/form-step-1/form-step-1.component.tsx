import type { FC } from 'react';
import * as S from './form-step-1.styles';
import { Theme } from '../../components/theme/theme.component';

export const FormStep1: FC = () => {
    const handleNextStep = (): void => {
        
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
                    />
                </S.Label>

                <S.Button onClick={handleNextStep}>Próximo</S.Button>
            </S.Container>
        </Theme>
    );
};