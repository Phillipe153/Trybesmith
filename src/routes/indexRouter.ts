import { Router } from 'express';

import getProductsController from '../controllers/productsController';

const router = Router();

router.get('/', getProductsController);

export default router;