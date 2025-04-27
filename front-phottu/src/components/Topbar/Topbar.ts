import styled from 'styled-components';

export const TopbarContainer = styled.div`
  height: 5vh;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid #ccc;
  margin-left: 15%;
  z-index: 10;
`;

export const SearchInput = styled.input`
  padding: 5px 10px;
  font-size: 16px;
  width: 300px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const FilterButton = styled.button`
  padding: 5px 15px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  cursor: pointer;
`;