funkoshop_api_z/
├── app/                                # Código de aplicación principal
│   ├── adapters/                       # Adaptadores
│   │   ├── api/                        # Entrada: API REST
│   │   │   ├── routers/
│   │   │   │   ├── auth_router.js
│   │   │   │   ├── category_router.js
│   │   │   │   ├── image_router.js
│   │   │   │   ├── licence_router.js
│   │   │   │   ├── product_router.js
│   │   │   │   ├── product_spec_router.js
│   │   │   │   └── user_router.js
│   │   │   └── dependencies.js         # Inyección de dependencias, middlewares, etc.
│   │   │
│   │   └── persistence/                # Salida: base de datos, storage, etc.
│   │       ├── models/                 # Modelos ORM Sequelize
│   │       │   ├── associations.js
│   │       │   ├── category_model.js
│   │       │   ├── image_model.js
│   │       │   ├── licence_model.js
│   │       │   ├── product_model.js
│   │       │   ├── product_spec_model.js
│   │       │   ├── role_model.js
│   │       │   ├── user_model.js
│   │       │   └── user_roles_model.js
│   │       │
│   │       └── repositories/           # Implementaciones concretas de los puertos
│   │           ├── category_repository_impl.js
│   │           ├── image_repository_impl.js
│   │           ├── licence_repository_impl.js
│   │           ├── product_repository_impl.js
│   │           ├── product_spec_repository_impl.js
│   │           ├── role_repository_impl.js
│   │           └── user_repository_impl.js
│   │ 
│   ├── config/                         # Configuración general
│   │   ├── settings.js                 # Variables de entorno y config
│   │   └── database.js                 # Sequelize, connectDB, createTables
│   │  
│   ├── core/                           # Núcleo (dominio, casos de uso, puertos)
│   │   │
│   │   ├── entities/                   # Entidades del dominio (sin ORM)
│   │   │   ├── category_entity.js
│   │   │   ├── image_entity.js
│   │   │   ├── licence_entity.js
│   │   │   ├── product_entity.js
│   │   │   ├── product_spec_entity.js
│   │   │   ├── user_entity.js
│   │   │   └── role_entity.js
│   │   │
│   │   ├── enums/                      # Simulando emun con Object.freeze                      
│   │   │   ├── entity_type.js
│   │   │   ├── image_type.js
│   │   │   └── role_type.js
│   │   │
│   │   ├── exceptions/                      
│   │   │   ├── auth_exceptions.js
│   │   │   ├── category_exceptions.js
│   │   │   ├── image_exceptions.js
│   │   │   ├── licence_exceptions.js
│   │   │   ├── product_exceptions.js
│   │   │   ├── product_spec_exceptions.js
│   │   │   ├── role_exceptions.js
│   │   │   └── user_exceptions.js
│   │   │
│   │   ├── ports/                      # Puertos (interfaces de repositorios, servicios, etc.)
│   │   │   ├── category_repository_port.js
│   │   │   ├── image_repository_port.js
│   │   │   ├── licence_repository_port.js
│   │   │   ├── product_repository_port.js
│   │   │   ├── product_spec_repository_port.js
│   │   │   ├── role_repository_port.js
│   │   │   └── user_repository_port.js
│   │   │
│   │   ├── use_cases/                  # Casos de uso (lógica de negocio)
│   │   │   ├── auth_use_cases.js
│   │   │   ├── category_use_cases.js
│   │   │   ├── image_use_cases.js
│   │   │   ├── licence_use_cases.js
│   │   │   ├── product_use_cases.js
│   │   │   ├── product_spec_use_cases.js
│   │   │   ├── role_use_cases.js
│   │   │   └── user_use_cases.js
│   │   │
│   │   └── utils/                  
│   │       ├── jwt_handler.js
│   │       ├── logger.js
│   │       ├── password_utils.js
│   │       └── role_handler.js
│   │
│   ├── schemas/                        # joi schemas (request/response)
│   │   ├── auth_schema.js
│   │   ├── category_schema.js
│   │   ├── image_schema.js
│   │   ├── licence_schema.js
│   │   ├── product_schema.js
│   │   ├── product_spec_schema.js
│   │   ├── role_schema.js
│   │   └── user_schema.js
│   │
│   └── seeds/                          # Scripts de carga inicial de datos
│       ├── data/
│       │   ├── categories_data.js 
│       │   ├── licence_data.js 
│       │   ├── products_data.js 
│       │   ├── roles_data.js 
│       │   └── users_data.js 
│       │     
│       ├── seeders/
│       │   ├── categories_seeder.js 
│       │   ├── licence_seeder.js 
│       │   ├── products_seeder.js 
│       │   ├── roles_seeder.js 
│       │   └── users_seeder.js 
│       │
│       └── seeder_handler.js
│
├── uploads/ 
│
├── .env                                # Variables de entorno
├── .gitignore
├── main.js                             # Punto de entrada (crea APP, incluye routers, etc.)
├── package-lock.json
├── package.json
├── README.md
└── STRUCTURE.md