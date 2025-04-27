import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Trash from './pages/Trash/Trash';

interface MediaItem {
  id: number;
  url: string;
  type: 'image' | 'video';
}

const App: React.FC = () => {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [deletedItems, setDeletedItems] = useState<MediaItem[]>([]);

  useEffect(() => {
    // Mock inicial (como fizemos antes)
    const itemsAppend: MediaItem[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      url: `https://picsum.photos/300/200?random=${i}`,
      type: 'image'
    }));
    setItems(itemsAppend);
  }, []);
  
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              setItems={setItems}
              deletedItems={deletedItems}
              setDeletedItems={setDeletedItems}
            />
          }
        />
        <Route
          path="/trash"
          element={
            <Trash
              deletedItems={deletedItems}
              setDeletedItems={setDeletedItems}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
