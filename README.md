# NETLIINKS S.A.
_NETWORKING & SECURITY_


# TODO

# Error 400 (bad request)
Cuando el cliente envía una petición que el servidor no puede comprender, aparece el error 400. Suele sucede cuando los datos enviados por el navegador no cumplen con las normas del protocolo HTTP. Es así que el servidor desconoce como procesar una solicitud que contiene una sintaxis incorrecta.

Cuando ves una página de error 400, es probable que exista algún tipo de componente inestable de parte de cliente como un sistema operativo que no se encuentra lo suficientemente protegido, un navegador defectuoso o un problema de caché. Así que es una buena idea realizar ciertas pruebas en tu ordenador antes de contactar al administrador de un sitio web por un error de este tipo.

Las pruebas que puedes hacer es intentar abrir la página en una navegador distinto o verificar si tu sistema operativo se encuentra con todas las actualizaciones importantes instaladas. Si al ingresar a diferentes sitios web obtienes este tipo de error, es probable que a tu ordenador necesite una revisión de seguridad.

# Error 401 (Authorization Required)
Si el cliente ha solicitado una página web que se encuentra protegida por una contraseña, el servidor devuelve el error 401. En este caso no se devuelve el error de manera típica, sino que aparece una ventana emergente en la cuál se solicita al usuario que ingrese una contraseña para acceder al sitio web. Si tienes la contraseña, podrás visualizar la página web sin problemas. Si no ingresas ninguna contraseña serás direccionado a la página que indica el error.

En este caso, no se trata de un posible fallo de tu ordenador ni nada por el estilo. Es simplemente que el administrador web ha decidido proteger todo su sitio web o parte del mismo de accesos no autorizado mediante una contraseña.

# Error 403 (Forbidden)


Este tipo de error se presenta cuando el servidor comprende la solicitud de cliente, pero por alguna razón no puede completarla. Las causas no se deben a sintaxis incorrecta o un problema de autorización, sino a que el administrador web no permite a los visitantes navegar por el directorio de archivos. Cuando este tipo de protección está activada, los visitantes no pueden acceder a las carpetas de forma directa. Otra posible razón que explica este tipo de error es que el archivo específico que ha solicitado el cliente no tiene permisos para ser visto desde la web. Todas estas medidas de seguridad son tomadas por el administrador web para proteger archivos que tienen información clasificada.

# Error 404 (Not Found)

404 es uno de los estados http más conocidos y es bastante probable que te hayas topado con este tipo de error alguna vez. Este código indica que el servidor no ha encontrado nada en la ubicación especificada por el cliente, ya sea porque la URL no se ha ingresado correctamente o la estructura de URLs permanentes (también conocidas como permalinks) ha sido modificada de tal manera que todos los enlaces han sido movidos a diferentes ubicaciones.

En ciertos casos, el error 404 también se puede presentar cuando un sitio ha sido trasladado recientemente a otro servido y el DNS apunta a la ubicación antigua. Pero este es un problema al que hay que darle un poco de tiempo para que se solucione.

Aunque en ciertas ocasiones es imposible evitar este error, es recomendable optimizar esta página en tu sitio web y activar la re-dirección automática en caso hayas modificado los enlaces permanentes del sitio.

# Error 408 (Request Time-Out)

Cuando la solicitud del servidor está tomando demasiado tiempo, la sesión expira y el servidor finaliza la conexión, en este momento el navegador muestra el error 408. Esto sucede usualmente porque el servidor no recibió una solicitud completa del cliente durante el periodo de tiempo que tenía configurado para esperar. Si el error es recurrente puede suceder debido a una carga demasiado pesada para el servidor o por parte del sistema de cliente. En ciertos casos, ambas partes involucradas en la conexión funcionan correctamente, pero la conexión de internet puede obstruir el tiempo de envío del mensaje.

Algunos sitios web personalizan esta página de error, al igual que se suele hacer con las páginas 404, aunque no están común como encontrar páginas de error 404 personalizadas y optimizadas por los administradores.

El error 408 suele ser solucionado fácilmente al refrescar la página con el botón respectivo del navegador.

# Error 410 (Gone)

El código de error 410 es bastante parecido al popular 404. Ambos indican que el servidor no encuentra el archivo solicitado, la diferencia es que el código 404 implica que el archivo puede estar ubicado en otro directorio del servidor, mientras que el 410 indica que el archivo ya no se encuentra disponible.

El código 404 se utiliza cuando existe una posibilidad de que el archivo se encuentre disponible en otra ubicación. Es decir, el archivo tal vez puede ser visto al colocar otra URL y el servidor no descarta esta posibilidad. Sin embargo, el 410 indica que el archivo ya no se encuentra disponible y es bastante probable que el administrador web haya hecho esta modificación en el directorio.

# Error 500 (Internal Server Error)

El código 500 es uno de los más conocidos cuando se trata de errores por parte del servidor. Se emplea cada vez que el servidor se encuentra con algún tipo de fallo que no le permite completar la solicitud del cliente. Es un código bastante genérico pues se emplea cuando ningún otro código de error sirve para explicar el fallo que se ha presentado.

Aunque este código indica explícitamente un fallo de lado del servidor, es posible que el cliente tome acciones simples para solucionarlo como refrescar la página, borrar el almacenamiento caché, borrar las cookies y reiniciar el navegador.

# Error 502 (Bad Gateway)

El código 502 indica un error de comunicación entre dos servidores. Sucede cuando el cliente se conecta a un servidor que actúa como un proxy o un portal que necesita acceder a un servidor ascendente, el cual proporciona un servicio adicional al servidor inicial. En estos casos, usualmente el otro servidor se localiza en un nivel superior en la jerarquía de servidores.

En otras palabras, cuando se produce un error 502 implica que no hay una respuesta válida por parte del servidor ascendente. No quiere decir necesariamente que este servidor esté caído, sino que los dos servidores no coinciden en el protocolo a usarse para intercambiar información. Sucede usualmente cuando uno de las máquinas no se encuentra correctamente configurada.

# Error 503 (Service Temporarily Unavailable)

Este error puede aparecer cada vez que se da una sobrecarga en el servidor o cuando se está realizando algún mantenimiento programado. El error 503 indica que el servidor no se encuentra disponible de momento. De momento es la palabra clave en este caso pues este tipo de error es usualmente una condición temporal que puede ser resuelta en horas (si se detecta a tiempo).

# Error 504 (Gateway Time-Out)

El código 504 también incida un error de comunicación entre dos servidores al igual que el error 502. En este caso particular se reconoce que el servidor de menor nivel no ha recibido una respuesta en el tiempo permitido por el servidor ascendente al cual ha accedido.

Es el mismo problema que ocurre en el caso del error 408, solo que el fallo no se da entre cliente y servidor, sino entre dos servidores. Este error implica que existe una comunicación tardía entre dos servidores, aunque también es posible que el servidor de mayor nivel esté caído y por esta razón se produzca este código de error.