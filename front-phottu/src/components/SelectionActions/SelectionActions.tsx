import React from 'react';
import { ActionsContainer, ActionButton} from './SelectionActions.ts';

interface SelectionActionsProps {
  onSelectAll: () => void;
  onDeleteSelected: () => void;
  onDownloadSelected: () => void;
  onClearSelection: () => void;
}

const SelectionActions: React.FC<SelectionActionsProps> = ({
  onSelectAll,
  onDeleteSelected,
  onDownloadSelected,
  onClearSelection
}) => {
  return (
    <ActionsContainer>
    <ActionButton onClick={onSelectAll}>Selecionar Tudo</ActionButton>
      <ActionButton onClick={onClearSelection}>Desmarcar Tudo</ActionButton>
      <ActionButton onClick={onDeleteSelected}>Deletar</ActionButton>
      <ActionButton onClick={onDownloadSelected}>Baixar</ActionButton>
    </ActionsContainer>
  );
};

export default SelectionActions;
