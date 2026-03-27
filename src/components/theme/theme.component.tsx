import type { FC, ReactNode } from 'react';
import * as S from './theme.styles';
import { Header } from './header/header.component';
import { SidebarItem } from './sidebar-item/sidebar-item.component';
import { useForm } from '../../hooks/use-form.hook';
import type { State } from '../../types/form/state.type';

type Props = {
    children: ReactNode;
}

export const Theme: FC<Props> = ({ children }: Props) => {
    const { state }: { state: State } = useForm();

    return (
        <S.Container>
            <S.Area>
                <Header />

                <S.Steps>
                    <S.Sidebar>
                        <SidebarItem 
                            title="Pessoal"
                            description="Se identifique"
                            icon="profile"
                            path="/"
                            selected={state.currentStep === 1}
                        />
                        <SidebarItem 
                            title="Profissional"
                            description="Seu nível profissional"
                            icon="book"
                            path="/step-2"
                            selected={state.currentStep === 2}
                        />
                        
                        <SidebarItem 
                            title="Contatos"
                            description="Como te achar"
                            icon="mail"
                            path="/step-3"
                            selected={state.currentStep === 3}
                        />

                        <SidebarItem 
                            title="Completo"
                            description="Tudo certo!"
                            icon="mail"
                            path="/step-4"
                            selected={state.currentStep === 4}
                        />
                    </S.Sidebar>
                    <S.Page>
                        {children}
                    </S.Page>
                </S.Steps>
            </S.Area>
        </S.Container>
    );
}