import styled from 'styled-components';

export const ActionsContainer = styled.div`
  margin-left: 15%;
  margin-top: 5vh;
  padding: 10px 20px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ActionButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #007bff;
  background-color: white;
  color: #007bff;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;