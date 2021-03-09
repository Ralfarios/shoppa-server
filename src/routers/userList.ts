import { Router } from 'express';

import auth from '../middlewares/auth';
import UserListController from '../controllers/userListController';

const router = Router();

router.post('/', UserListController.userListCreate);

router.get('/', UserListController.userListGetAll);
router.get('/:userlistid', auth.authorizeUserList, UserListController.userListGetOne);

router.put('/:userlistid', auth.authorizeUserList, UserListController.userListEdit);

router.delete('/:userlistid', auth.authorizeUserList, UserListController.userListDelete);

export default router;