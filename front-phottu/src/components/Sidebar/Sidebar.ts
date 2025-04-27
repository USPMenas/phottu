import styled from 'styled-components';

export const SidebarContainer = styled.div<{ collapsed: boolean }>`
  width: ${({ collapsed }) => (collapsed ? '60px' : '15%')};
  transition: width 0.3s;
  background-color: #f0f0f0;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ccc;
  z-index: 100;
`;

export const ToggleButton = styled.button`
  margin: 10px;
`;

export const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

export const SubMenuItem = styled.div`
  margin-left: 10px;
  padding-top: 5px;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;
