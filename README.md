# MadridDeCine

Para ver el mapa con las ubicaciones de películas no es necesario estar identificado.

Para acceder a perfil, sugerencias, quedadas y añadir/modificar películas es necesario estar identificado.


## Modelos:

**- Usuarios:** :sunglasses:

No tienen roles.

Podrán estar en varias quedadas y dejar de participar en ellas.

Pueden marcar/desmarcar películas como favoritas (botón), que aparecerán en una lista.

Se mostrara una lista de películas favoritas y quedadas en las que se participa.


**- Películas** :movie_camera:

Se muestran en el mapa de la ciudad.


**- Sugerencias:** :coffee:

Pueden ser añadidas por los usuarios.

Se mostrarán en una lista.


**- Quedadas:** :tada:

Tendrán varios usuarios (botón para apuntarse).

Se mostrará en el detalle de la quedada los usuarios participantes.


## Endpoint :triangular_flag_on_post:

|method|      endpoint           |  descripción                                     |
|------|:------------------------|:-------------------------------------------------|
| get  | /auth/signup            | Muestra el formulario para crear un formulario   |
| post | /auth/signup            | Guarda el usuario en BBDD                        |
| get  | /auth/user/             | Muestra el formulario para crear un formulario   |
| get  | /auth/user/edit/:id     | Muestra el formulario para editar un usuario     |
| post | /auth/user/edit/:id     | Edita el usuario                                 |
| get  | /films                  | Muestra la lista de películas                    |
| get  | /films/new              | Muestra el formulario para crear una película    |
| post | /films/new              | Guarda la película en bbdd                       |
| get  | /films/details/:id      | Muestra los detalles de una película             |
| get  | /films/edit/:id         | Muestra el formulario para editar una pelicula   |
| post | /films/edit/:id         | Edita la película                                |
| get  | /films/delete/:id       | Elimina una pelicula                             |
| get  | /suggestions            | Muestra la lista de sugerencias                  |
| get  | /suggestions/new        | Muestra el formulario para crear una sugerencia  |
| post | /suggestions/new        | Guarda la sugerencia en bbdd                     |
| get  | /suggestions/details:id | Muestra los detalles de la sugerencia            |
| get  | /suggestions/edit/:id   | Muestra el formulario de editar una sugerencia   |
| post | /suggestions/edit/:id   | Edita una sugerencia                             |
| get  | /suggestions/delete/:id | Elimina una sugerencia                           |
| get  | /meetings               | Muestra la lista de encuentros                   |
| get  | /meetings/new           | Muestra el formulario de crear un encuentro      |
| post | /meetings/new           | Guarda un encuentro en bbdd                      |
| get  | /meetings/details/:id   | Muestra los detalles de un encuentro             |
| get  | /meetings/edit/:id      | Muestra el formulario de editar un encuentro     |
| post | /meetings/edit/:id      | Edita un encuentro                               |
| get  | /meetings/delete/:id    | Elimina un encuentro                             |


