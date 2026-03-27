import { type FC } from 'react';
import * as S from './sidebar-item.style';
import { Link } from 'react-router-dom';
import profileIcon from '../../../assets/profile.svg';
import bookIcon from '../../../assets/book.svg';
import mailIcon from '../../../assets/mail.svg';
import completedIcon from '../../../assets/completed.svg';

type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
    selected: boolean;
}

export const SidebarItem: FC<Props> = ({ title, description, icon, path, selected }: Props) => {
    return (
        <S.Container>
            <Link to={path}>
                <S.Info>
                    <S.Title>{title}</S.Title>
                    <S.Description>{description}</S.Description>
                </S.Info>
                <S.IconArea $selected={selected}>
                    {icon === 'profile' && <S.Icon src={profileIcon} alt="Ícone de perfil" />}
                    {icon === 'book' && <S.Icon src={bookIcon} alt="Ícone de livro" />}
                    {icon === 'mail' && <S.Icon src={mailIcon} alt="Ícone de e-mail" />}
                    {icon === 'completed' && <S.Icon src={completedIcon} alt="Ícone de completo" />}
                </S.IconArea>
                <S.Point $selected={selected}></S.Point>
            </Link>
        </S.Container>
    );
}