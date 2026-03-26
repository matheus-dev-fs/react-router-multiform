import { type FC } from 'react';
import * as S from './select-option.style';

type Props = {
    title: string;
    description: string;
    icon: string;
}

export const SelectOption: FC<Props> = ({ title, description, icon }: Props) => {
    return (
        <S.Container>
            <S.Icon>{icon}</S.Icon>
            <S.Info>
                <S.Title>{title}</S.Title>
                <S.Description>{description}</S.Description>
            </S.Info>
        </S.Container>
    );
}