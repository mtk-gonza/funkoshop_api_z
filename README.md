# Funkoshop API
API de ejemplo para gestión de productos, licencias, categorías, roles y usuarios. Usando express y sequelize en arquitectura hexagonal.

## Instalación
1. Clona el repositorio, renombrar:
   ```bash
   cd funkoshop_api_z
   cp .env.example .env 
   ```
2. Configurar las variables de entorno del .env
3. Corre la aplicación localmente :
   ```bash
   npm start
   ```
   O como modo desarrollo:
   ```bash
   npm run dev
   ```
## Notas
- Asegúrate de tener una base de datos configurada y la variable de entorno correspondiente.
- La estructura sigue el patrón hexagonal para facilitar el mantenimiento y escalabilidad.