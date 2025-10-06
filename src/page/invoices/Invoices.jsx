import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { columns, rows } from "../invoices/data";
import Header from "../../components/Header";


export default function Invoices() {
  return (
    <div>
      <Box>
      <Header
        title="CONTACTS"
        subTitle="List of Contacts for Future Reference"
      />
      
    
      <Box sx={{ height: 650, width: "99%", mx: "auto" }}>
        <DataGrid
        checkboxSelection
          showToolbar
          rows={rows}
          // @ts-ignore
          columns={columns}

        />
        
      </Box>
    </Box>
    </div>
  )
}
