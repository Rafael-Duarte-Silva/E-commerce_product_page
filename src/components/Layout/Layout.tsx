import * as S from './styles';

import { Outlet } from 'react-router-dom';

import GlobalStyle from '../../styles/global';
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/themes/theme";

import { Header } from "../Header"

export const Layout = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            
            <S.ContainerPage>
                <Header />

                <main>
                    <Outlet />
                </main>
            </S.ContainerPage>
        </ThemeProvider>
    );
};