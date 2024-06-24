import { ChangeEvent, useState } from "react";

export const useLightbox = (imagesList: string[]) => {
    const [currentImage, setCurrentImage] = useState<number>(0);

    const handlePrev = (): void => {
        if(currentImage > 0){
            setCurrentImage(currentImage - 1);
        }
    };

    const handleNext = (): void => {
        if(currentImage < imagesList.length - 1){
            setCurrentImage(currentImage + 1);
        }
    };

    const handleThumbnails = (e: ChangeEvent<HTMLInputElement>): void => {
        setCurrentImage(parseInt(e.target.value));
    };

    return {
        currentThumbnail: currentImage + 1,
        imageProduct: imagesList[currentImage],
        handlePrev,
        handleNext,
        handleThumbnails
    };
};