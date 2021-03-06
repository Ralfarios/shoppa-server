import { Router } from 'express';

import { authorizeUserList } from '../middlewares/auth';
import UserListController from '../controllers/userListController';

const router = Router();

router.post('/', UserListController.userListCreate);

router.get('/', UserListController.userListGetAll);
router.get('/:userlistid', authorizeUserList, UserListController.userListGetOne);

router.put('/:userlistid', authorizeUserList, UserListController.userListEdit);

router.delete('/:userlistid', authorizeUserList, UserListController.userListDelete);

export default router;