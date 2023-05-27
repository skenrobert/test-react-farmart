import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { AppContextProvider, AppContex } from './contex/AppContext'

//route
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import ErrorPage from './Components/error-page.jsx'
import Contact from './Components/Contact.jsx'
import About from './Components/About.jsx'
import Login from './Components/Auth/Login.jsx'
import Personas from './Components/Dashboard/Personas.jsx'
import Persona from './Components/Dashboard/Persona.jsx'
import EditarPersona from './Components/Dashboard/EditarPersona.jsx'
import InsertarPersona from './Components/Dashboard/InsertarPersona.jsx'
import Usuarios from './Components/Auth/Usuarios.jsx'
import Usuario from './Components/Auth/Usuario.jsx'
import Usuariose from './Components/Auth/Usuariose.jsx'
import Usuariosi from './Components/Auth/Usuariosi.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "contacts/:contactId",
    //     element: <Contact />,
    //   },
    // ],
  },
  {
    path: "/contacts/",
    element: <div>Hello world!</div>,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "/contacts/:contactId",
    //     element: <Contact />,
    //   },
    // ],
  },
  {
    path: "contacts/:contactId",
    element: <div>Hello world!</div>,
  },
  {
    path: "/menu",
    element: <div>Hello world!</div>,
  },
  {
    path: "/about",
    element: <div>Hello world!</div>,
  },
  {
    path: "/autocompletar",
    element: <div>Hello world!</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/factura",
    element: <h1> factura</h1>,
  },
  {
    path: "/usuarios",
    element: <Usuarios />,
  },
  {
    path: "/personas",
    element: <Personas />,
    // children: [
    //   {
    //     path: "/personas/:personaId",
    //     element: <EditarPersona />,
    //   },
    // ],
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
      {/* <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/flatly/bootstrap.min.css"
        /> */}
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>,
)
