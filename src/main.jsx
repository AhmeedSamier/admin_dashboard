import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// @ts-ignore
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
 import App from './App.jsx'
import Dashboard from './page/dashboard/Dashboard'
import Team from './page/team/Team'
import Contacts from './page/contacts/Contacts'
import Invoices from './page/invoices/Invoices'
 import Form from './page/form/Form'
 import Calendar from './page/calendar/Calendar'
 import Faq from './page/faq/Faq'
import BarChart from './page/barChart/BarChart'
import PieChart from './page/pieChart/PieChart'
import LineChart from './page/lineChart/LineChart'
import Geography from './page/geography/Geography'
import NotFound from './page/notFound/NotFound'
import Registration from './components/Regestration'
import SignIn from './components/SignIn'
import { AuthProvider } from './components/context/AuthContext'
import { ItemsProvider } from './components/context/ItemsContext'; 
import TasksPage from './page/tasks/TasksPage'

 
 


const router = createBrowserRouter(
  createRoutesFromElements(
       <Route>
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard/>} />
      <Route path="team" element={<Team/>} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="calendar" element={<Calendar />} />
       <Route path="faq" element={<Faq />} />
        <Route path="bar" element={<BarChart />} />
        <Route path="pie" element={<PieChart />} />
        <Route path="line" element={<LineChart />} />
        <Route path="geography" element={<Geography />} />
         <Route path="tasks" element={<TasksPage />} />
         <Route path="*" element={<NotFound />} /> 
        </Route>

      <Route path="/register" element={<Registration />} />
      <Route path="/signin" element={<SignIn />} />

    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider> 
       <ItemsProvider> 
    <RouterProvider router={router} />
    </ItemsProvider>
    </AuthProvider>
  </StrictMode>,
)





