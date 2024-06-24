import { useState } from "react";

export const useHeader = () => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

    const handleOpenMenu = (): void => {
        setIsOpenMenu(!isOpenMenu);
    };

    return {
        isOpenMenu,
        handleOpenMenu,
    };
};