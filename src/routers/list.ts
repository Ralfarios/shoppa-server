import { Router } from 'express';

import auth from '../middlewares/auth';
import ListController from '../controllers/listController';

const router = Router();

router.post('/:ULID/list', auth.authenticateList, ListController.listCreate);

router.get('/:ULID/list', auth.authenticateList, ListController.listGetAll);
router.get('/:ULID/list/:listid', auth.authorizeList, ListController.listGetOne);

router.put('/:ULID/list/:listid', auth.authorizeList, ListController.listUpdate);
router.patch('/:ULID/list/:listid', auth.authorizeList, ListController.listMarkAsDone);

router.delete('/:ULID/list/:listid', auth.authorizeList, ListController.listDelete);

export default router;