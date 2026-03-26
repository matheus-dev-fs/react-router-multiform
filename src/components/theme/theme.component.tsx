import type { FC, ReactNode } from 'react';
import * as S from './theme.styles';
import { Header } from './header/header.component';

type Props = {
    children: ReactNode;
}

export const Theme: FC<Props> = ({ children }: Props) => {
    return (
        <S.Container>
            <S.Area>
                <Header />

                <S.Steps>
                    <S.Sidebar>
                        ...
                    </S.Sidebar>
                    <S.Page>
                        {children}
                    </S.Page>
                </S.Steps>
            </S.Area>
        </S.Container>
    );
}