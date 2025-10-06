import { grey, blue } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
    palette: {
        
        mode,
        ...(mode === 'light'
            ? {
              
                divider: grey[300], 
            }
            : {
               
                divider: 'rgba(255, 255, 255, 0.12)', 
            }),
    },
    
    typography: {
       
        fontWeightRegular: 500, 
        body1: {
            fontWeight: 500,
        },
       
    },

   
    components: {
        MuiDataGrid: {
            styleOverrides: {
             
                cell: {
                 
                    fontWeight: 500, 
                },
           
                columnHeaderTitle: {
                    fontWeight: 700,
                },
            },
        },
      
        MuiCssBaseline: {
            styleOverrides: {
               
                body: {
                    fontWeight: 400, 
                }
            }
        }
    },
});