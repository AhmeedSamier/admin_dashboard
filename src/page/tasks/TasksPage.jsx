import React, { useState } from 'react';
import { Box, Button, Dialog, DialogTitle, DialogContent, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Header from '../../components/Header';
import DataList from './DataList';
import ItemForm from './ItemForm';

const TasksPage = () => {
  const theme = useTheme();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // للعنصر الذي سيتم تعديله

  const handleOpenForm = (item = null) => {
    setSelectedItem(item);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setSelectedItem(null);
  };

  return (
    <Box m="20px">
      <Header
        title="CRUD TASKS"
        subTitle="Manage Tasks using React Context API"
      />
      
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button
          onClick={() => handleOpenForm()}
          color="secondary"
          variant="contained"
          startIcon={<AddIcon />}
        >
          Add New Task
        </Button>
      </Box>

      <DataList onEdit={handleOpenForm} /> 

      <Dialog open={isFormOpen} onClose={handleCloseForm} fullWidth maxWidth="sm">
        <DialogTitle>{selectedItem ? 'Edit Task' : 'Add New Task'}</DialogTitle>
        <DialogContent>
          <ItemForm item={selectedItem} onClose={handleCloseForm} />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default TasksPage;