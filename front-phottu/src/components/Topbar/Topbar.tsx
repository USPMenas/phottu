import React from 'react';
import { TopbarContainer, SearchInput, FilterButton } from './Topbar.ts';

const Topbar: React.FC = () => {
    return (
        <TopbarContainer>
          <SearchInput type="text" placeholder="Pesquisar..." />
          <FilterButton>Filtros</FilterButton>
        </TopbarContainer>
      );
};

export default Topbar;
