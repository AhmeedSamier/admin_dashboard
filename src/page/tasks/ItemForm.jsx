import React from 'react';
import { Box, TextField, Button, MenuItem, useTheme } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useItems } from '../../components/context/ItemsContext';

const checkoutSchema = yup.object().shape({
  name: yup.string().required('Task name is required'),
  priority: yup.string().required('Priority is required'),
});

const ItemForm = ({ item, onClose }) => {
  const theme = useTheme();
  const { addItem, updateItem } = useItems();
  
  const initialValues = item || {
    name: '',
    priority: 'Medium',
  };

  const handleSubmit = (values) => {
    if (item) {
      updateItem(item.id, values);
    } else {
      addItem(values.name, values.priority);
    }
    onClose(); 
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={checkoutSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: 'span 4' },
            }}
          >
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Task Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
              name="name"
              error={!!touched.name && !!errors.name}
              helperText={touched.name && errors.name}
              sx={{ gridColumn: 'span 4' }}
            />
            
            <TextField
              select
              fullWidth
              variant="filled"
              label="Priority"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.priority}
              name="priority"
              error={!!touched.priority && !!errors.priority}
              helperText={touched.priority && errors.priority}
              sx={{ gridColumn: 'span 2' }}
            >
              {['High', 'Medium', 'Low'].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            
          
            {item && (
              <TextField
                select
                fullWidth
                variant="filled"
                label="Status"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.status}
                name="status"
                sx={{ gridColumn: 'span 2' }}
              >
                {['Pending', 'InProgress', 'Completed'].map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            )}
          </Box>
          <Box display="flex" justifyContent="flex-end" mt="20px">
            <Button type="submit" color="secondary" variant="contained">
              {item ? "Update Task" : "Create New Task"}
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default ItemForm;