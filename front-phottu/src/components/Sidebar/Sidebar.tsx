import React, { useRef } from 'react';
import { SidebarContainer, ToggleButton, MenuItem, SubMenuItem, HiddenFileInput } from './Sidebar.ts';

interface SidebarProps {
  onFilesSelected: (files: FileList) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onFilesSelected }) => {
  const [collapsed, setCollapsed] = React.useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleNewPhotosClick = () => {
    fileInputRef.current?.click();
  };

  const handleFilesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      onFilesSelected(event.target.files);
    }
  };

  return (
    <SidebarContainer collapsed={collapsed}>
      <ToggleButton onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? '>' : '<'}
      </ToggleButton>

      {!collapsed && (
        <div>
          <MenuItem>📷 Fotos</MenuItem>
          <MenuItem>
            📁 Pastas
            <SubMenuItem>• Pasta 1</SubMenuItem>
            <SubMenuItem>• Pasta 2</SubMenuItem>
          </MenuItem>
          <MenuItem>🗑️ Lixeira</MenuItem>
          <MenuItem onClick={handleNewPhotosClick}>➕ Novas Fotos</MenuItem>

          <HiddenFileInput
            type="file"
            ref={fileInputRef}
            onChange={handleFilesChange}
            multiple
            accept="image/*,video/*"
          />
        </div>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
