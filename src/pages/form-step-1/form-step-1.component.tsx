import type { FC } from 'react';
import * as S from './form-step-1.styles';
import { Theme } from '../../components/theme/theme.component';

export const FormStep1: FC = () => {
    return (
        <Theme>
            <S.Container>
                Passo 1
            </S.Container>
        </Theme>
    );
};