import { Router } from 'express';
import UserListController from '../controllers/userListController';

const router = Router();

router.post('/', UserListController.userListCreate);

router.get('/', UserListController.userListGetAll);
router.get('/:userlistid', UserListController.userListGetOne);

export default router;