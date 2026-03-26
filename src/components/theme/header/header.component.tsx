import type { FC } from "react";
import * as S from "./header.styles";

export const Header: FC = () => {
    return (
        <S.Container>
            <h1>Cadastro de Desenvolvedor</h1>
            <p>Faça seu cadastro agora mesmo!</p>
        </S.Container>
    );
}