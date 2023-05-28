# test-react-farmart
 
## Frontend
1. El usuario debe tener un Frontend donde realice login para ingresar.
2. Al ingresar el sistema debe tener un panel lateral izquierdo donde encontrara un
modulo llamado Facturacion, se pueda apreciar de igual forma el usuario logeado en la
parte superior.
3. En este modulo de facturación, el Frontend debe capturar y guardar la siguiente
información:
### Datos de encabezado:
- Cedula del cliente
- Nombre del Cliente (Traído de la tabla)
- Eps del Cliente (traído de la tabla)
- Fecha actual
- Tipo facturación (EVENTO-CAPITACION) seleccionable
- Observacion (campo text abierto)
- Usuario (Quien elabora el documento)
- Debe generar un numero de venta automático (id) cuando se guarde

### Datos de Detalle facturado
- Linea por producto, para este campo el usuario debe seleccionar 3 O 4 productos
creados en la tabla Productos, y que se capture la cantidad que va a facturar por
producto, el lote, vencimiento y precio debe ser llamado de la tabla productos de
acuerdo a el código que seleccionen.

4. Una vez se guarde esta venta, se pueda consultar, modificar y eliminar.

# Resultado:

## Pasos de Instalacion:

1. clone el repositorio
2. ejecutar los siguientes comandos en la terminal (raiz):
 * npm install
 * npm run dev

***nota: credenciales para entrar 
usuario:kennyrmcali@gmail.com
password: 12345678***

## La interfaz esta compuesta de 3 CRUD
* Personas : esta completa
* Facturas : no esta terminada
* Usuarios : esta completa

## Debe cambiarse las rutas en src/contex/AppContext.jsx, para poder conectar al backend:

solo debe cambiar el http://localhost:85

  * const url_backend ='http://localhost:85/test-backend/public/api/'
  * const url_img = "http://localhost:85/test-backend/public/images/img_api/"

***nota: detalles la interfaz no es muy amigable con el diseño es mi primer Desarrollo React (Solo con la libreria, el framework nextjs(React) te ayuda con cosas mas de configuracion vas mas al desarrollo, como su propio enrutador).
tengo detalles con el enrutador si miran con cuido, me enfoque en intentar de terminar la app, ver si al final corregia esos detalle pero no me gano el tiempo.***


