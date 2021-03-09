import { Router } from 'express';

import ListController from '../controllers/listController';

const router = Router();

router.post('/', ListController.listCreate);

router.get('/', ListController.listGetAll);
router.get('/:listid', ListController.listGetOne);

router.put('/:listid', ListController.listUpdate);

router.delete('/:listid', ListController.listDelete);

export default router;