## Error Handling

  1. Modificamos el modelo para incluir errores personalizados.
  2. Creamos la carpeta de *Utils* para crear una función *handleMongooseError*.
  3. Lo incluimos en el post coaster dentro del catch. 
    3.1 Si no está ya, enviamos un estado 500 con la respuesta
  4. Settear el error que recibamos en cliente dentro del estado.
  5. Pasamos el error al formulario o al alert.

## Uso del .env en React

  1. Instalamos la dependencia dotenv-cli
  2. Create .env.local