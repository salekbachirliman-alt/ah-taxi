# SH Taxi

Aplicación web progresiva (PWA) en desarrollo para pasajeros y taxistas. Este repositorio se llama `ah-taxi`, pero el nombre visible de la app es **SH Taxi**.

## Funciones del prototipo
- Pasajeros sin registro: formulario de solicitud con recogida, destino y contacto.
- Mapa con taxistas que publican su disponibilidad.
- Acceso separado para taxistas, disponibilidad y solicitudes.
- Diseño adaptable a móvil con blanco, negro, rojo y verde.

## Backend
Usa el proyecto Supabase independiente `sh-taxi`. La clave publishable se usa en el navegador; nunca colocar claves secretas o service-role en este repositorio.

## Estado importante
Esta es una primera integración y **no debe considerarse lista para servicio real** hasta probarla en un despliegue HTTPS y revisar todas las políticas RLS. Antes de publicar a pasajeros, hay que garantizar que los datos de contacto de una solicitud solo sean visibles para el taxista que la acepta. La lista pública de taxistas también debe limitarse a los datos necesarios.

## Publicar con GitHub Pages
1. Abre Settings → Pages en este repositorio.
2. En Build and deployment, elige **Deploy from a branch**.
3. Selecciona `main` y la carpeta `/ (root)`, y guarda.
4. Espera a que GitHub Pages muestre la URL HTTPS.

La geolocalización necesita HTTPS (o localhost). Las bibliotecas de mapas y Supabase requieren conexión a internet.
