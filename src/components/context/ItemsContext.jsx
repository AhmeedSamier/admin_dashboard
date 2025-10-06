import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 


const ItemsContext = createContext();

export function useItems() {
  return useContext(ItemsContext);
}

export function ItemsProvider({ children }) {
  
  const [items, setItems] = useState([
    { id: uuidv4(), name: 'Design Dashboard', status: 'Pending', priority: 'High' },
    { id: uuidv4(), name: 'Implement Auth', status: 'Completed', priority: 'Low' },
    { id: uuidv4(), name: 'Fix DataGrid Bug', status: 'InProgress', priority: 'Medium' },
  ]);

 

 
  const addItem = (name, priority) => {
    const newItem = {
      id: uuidv4(),
      name,
      status: 'Pending',
      priority,
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const updateItem = (id, updatedFields) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, ...updatedFields } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const value = {
    items,
    addItem,
    updateItem,
    deleteItem,
  };

  return (
    <ItemsContext.Provider value={value}>
      {children}
    </ItemsContext.Provider>
  );
}