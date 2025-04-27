import React, { useEffect, useState } from 'react';
import { CheckboxInput, CheckboxLabel, GridContainer, GridItemWrapper, GridMedia } from './GalleryGrid.ts'
import LightBox from '../LightBox/LightBox.tsx'

interface GalleryGridProps {
    items: {
        id: number;
        url: string;
        type: 'image' | 'video';
    }[];
    onSelectionChange: (isSelecting: boolean) => void;
    onSelectedItemsChange: (selectedIds: number[]) => void;
    selectAllTrigger: boolean;
    clearSelectionTrigger: boolean;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ items, onSelectionChange, onSelectedItemsChange, selectAllTrigger, clearSelectionTrigger }) => {
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [isSelectionMode, setIsSelectionMode] = useState(false);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (selectAllTrigger) {
            console.log("oi")
            setSelectedItems(items.map(item => item.id));
        }
    }, [selectAllTrigger]);

    useEffect(() => {
        if (clearSelectionTrigger) {
            setSelectedItems(() => {
                const valueSelecteds: [] = []
                console.log(valueSelecteds)
                return valueSelecteds
            });
        }
    }, [clearSelectionTrigger]);

    useEffect(() => {
        // Sempre que mudar o selectedItems, atualiza o modo seleção
        if (selectedItems.length > 0) {
            setIsSelectionMode(true);
            onSelectionChange(true)
            onSelectedItemsChange(selectedItems);
        } else {
            setIsSelectionMode(false);
            onSelectionChange(false)
        }
    }, [selectedItems, onSelectionChange, onSelectedItemsChange]);

    const handleItemClick = (itemId: number, index: number) => {
        if (isSelectionMode) {
            toggleSelectItem(itemId);
        } else {
            openLightbox(index);
        }
    };

    const openLightbox = (index: number) => {
        if (!isSelectionMode) {
            setCurrentIndex(index);
            setIsLightboxOpen(true);
        }
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex: number) => (prevIndex + 1) % items.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex: number) => (prevIndex - 1 + items.length) % items.length);
    };

    const toggleSelectItem = (id: number) => {
        setSelectedItems((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter(itemId => itemId !== id)
                : [...prevSelected, id]
        );
    };

    return (
        <>
            <GridContainer>
                {items.map((item, index) => (
                    <GridItemWrapper key={item.id} selected={selectedItems.includes(item.id)}
                        onClick={() => handleItemClick(item.id, index)}>
                        <CheckboxLabel>
                            <CheckboxInput
                                type="checkbox"
                                checked={selectedItems.includes(item.id)}
                                onChange={() => toggleSelectItem(item.id)}
                                onClick={(e) => e.stopPropagation()} // Impede abrir o Lightbox clicando no checkbox
                            />
                        </CheckboxLabel>

                        <GridMedia
                            as={item.type === 'image' ? 'img' : 'video'}
                            src={item.url}
                            onClick={() => openLightbox(index)}
                            controls={item.type === 'video'}
                        />
                    </GridItemWrapper>
                ))}
            </GridContainer>

            {isLightboxOpen && (
                <LightBox
                    items={items}
                    currentIndex={currentIndex}
                    onClose={closeLightbox}
                    onNext={goToNext}
                    onPrev={goToPrev}
                />
            )}
        </>
    );

};

export default GalleryGrid;
