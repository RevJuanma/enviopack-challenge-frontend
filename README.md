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
   git clone https://github.com/RevJuanma/enviopack-challenge-frontend
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

   - Ingresar usuario (juanignacio)
   - Ingresar password (abc123)

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