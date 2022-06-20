import { Router } from 'express';

import { getProductsController, postProductsController } from '../controllers/productsController';
import postProductsMiddlewares from '../middlewares/indexMiddlewares';

const router = Router();

router.get('/', getProductsController);
router.post('/', postProductsMiddlewares, postProductsController);

export default router;