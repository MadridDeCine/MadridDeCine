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
| get  | /signup                 | Muestra el formulario para crear un formulario   |
| post | /signup                 | Guarda el usuario en BBDD                        |
| get  | /user/:id               | Muestra el formulario para crear un formulario   |
| get  | /user/:id               | Muestra el formulario para crear un formulario   |
| get  | /user/edit/:id          | Muestra el formulario para editar un usuario     |
| post | /user/edit/             | Edita el usuario                                 |
| get  | /films/new              | Muestra el formulario para crear una película    |
| post | /films/new              | Guarda la película en bbdd                       |
| get  | /films/list             | Muestra la lista de películas                    |
| get  | /films/details:id       | Muestra los detalles de una película             |
| get  | /films/edit/:id         | Muestra el formulario para editar un usuario     |
| get  | /films/edit             | Edita la película                                |
| post | /films/delete           | Elimina una pelicula                             |
| get  | /suggestions/new        | Muestra el formulario para crear una sugerencia  |
| post | /suggestions/new        | Guarda la sugerencia en bbdd                     |
| get  | /suggestions/list       | Muestra la lista de sugerencias                  |
| get  | /suggestions/details:id | Muestra los detalles de la sugerencia            |
| get  | /suggestions/edit/:id   | Muestra el formulario de editar una sugerencia   |
| post | /suggestions/edit       | Edita una sugerencia                             |
| get  | /suggestions/delete     | Elimina una sugerencia                           |
| get  | /meetings/new           | Muestra el formulario de crear un encuentro      |
| post | /meetings/new           | Guarda un encuentro en bbdd                      |
| get  | /meetings/list          | Muestra la lista de encuentros                   |
| get  | /meetings/details:id    | Muestra los detalles de un encuentro             |
| get  | /meetings/edit/:id      | Muestra el formulario de editar un encuentro     |
| post | /meetings/edit          | Edita un encuentro                               |
| get  | /meetings/delete        | Elimina un encuentro                             |


