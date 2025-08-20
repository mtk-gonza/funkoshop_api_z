import { CategoryRepositoryImpl } from './../persistence/repositories/category_repository_impl.js';
import { CategoryUseCases } from './../../core/use_cases/category_use_cases.js';
import { LicenceRepositoryImpl } from './../persistence/repositories/licence_repository_impl.js';
import { LicenceUseCases } from './../../core/use_cases/licence_use_cases.js';
import { ProductRepositoryImpl } from './../persistence/repositories/product_repository_impl.js';
import { ProductUseCases } from './../../core/use_cases/product_use_cases.js';
import { SpecificationRepositoryImpl } from './../persistence/repositories/specification_repository_impl.js';
import { SpecificationUseCase } from './../../core/use_cases/specification_use_cases.js';
import { RoleRepositoryImpl } from './../persistence/repositories/role_repository_impl.js';
import { RoleUseCases } from './../../core/use_cases/role_use_cases.js';
import { UserRepositoryImpl } from './../persistence/repositories/user_repository_impl.js';
import { UserUseCases } from './../../core/use_cases/user_use_cases.js';

// Instanciamos repositorios
export const categoryRepository = new CategoryRepositoryImpl();
export const licenceRepository = new LicenceRepositoryImpl();
export const productRepository = new ProductRepositoryImpl();
export const specificationRepository = new SpecificationRepositoryImpl();
export const roleRepository = new RoleRepositoryImpl();
export const userRepository = new UserRepositoryImpl();

// Instanciamos casos de uso
export const categoryUseCases = new CategoryUseCases(categoryRepository);
export const licenceUseCases = new LicenceUseCases(licenceRepository);
export const productUseCases = new ProductUseCases(productRepository);
export const specificationUseCases = new SpecificationUseCase(specificationRepository);
export const roleUseCases = new RoleUseCases(roleRepository);
export const userUseCases = new UserUseCases(userRepository);