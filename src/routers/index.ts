import { Router } from 'express';

import userList from './userList';
import user from './user';

const router = Router();

router.get('/', (_, res) => res.send('🛒 Shoppa Server OK!'));

router.use('/user', user);

router.use('/userlist', userList);

export default router;
