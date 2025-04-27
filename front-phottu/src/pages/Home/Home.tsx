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

const Home: React.FC = () => {
    const itemsAppend: MediaItem[] = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        url: `https://picsum.photos/300/200?random=${i}`,
        type: 'image'
    }));
    const [items, setItems] = useState<MediaItem[]>([]);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [isSelectionMode, setIsSelectionMode] = useState(false);
    const [selectAllTrigger, setSelectAllTrigger] = useState(false);
    const [clearSelectionTrigger, setClearSelectionTrigger] = useState(false);
    const [deletedItems, setDeletedItems] = useState<MediaItem[]>([]);

    useEffect(() => {
        setItems(itemsAppend);
    }, []);

    useEffect(() => {
        console.log(selectedItems)
    }, [selectedItems]);




    const handleFilesSelected = (files: FileList) => {
        const newItems: MediaItem[] = Array.from(files).map((file, index) => ({
            id: Date.now() + index,
            url: URL.createObjectURL(file),
            type: file.type.startsWith('video') ? 'video' : 'image',
        }));

        setItems(prev => [...prev, ...newItems]);
    };


    const handleSelectAll = () => {
        setSelectAllTrigger(!selectAllTrigger);
    };

    const handleClearSelection = () => {
        setClearSelectionTrigger(!clearSelectionTrigger);
    };

    const handleDeleteSelected = () => {
        console.log(selectedItems)
        const itemsToDelete = items.filter(item => selectedItems.includes(item.id));
        setDeletedItems((prev) => {
            console.log([...prev, ...itemsToDelete])
            return [...prev, ...itemsToDelete]
        });
        setItems(prev => prev.filter(item => !selectedItems.includes(item.id)));
        setSelectedItems([]);
    };

    const handleDownloadSelected = async () => {
        const selectedMedia = items.filter(item => selectedItems.includes(item.id));
      
        for (const item of selectedMedia) {
          try {
            const response = await fetch(item.url, { mode: 'cors' });
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
      
            const link = document.createElement('a');
            link.href = url;
            const extension = item.type === 'image' ? 'jpg' : 'mp4';
            link.download = `media-${item.id}.${extension}`;
            link.style.display = 'none';
      
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
      
            // Revoga o URL para não vazar memória
            URL.revokeObjectURL(url);
      
          } catch (error) {
            console.error(`Erro ao baixar o arquivo: ${item.url}`, error);
          }
        }
      };
      


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
            <GalleryGrid items={items}
                onSelectionChange={setIsSelectionMode}
                onSelectedItemsChange={setSelectedItems}
                selectAllTrigger={selectAllTrigger}
                clearSelectionTrigger={clearSelectionTrigger} />
        </div>
    );
};

export default Home;
