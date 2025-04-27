import React from 'react';
import { LightboxOverlay, LightboxContent, LightboxImage, CloseButton, ArrowButton, LightboxVideo } from './LightBox.ts';

interface LightboxProps {
    items: { url: string; type: 'image' | 'video' }[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ items, currentIndex, onClose, onNext, onPrev }) => {
    const currentItem = items[currentIndex];
  return (
    <LightboxOverlay>
        <CloseButton onClick={onClose}>←</CloseButton>
        <ArrowButton position="left" onClick={onPrev}>❮</ArrowButton>
      <LightboxContent>
        {currentItem.type === 'image' ? (
    <LightboxImage src={currentItem.url} alt="Imagem ampliada" />
  ) : (
    <LightboxVideo controls>
      <source src={currentItem.url} type="video/mp4" />
      Seu navegador não suporta o elemento de vídeo.
    </LightboxVideo>
  )}
      </LightboxContent>
      <ArrowButton position="right" onClick={onNext}>❯</ArrowButton>
    </LightboxOverlay>
  );
};

export default Lightbox;
