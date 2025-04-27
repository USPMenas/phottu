import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar.tsx';
import Topbar from '../../components/Topbar/Topbar.tsx';
import GalleryGrid from '../../components/GalleryGrid/GalleryGrid.tsx';
import SelectionActions from '../../components/SelectionActions/SelectionActions.tsx';

interface MediaItem {
    id: number;
    url: string;
    type: 'image' | 'video';
}

interface TrashProps {
    deletedItems: MediaItem[];
    setDeletedItems: React.Dispatch<React.SetStateAction<MediaItem[]>>;
}

const Trash: React.FC<TrashProps> = ({ deletedItems, setDeletedItems }) => {
    const [isSelectionMode, setIsSelectionMode] = useState(false);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [selectAllTrigger, setSelectAllTrigger] = useState(false);
    const [clearSelectionTrigger, setClearSelectionTrigger] = useState(false);

    useEffect(() => {
        console.log(selectedItems)
    }, [selectedItems]);

    const handleSelectAll = () => {
        setSelectAllTrigger(!selectAllTrigger);
    };

    const handleClearSelection = () => {
        setClearSelectionTrigger(!clearSelectionTrigger);
    };

    const handleDeleteSelected = () => {
        setDeletedItems(prev => prev.filter(item => !selectedItems.includes(item.id)));
        setSelectedItems([]);
      };

    const handleDownloadSelected = async () => {
        // deletar
    };

    const handleFilesSelected = () => {
        // ver o que fazer
    }

    return (
        <div>
            <Sidebar onFilesSelected={handleFilesSelected} />
            <Topbar />
            {isSelectionMode && (
                <SelectionActions
                    onSelectAll={handleSelectAll}
                    onDeleteSelected={handleDeleteSelected}
                    onDownloadSelected={handleDownloadSelected}
                    onClearSelection={handleClearSelection}
                />
            )}
            <GalleryGrid items={deletedItems}
                onSelectionChange={setIsSelectionMode}
                onSelectedItemsChange={setSelectedItems}
                selectAllTrigger={selectAllTrigger}
                clearSelectionTrigger={clearSelectionTrigger} />
        </div>
    );
};

export default Trash;
