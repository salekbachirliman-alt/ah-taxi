# SH Taxi

Aplicación web progresiva (PWA) en desarrollo para pasajeros y taxistas. El repositorio se mantiene como `ah-taxi`, pero la aplicación se presenta como **SH Taxi**.

## Incluido en esta primera versión
- Pasajeros sin cuenta, sin SMS y sin verificación por correo.
- Formulario de recogida, destino y teléfono de contacto.
- Mapa de taxistas disponibles con Leaflet/OpenStreetMap.
- Acceso de taxistas con correo y contraseña.
- Disponibilidad del conductor y solicitudes abiertas.
- Contacto del pasajero visible al conductor asignado tras aceptar el viaje.
- Diseño móvil blanco, negro, rojo y verde.

## Seguridad de datos
Los teléfonos de los pasajeros se guardan en una tabla separada y las políticas RLS permiten que los lea el conductor asignado, no el público. No hay claves secretas ni service-role en el código del navegador. La clave publishable de Supabase sí se utiliza en el frontend, junto con las políticas RLS.

## Backend Supabase
Proyecto independiente: `sh-taxi`. No modifica Taxi Local v3/v4.

## Publicación (un paso manual necesario)
He añadido un workflow de GitHub Actions para publicar el sitio estático en GitHub Pages. Para autorizar la publicación:
1. Abre [Settings → Pages](https://github.com/salekbachirliman-alt/ah-taxi/settings/pages).
2. En **Build and deployment**, elige **GitHub Actions** como fuente.
3. Guarda y abre la pestaña **Actions** para ver el estado de “Deploy SH Taxi to GitHub Pages”.
4. Cuando el despliegue termine correctamente, GitHub mostrará la URL pública en Settings → Pages.

La URL esperada suele ser `https://salekbachirliman-alt.github.io/ah-taxi/`, pero no debe darse por publicada hasta que GitHub confirme el despliegue.

## Antes de ofrecerlo al público
Esta versión todavía necesita pruebas reales desde iPhone y Android: alta de taxista, permisos de ubicación, inserción de solicitud anónima, aceptación simultánea, contacto privado y funcionamiento de la política de seguridad. No usar como servicio comercial hasta verificar esos flujos. El servicio necesita internet para mapa y Supabase; la geolocalización exige HTTPS y permiso del navegador.
