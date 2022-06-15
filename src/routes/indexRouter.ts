import { Router } from 'express';

import { getProductsController, postProductsController } from '../controllers/productsController';

const router = Router();

router.get('/', getProductsController);
router.post('/', postProductsController);

export default router;