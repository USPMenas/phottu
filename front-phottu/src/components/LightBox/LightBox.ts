import styled from 'styled-components';

export const LightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const LightboxContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
//   min-height: 80%;
//   min-width: 80%;
`;

export const LightboxImage = styled.img`
  width: auto;
  min-width: 100%;
  min-height: 100%;
  object-fit: contain;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
`;

export const ArrowButton = styled.button<{ position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${({ position }) => (position === 'left' ? 'left: 20px;' : 'right: 20px;')}
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  font-size: 40px;
  cursor: pointer;
`;

export const LightboxVideo = styled.video`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.2);
`;
