

# Sistema de Gestión de Productos

Este es un sistema de gestión de productos desarrollado en ECMAScript (JavaScript). El sistema consta de tres archivos principales:

1. **app.js:** Este archivo contiene el servidor Express que expone una API para interactuar con la clase `ProductManager`. Permite agregar productos, obtener la lista de productos y buscar productos por ID.

2. **productManager.js:** Aquí se encuentra la definición de la clase `ProductManager`. Esta clase permite gestionar productos, agregándolos, obteniendo la lista de productos y buscando productos por ID. Además, asegura que los códigos de producto sean únicos.

3. **test.js:** Este archivo contiene pruebas unitarias para comprobar el correcto funcionamiento de `ProductManager`. Verifica que se puedan agregar productos, que los códigos sean únicos y que se puedan buscar productos por ID.

## Cómo Usar

1. Clona el repositorio.

2. Instala las dependencias si es necesario (puedes necesitar Express para ejecutar el servidor).

3. Ejecuta la aplicación con `node app.js`. El servidor estará activo en el puerto 8080.

4. Puedes realizar solicitudes HTTP para agregar productos, obtener la lista de productos y buscar productos por ID. Por ejemplo:

   - Para agregar un producto: Realiza una solicitud POST a `http://localhost:8080/products` con los detalles del producto en el cuerpo de la solicitud.

   - Para obtener la lista de productos: Realiza una solicitud GET a `http://localhost:8080/products`.

   - Para buscar un producto por ID: Realiza una solicitud GET a `http://localhost:8080/products/{id}` donde `{id}` es el ID del producto que deseas buscar.

5. El archivo `test.js` proporciona ejemplos y pruebas unitarias que puedes ejecutar para verificar el funcionamiento del sistema.

### Notas Adicionales

- Asegúrate de que el servidor esté en funcionamiento antes de realizar solicitudes HTTP.

- La clase `ProductManager` garantiza que los códigos de producto sean únicos y que se generen automáticamente.

- El servidor Express responde a solicitudes POST para agregar productos, solicitudes GET para obtener la lista de productos y solicitudes GET para buscar productos por ID.

Este es un resumen básico de cómo funciona el sistema.
### Autor
- Escobar