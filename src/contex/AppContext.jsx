import { createContext } from "react" 
import { useEffect, useState } from "react";

export const AppContex = createContext() 

export function AppContextProvider(props) {
    const url_backend ='http://localhost:85/test-backend/public/api/'
    const url_img = "http://localhost:85/test-backend/public/images/img_api/"

    const usuario = {
        id: 0,
        email: "",
        imagen: "",
        estatus: true,
        msgEstatus: "",
        email_verified_at: "",
        creador_id: 0,
        persona_id: 0,
        access_token:"",
    }

    const [seccion, setSeccion] = useState(usuario);

  return (
    <AppContex.Provider value={{ 
        url_backend,
        url_img,
        setSeccion: setSeccion,
        seccion: seccion
    }}>
     {props.children}
    </AppContex.Provider>
  )
}
