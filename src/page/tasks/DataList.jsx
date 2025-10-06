import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, IconButton, useTheme } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useItems } from '../../components/context/ItemsContext';



const DataList = ({ onEdit }) => {
  const theme = useTheme();
  const { items, deleteItem } = useItems(); 

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'name', headerName: 'Task Name', flex: 1.5, editable: false },
    { field: 'priority', headerName: 'Priority', flex: 0.7, editable: true, 
      type: 'singleSelect', valueOptions: ['High', 'Medium', 'Low'] 
    },
    { field: 'status', headerName: 'Status', flex: 0.7, editable: true, 
      type: 'singleSelect', valueOptions: ['Pending', 'InProgress', 'Completed'] 
    },
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      width: 150,
      renderCell: (params) => (
        <Box>
          {/* زر التعديل */}
          <IconButton onClick={() => onEdit(params.row)} color="info">
            <EditIcon />
          </IconButton>
          {/* زر الحذف */}
          <IconButton onClick={() => deleteItem(params.id)} color="error">
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <Box
      sx={{
        height: 400,
        width: '100%',
        '& .MuiDataGrid-root': {
          border: 'none',
        },
        '& .MuiDataGrid-cell': {
          fontWeight: theme.typography.body1.fontWeight || 500, 
        },
      }}
    >
      <DataGrid
        rows={items}
        // @ts-ignore
        columns={columns}
        getRowId={(row) => row.id}
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 20]}
      />
    </Box>
  );
};

export default DataList;