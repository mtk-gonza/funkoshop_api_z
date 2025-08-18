import express from 'express';
import cors from 'cors';

import settings from './app/config/settings.js';
import categoryRouter from './app/adapters/api/routers/category_router.js';
import licenceRouter from './app/adapters/api/routers/licence_router.js';
import productRouter from './app/adapters/api/routers/product_router.js';
import specificationRouter from './app/adapters/api/routers/specification_router.js';
import roleRouter from './app/adapters/api/routers/role_router.js';
//import userRouter from './app/adapters/api/routers/user_router.js';

import { createTables } from './app/config/database.js';
import { runAllSeeders } from './app/seeds/seeder_handler.js';

const app = express();

//Settings
app.set('port', settings.PORT);

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

//Routes
app.use('/api/categories', categoryRouter);
app.use('/api/licences', licenceRouter);
app.use('/api/products', productRouter);
app.use('/api/specifications', specificationRouter);
app.use('/api/roles', roleRouter);
//app.use('/api/users', userRouter);

const main = () => {
	app.listen(app.get('port'), async () => {
		await createTables();
		await runAllSeeders();
		console.log(`Server running http://${settings.HOST}:${settings.PORT}`);
	});  
};

main();