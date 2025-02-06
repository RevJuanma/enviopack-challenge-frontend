<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->

# Envíopack - Challenge Frontend React

## Objetivo

Este proyecto es una aplicación web en React que simula una tienda e-commerce. La aplicación utiliza un archivo JSON para obtener la información del usuario y los productos, y se enfoca en replicar el diseño proporcionado en las capturas de pantalla lo más fielmente posible.

## Características

- Catálogo de productos con paginación (6 productos por página)
- Filtrado de productos por nombre
- Ordenamiento de productos por precio
- Carrito de compras
- Proceso de checkout
- Visualización del estado de la compra (éxito o error)

## Requisitos Técnicos

- Desarrollado en React
- Nombre del proyecto: `enviopack-challenge-frontend`
- Alojado en un repositorio público de Github

## Instalación

1. Clonar el repositorio:

   ```
   git clone https://github.com/tu-usuario/enviopack-challenge-frontend.git
   ```

2. Navegar al directorio del proyecto:

   ```
   cd enviopack-challenge-frontend
   ```

3. Instalar las dependencias:

   ```
   npm install
   ```

4. Iniciar la aplicación:
   ```
   npm start
   ```

## Estructura del Proyecto

- `src/app/`: Configuración del store de Redux Toolkit
- `src/components/`: Componentes UI
- `src/constants/`: Constantes utilizadas en toda la aplicación
- `src/features/`: Slices y lógica de Redux Toolkit
- `src/hooks/`: Custom hooks
- `src/pages/`: Componentes de página para cada vista principal
- `src/services/`: Funciones para realizar peticiones fetch
- `src/utils/`: Funciones de utilidad y helpers

## Pantallas Principales

1. **Login**:

   - Barra de navegación con links al catálogo y carrito
   - Listado de productos con paginación
   - Filtrado y ordenamiento de productos

2. **Home (Catálogo)**:

   - Barra de navegación (Header) con links al catálogo y carrito
   - Filtrado y ordenamiento de productos
   - Listado de productos
   - Paginación

3. **Cart (Carrito)**:

   - Lista de productos agregados
   - Opción para eliminar productos individualmente
   - Cálculo del importe total
   - Botones para volver al catálogo y finalizar la compra

4. **Order Status (Éxito)**:

   - Mensaje de éxito
   - Actualización del crédito disponible
   - Opción para volver al catálogo

5. **Order Status (Error)**:
   - Mensaje de error
   - Opción para volver al carrito

## Tecnologías Utilizadas

- React
- React Router (para la navegación)
- Material UI
- Redux Toolkit
- Context API (para el manejo de estado global)
- CSS

## Autor

Revinski Juan Manuel