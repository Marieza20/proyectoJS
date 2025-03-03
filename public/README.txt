Mi proyecto contiene la página de registro de usuario y de inicio de sesión.
Al iniciar sesión se valida si el usuario y la contraseña existen en el db.json y, de ser así
valida el tipo de usuario. Si no existe el usuario es necesario registrarse.
Al registrarse se ingresan los datos que se solicitan y al enviarse correctamente se agrega al
db.json y redirige al inicio de sesión.

Una vez iniciada la sesión lleva a la página correspondiente según el tipo de usuario.
Si es estudiante, la página muestra un formulario para llenar solicitudes y debajo una tabla con
las solicitudes realizadas por el estudiante. El estudiante puede eliminar estas solicitudes.
Tiene acceso a la página de información personal, que contiene los datos que ingreso en el
momento de registrarse. Puede editar estos datos y se actualizan en el db.json, así como puede
eliminar el usuario, lo borra del db.json y lo redirige al inicio de sesión.

La página de administradores es bastante similar, su página de inicio, no muestra el formulario pero
tiene la tabla con todas las solicitudes realizadas por todos los estudiantes. Además, cuenta con un
buscador que filtra la tabla según el dato buscado.
También tiene acceso a la página de información personal, igualmente puede actualizar los datos
y eliminar la cuenta.