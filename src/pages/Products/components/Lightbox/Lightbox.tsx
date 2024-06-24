import * as S from './styles';

import { imagesList } from './consts/imagesList';
import { thumbnailList } from '../../consts/thumbnailList';

import { useLightbox } from './hooks/useLightbox';

type LightboxProps = {
    isOpenLightbox: boolean;
    handleLightbox: () => void;
};

export const Lightbox = ({ isOpenLightbox = false, handleLightbox }: LightboxProps) => {
    const {
        currentThumbnail,
        imageProduct,
        handlePrev,
        handleNext,
        handleThumbnails
    } = useLightbox(imagesList);

    return (
        <S.LightboxBackground
            $isOpenLightbox={isOpenLightbox}
        >
            <S.LightboxContainer>
                <S.LightboxButtonClose
                    type="button"
                    onClick={handleLightbox}
                >
                    <S.LightboxIconClose />
                </S.LightboxButtonClose>

                <S.LightboxContainerImage>
                    <S.LightboxButtonPrev
                        type="button"
                        onClick={handlePrev}
                    >
                        <S.LightboxIconPrev />
                    </S.LightboxButtonPrev>

                    <S.LightboxProductImage
                        src={imageProduct}
                        alt="A white and brown shoe"
                    />

                    <S.LightboxButtonNext
                        type="button"
                        onClick={handleNext}
                    >
                        <S.LightboxIconNext />
                    </S.LightboxButtonNext>
                </S.LightboxContainerImage>

                <S.LightboxThumbnailsList>
                    {thumbnailList.map((thumbnailProduct, index) => (
                        <S.LightboxThumbnailsItem
                            key={index}
                            $index={currentThumbnail}
                        >
                            <S.LightboxThumbnailsLabel>
                                <S.LightboxThumbnailsInput
                                    type="radio"
                                    name="thumbnails"
                                    value={index}
                                    onChange={handleThumbnails}
                                />
                                <S.LightboxThumbnails
                                    src={thumbnailProduct}
                                    alt="A white and brown shoe"
                                />
                            </S.LightboxThumbnailsLabel>
                        </S.LightboxThumbnailsItem>
                    ))}
                </S.LightboxThumbnailsList>
            </S.LightboxContainer>
        </S.LightboxBackground>
    );
};