import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { AppContextProvider, AppContex } from './contex/AppContext'

//route
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import ErrorPage from './Components/error-page.jsx'
import Login from './Components/Auth/Login.jsx'
import Personas from './Components/Dashboard/Personas.jsx'
import Persona from './Components/Dashboard/Persona.jsx'
import EditarPersona from './Components/Dashboard/EditarPersona.jsx'
import InsertarPersona from './Components/Dashboard/InsertarPersona.jsx'
import Usuarios from './Components/Auth/Usuarios.jsx'
import Usuario from './Components/Auth/Usuario.jsx'
import Usuariose from './Components/Auth/Usuariose.jsx'
import Usuariosi from './Components/Auth/Usuariosi.jsx'
import Factura from './Components/Dashboard/Factura';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/factura",
    element: <Factura />,
  },
  {
    path: "/usuarios",
    element: <Usuarios />,
  },
  {
    path: "/personas",
    element: <Personas />,
  },
  {
    path: "/personas/:personaId",
    element: <Persona />,
  },
  {
    path: "/personase/:personaId",
    element: <EditarPersona />,
  },
  {
    path: "/personasi",
    element: <InsertarPersona />,
  },
  {
    path: "/usuarios",
    element: <Usuarios />,
  },
  {
    path: "/usuarios/:userId",
    element: <Usuario />,
  },
  {
    path: "/usuariose/:userId",
    element: <Usuariose />,
  },
  {
    path: "/usuariosi",
    element: <Usuariosi />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>,
)
