import { Router } from 'express';

import auth from '../middlewares/auth';
import list from './list';
import userList from './userList';
import user from './user';

const router = Router();

router.get('/', (_, res) => res.send('🛒 Shoppa Server OK!'));

router.use('/user', user);

router.use(auth.authenticate);

router.use('/userlist', userList);
router.use('/list', list);

export default router;
