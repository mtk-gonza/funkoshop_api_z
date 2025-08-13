import { CategoryRepositoryImpl } from "../persistence/repositories/category_repository_impl.js";
import { CategoryUseCases } from "../../core/use_cases/category_use_cases.js";

// Instanciamos repositorios
export const categoryRepository = new CategoryRepositoryImpl();

// Instanciamos casos de uso
export const categoryUseCases = new CategoryUseCases(categoryRepository);
