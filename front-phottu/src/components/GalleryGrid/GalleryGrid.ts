import styled from 'styled-components';

export const GridContainer = styled.div`
  margin-left: 15%;
  margin-top: 5vh;
  padding: 20px;
  column-count: 4;
  column-gap: 10px;

  @media (max-width: 1200px) {
    column-count: 3;
  }

  @media (max-width: 768px) {
    column-count: 2;
  }

  @media (max-width: 480px) {
    column-count: 1;
  }
`;

export const GridItemWrapper = styled.div<{ selected: boolean }>`
  position: relative;
  margin-bottom: 10px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s, border 0.2s;
  border: ${({ selected }) => (selected ? '4px solid rgba(0, 123, 255, 0.7)' : 'none')};

  &:hover {
    transform: scale(1.03);

    label {
      opacity: 1;
    }
  }
`;

export const GridMedia = styled.div`
  width: 100%;
  break-inside: avoid;
  object-fit: cover;
`;

export const CheckboxLabel = styled.label`
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(255, 255, 255, 0.7);
  padding: 4px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.2s;
`;

export const CheckboxInput = styled.input`
  cursor: pointer;
`;
