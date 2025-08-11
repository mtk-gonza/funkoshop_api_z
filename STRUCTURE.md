funkoshop_api_z/
├── app/                                # Código de aplicación principal
│   ├── adapters/                       # Adaptadores
│   │   ├── api/                        # Entrada: API REST
│   │   │   ├── routers/
│   │   │   │   ├── auth_router.py
│   │   │   │   ├── category_router.py
│   │   │   │   ├── image_router.py
│   │   │   │   ├── licence_router.py
│   │   │   │   ├── product_router.py
│   │   │   │   ├── product_spec_router.py
│   │   │   │   └── user_router.py
│   │   │   └── dependencies.py         # Inyección de dependencias, middlewares, etc.
│   │   │
│   │   └── persistence/                # Salida: base de datos, storage, etc.
│   │       ├── models/                 # Modelos ORM SQLAlchemy
│   │       │   ├── category_model.py
│   │       │   ├── image_model.py
│   │       │   ├── licence_model.py
│   │       │   ├── product_model.py
│   │       │   ├── product_spec_model.py
│   │       │   ├── role_model.py
│   │       │   ├── user_model.py
│   │       │   └── user_roles_model.py
│   │       │
│   │       └── repositories/           # Implementaciones concretas de los puertos
│   │           ├── category_repository_impl.py
│   │           ├── image_repository_impl.py
│   │           ├── licence_repository_impl.py
│   │           ├── product_repository_impl.py
│   │           ├── product_spec_repository_impl.py
│   │           ├── role_repository_impl.py
│   │           └── user_repository_impl.py
│   │  
│   ├── core/                           # Núcleo (dominio, casos de uso, puertos)
│   │   ├── config/                     # Configuración general
│   │   │   ├── settings.py             # Variables de entorno y config
│   │   │   └── database.py             # Engine, session, Base, get_db()
│   │   │
│   │   ├── entities/                   # Entidades del dominio (sin ORM)
│   │   │   ├── category_entity.py
│   │   │   ├── image_entity.py
│   │   │   ├── licence_entity.py
│   │   │   ├── product_entity.py
│   │   │   ├── product_spec_entity.py
│   │   │   ├── user_entity.py
│   │   │   └── role_entity.py
│   │   │
│   │   ├── enums/                      
│   │   │   ├── entity_type.py
│   │   │   ├── image_type.py
│   │   │   └── role_type.py
│   │   │
│   │   ├── exceptions/                      
│   │   │   ├── auth_exceptions.py
│   │   │   ├── category_exceptions.py
│   │   │   ├── image_exceptions.py
│   │   │   ├── licence_exceptions.py
│   │   │   ├── product_exceptions.py
│   │   │   ├── product_spec_exceptions.py
│   │   │   ├── role_exceptions.py
│   │   │   └── user_exceptions.py
│   │   │
│   │   ├── ports/                      # Puertos (interfaces de repositorios, servicios, etc.)
│   │   │   ├── category_repository.py
│   │   │   ├── image_repository.py
│   │   │   ├── licence_repository.py
│   │   │   ├── product_repository.py
│   │   │   ├── product_spec_repository.py
│   │   │   ├── role_repository.py
│   │   │   └── user_repository.py
│   │   │
│   │   ├── use_cases/                  # Casos de uso (lógica de negocio)
│   │   │   ├── auth_use_cases.py
│   │   │   ├── category_use_cases.py
│   │   │   ├── image_use_cases.py
│   │   │   ├── licence_use_cases.py
│   │   │   ├── product_use_cases.py
│   │   │   ├── product_spec_use_cases.py
│   │   │   ├── role_use_cases.py
│   │   │   └── user_use_cases.py
│   │   │
│   │   └── utils/                  
│   │       ├── jwt_handler.py
│   │       ├── password_utils.py
│   │       └── role_handler.py
│   │
│   ├── schemas/                        # Pydantic schemas (request/response)
│   │   ├── auth_schema.py
│   │   ├── category_schema.py
│   │   ├── image_schema.py
│   │   ├── licence_schema.py
│   │   ├── product_schema.py
│   │   ├── product_spec_schema.py
│   │   ├── role_schema.py
│   │   └── user_schema.py
│   │
│   └── seeds/                          # Scripts de carga inicial de datos
│       ├── data/
│       │   ├── categories_data.py 
│       │   ├── licence_data.py 
│       │   ├── products_data.py 
│       │   ├── roles_data.py 
│       │   └── users_data.py 
│       │     
│       ├── seeders/
│       │   ├── categories_seeder.py 
│       │   ├── licence_seeder.py 
│       │   ├── products_seeder.py 
│       │   ├── roles_seeder.py 
│       │   └── users_seeder.py 
│       │
│       └── seeder_handler.py
│
├── uploads/ 
│
├── main.py                             # Punto de entrada (crea FastAPI, incluye routers, etc.)
├── .env                                # Variables de entorno
├── requirements.txt                    # Dependencias
└── alembic/ or migrations/ (opcional)  # Archivos de migraciones, si usas Alembic