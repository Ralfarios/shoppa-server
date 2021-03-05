import { Router } from 'express';

import list from './list';
import user from './user';

const router = Router();

router.get('/', (_, res) => res.send('🛒 Shoppa Server OK!'));

router.use('/user', user);

router.use('/list', list);

export default router;
