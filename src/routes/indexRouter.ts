import { Router } from 'express';

import { getProductsController, postProductsController } from '../controllers/productsController';
import postProductsMiddlewares from '../middlewares/indexMiddlewares';
import postUserController from '../controllers/usersController';

const router = Router();

router.get('/products', getProductsController);
router.post('/products', postProductsMiddlewares, postProductsController);

router.post('/users', postUserController);

export default router;