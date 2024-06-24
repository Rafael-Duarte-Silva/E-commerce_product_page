import * as S from './styles';

import { Cart } from './components/Cart';

import { useHeader } from './hooks/useHeader';

export const Header = () => {
    const {
        isOpenMenu,
        handleOpenMenu
    } = useHeader();

    return (
        <S.Header>
            <S.HeaderSeparator>
                <S.HeaderButtonMenu
                    type="button"
                    onClick={handleOpenMenu}
                >
                    <S.HeaderIconMenu />
                </S.HeaderButtonMenu>

                <S.HeaderIconLogo />

                <S.HeaderBackgroundLinks
                    $isOpenMenu={isOpenMenu}
                >
                    <S.HeaderContainerLinks>
                        <S.HeaderButtonClose
                            type="button"
                            onClick={handleOpenMenu}
                        >
                            <S.HeaderIconClose />
                        </S.HeaderButtonClose>

                        <nav>
                            <S.HeaderLinkList>
                                <li>
                                    <S.HeaderLinkText to="">
                                        Collections
                                    </S.HeaderLinkText>
                                </li>
                                <li>
                                    <S.HeaderLinkText to="">
                                        Men
                                    </S.HeaderLinkText>
                                </li>
                                <li>
                                    <S.HeaderLinkText to="">
                                        Women
                                    </S.HeaderLinkText>
                                </li>
                                <li>
                                    <S.HeaderLinkText to="">
                                        About
                                    </S.HeaderLinkText>
                                </li>
                                <li>
                                    <S.HeaderLinkText to="">
                                        Contact
                                    </S.HeaderLinkText>
                                </li>
                            </S.HeaderLinkList>
                        </nav>
                    </S.HeaderContainerLinks>
                </S.HeaderBackgroundLinks>
            </S.HeaderSeparator>

            <S.HeaderSeparator>
                <Cart />

                <S.HeaderAvatar />
            </S.HeaderSeparator>
        </S.Header>
    );
};