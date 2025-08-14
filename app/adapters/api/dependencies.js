import { CategoryRepositoryImpl } from './../persistence/repositories/category_repository_impl.js';
import { CategoryUseCases } from './../../core/use_cases/category_use_cases.js';
import { LicenceRepositoryImpl } from './../persistence/repositories/licence_repository_impl.js';
import { LicenceUseCases } from './../../core/use_cases/licence_use_cases.js';
import { ProductRepositoryImpl } from './../persistence/repositories/product_repository_impl.js';
import { ProductUseCases } from './../../core/use_cases/product_use_cases.js';

// Instanciamos repositorios
export const categoryRepository = new CategoryRepositoryImpl();
export const licenceRepository = new LicenceRepositoryImpl();
export const productRepository = new ProductRepositoryImpl();

// Instanciamos casos de uso
export const categoryUseCases = new CategoryUseCases(categoryRepository);
export const licenceUseCases = new LicenceUseCases(licenceRepository);
export const productUseCases = new ProductUseCases(productRepository);