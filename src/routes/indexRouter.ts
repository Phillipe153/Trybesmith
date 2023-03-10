import { Router } from 'express';

import { getProductsController, postProductsController } from '../controllers/productsController';
import postProductsMiddlewares from '../middlewares/indexMiddlewares';
import postUserController from '../controllers/usersController';
import postNewUserMiddlewares from '../middlewares/usersMiddleware';
import getOrdersController from '../controllers/ordersController';

const router = Router();

router.get('/products', getProductsController);
router.post('/products', postProductsMiddlewares, postProductsController);

router.post('/users', postNewUserMiddlewares, postUserController);

router.get('/orders', getOrdersController);

export default router;