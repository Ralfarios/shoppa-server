import { Router } from 'express';
import userController from '../controllers/userController';

const router = Router();

router.post('/register', userController.userRegister);
router.post('/login', userController.userLogin);

router.get('/getselfinfo', userController.userGetSelfInfo); // no need params
router.get('/:userinfo', userController.userGetInfo);

router.put('/updateselfinfo', userController.userEditInfo);
router.delete('/deleteself', userController.deleteUser);

export default router;