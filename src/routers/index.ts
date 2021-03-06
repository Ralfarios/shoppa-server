import { Router } from 'express';

import { authenticate } from '../middlewares/auth';
import userList from './userList';
import user from './user';

const router = Router();

router.get('/', (_, res) => res.send('🛒 Shoppa Server OK!'));

router.use('/user', user);

router.use(authenticate);
router.use('/userlist', userList);

export default router;
