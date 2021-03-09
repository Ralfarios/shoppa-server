import { Router } from 'express';

import auth from '../middlewares/auth';
import ListController from '../controllers/listController';

const router = Router();

router.post('/:ULID/list', auth.authenticateList, ListController.listCreate);

router.get('/:ULID/list', auth.authenticateList, ListController.listGetAll);
router.get('/:ULID/list/:listid', ListController.listGetOne);

router.put('/:ULID/list/:listid', ListController.listUpdate);

router.delete('/:ULID/list/:listid', ListController.listDelete);

export default router;