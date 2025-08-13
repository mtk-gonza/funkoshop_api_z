1️⃣ Punto de entrada: Routers (app/adapters/api/routers)
Aquí definís los endpoints de tu API (por ejemplo, category_router.js o .py si fuera Python).

Importa de:
use_cases (casos de uso) para ejecutar la lógica de negocio.
schemas para validar requests y responses.
No debería importar directamente modelos ni repositorios.

adapters/api/routers/category_router
 ├─> core/use_cases/category_use_case
 └─> schemas/category_schema


2️⃣ Casos de uso: Use Cases (app/core/use_cases)
Encapsulan la lógica de negocio y orquestan llamadas a los puertos.

Importan de:
ports (interfaces de repositorios y servicios externos).
entities (modelos de dominio puros, sin persistencia).

core/use_cases/category_use_case
 ├─> core/ports/category_repository_port
 └─> core/entities/category_entity


3️⃣ Puertos: Ports (app/core/ports)
Son interfaces que definen qué operaciones se pueden hacer, pero no el cómo.

No dependen de la implementación, solo definen métodos.

Importan de:
entities para definir tipos de retorno y parámetros.

core/ports/category_repository_port
 └─> core/entities/category_entity

4️⃣ Implementaciones de repositorios: Repositories Impl (app/persistence/repositories)
Implementan las interfaces (ports) usando la infraestructura real (DB, API externa, etc.).

Importan de:

ports para saber qué métodos implementar.
models para interactuar con la base de datos.
No deben importar routers ni use_cases.

persistence/repositories/category_repository_impl
 ├─> core/ports/category_repository_port
 └─> persistence/models/category_model


5️⃣ Modelos de persistencia: Models (app/persistence/models)
Definen cómo se guardan los datos en la DB (ej. Sequelize, SQLAlchemy).

Importan de:
Librerías de ORM.
No deben importar nada de use_cases, routers ni entities de dominio.

persistence/models/category_model
 └─> sequelize (o equivalente)


6️⃣ Entidades de dominio: Entities (app/core/entities)
Representan los objetos de negocio puros, sin lógica de persistencia.
No deben importar nada de models ni de repositories_impl.


🔄 Resumen visual del flujo

Routers  --->  Use Cases  --->  Ports  --->  Repositories Impl  --->  Models
   ↑             ↑             ↑
 Schemas      Entities     Entities



 🔄 Flujo de dependencias
Routers (adapters/api/routers)
Reciben la solicitud HTTP y llaman a un controlador.

Controladores (adapters/api/controllers)
Llaman al caso de uso correspondiente (desde core/use_cases).

Casos de uso (core/use_cases)
Ejecutan la lógica de negocio y usan puertos (core/ports) para acceder a la base de datos o servicios externos.

Puertos (core/ports)
Son interfaces que definen cómo el caso de uso interactúa con la infraestructura (p. ej., CategoryRepository).

Implementaciones de puertos (adapters/persistence/repositories_impl)
Implementan los métodos definidos en core/ports usando un ORM, SQL puro, etc.

Modelos ORM (adapters/persistence/models)
Representan tablas o colecciones concretas.


[Cliente HTTP]
    ↓
category_router.js
    ↓ (usa)
category_use_cases.js
    ↓ (usa)
category_repository.js  ← Port (interfaz)
    ↓ (implementa)
category_repository_impl.js
    ↓ (usa)
category_model.js
    ↓ (DB)
Base de datos